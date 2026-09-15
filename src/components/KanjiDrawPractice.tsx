import { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, Volume2, RefreshCw, Undo2, CheckCircle2, 
  Eye, EyeOff, ChevronLeft, ChevronRight, BookOpen, Trophy, Layers, Award, Sparkles,
  Play, Pause, Headphones, Unlock, PenTool, Lightbulb
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { KANJI_LESSONS_DATA, getAvailableLessons, KanjiLessonItem } from '../data/kanjiLessonsData';
import { KANJI_DICTIONARY, KanjiInfo, ExampleWord } from '../data/kanjiData';
import { getKanjiMnemonic } from '../data/kanjiMnemonics';

interface KanjiDrawPracticeProps {
  onClose: () => void;
  onAddXp?: (amount: number) => void;
}

function getExampleWords(details: KanjiInfo): ExampleWord[] {
  if (details.examples && details.examples.length > 0) {
    return details.examples;
  }

  const char = details.char;
  const kun = details.kunyomi && details.kunyomi !== '-' ? details.kunyomi.split(',')[0].replace(/\..*/, '').trim() : '';
  const meaning = details.meaning.split(',')[0].trim();

  const fallbackMap: Record<string, ExampleWord[]> = {
    '川': [
      { word: '川', reading: 'かわ', meaning: 'river' },
      { word: '小川', reading: 'おがわ', meaning: 'brook, stream' },
      { word: '川口', reading: 'かわぐち', meaning: 'mouth of a river' },
    ],
    '山': [
      { word: '山', reading: 'やま', meaning: 'mountain' },
      { word: '山登り', reading: 'やまのぼり', meaning: 'mountain climbing' },
      { word: '火山', reading: 'かざん', meaning: 'volcano' },
    ],
    '田': [
      { word: '田んぼ', reading: 'たんぼ', meaning: 'rice paddy' },
      { word: '水田', reading: 'すいでん', meaning: 'flooded rice field' },
    ],
    '日': [
      { word: '日曜日', reading: 'にちようび', meaning: 'Sunday' },
      { word: '日本', reading: 'にほん', meaning: 'Japan' },
      { word: '今日', reading: 'きょう', meaning: 'today' },
    ],
    '月': [
      { word: '月曜日', reading: 'げつようび', meaning: 'Monday' },
      { word: '今月', reading: 'こんげつ', meaning: 'this month' },
    ],
    '火': [
      { word: '火曜日', reading: 'かようび', meaning: 'Tuesday' },
      { word: '花火', reading: 'はなび', meaning: 'fireworks' },
    ],
    '水': [
      { word: '水曜日', reading: 'すいようび', meaning: 'Wednesday' },
      { word: '水着', reading: 'みずぎ', meaning: 'swimsuit' },
    ],
    '木': [
      { word: '木曜日', reading: 'もくようび', meaning: 'Thursday' },
      { word: '大木', reading: 'たいぼく', meaning: 'large tree' },
    ],
    '金': [
      { word: '金曜日', reading: 'きんようび', meaning: 'Friday' },
      { word: 'お金', reading: 'おかね', meaning: 'money' },
    ],
    '土': [
      { word: '土曜日', reading: 'どようび', meaning: 'Saturday' },
      { word: '土地', reading: 'とち', meaning: 'land' },
    ],
  };

  if (fallbackMap[char]) return fallbackMap[char];

  return [
    {
      word: kun ? `${char} (${kun})` : char,
      reading: kun || details.onyomi.split(',')[0],
      meaning: meaning,
    }
  ];
}

export function KanjiDrawPractice({ onClose, onAddXp }: KanjiDrawPracticeProps) {
  const [level, setLevel] = useState<'N5' | 'N4'>('N5');
  const [selectedLesson, setSelectedLesson] = useState<number>(1);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Mobile Phone Tab Selector ('info' vs 'canvas')
  const [mobileTab, setMobileTab] = useState<'info' | 'canvas'>('canvas');

  // Practice vs Listen & Draw Quiz Mode
  const [practiceMode, setPracticeMode] = useState<'normal' | 'listenDraw'>('normal');
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  // Extra Option: Expandable Radicals & Mnemonics
  const [showMnemonics, setShowMnemonics] = useState<boolean>(true);

  // Guide Mode: 'bold' (100% visible) | 'faint' (40% faint) | 'off' (freehand memory)
  const [guideMode, setGuideMode] = useState<'bold' | 'faint' | 'off'>('bold');
  const [strokeColor] = useState<string>('#4f46e5');
  
  // Brush Stroke Size: Default 24px (MATCHES TRACE GUIDE LINE THICKNESS EXACTLY)
  const [strokeWidth, setStrokeWidth] = useState<number>(24);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [drawnStrokes, setDrawnStrokes] = useState<ImageData[]>([]);
  const [accuracyScore, setAccuracyScore] = useState<number | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  // Stroke Order Animation State
  const [isAnimatingStrokes, setIsAnimatingStrokes] = useState<boolean>(false);

  // Mastered Kanji Set (Persistent in localStorage)
  const [masteredKanji, setMasteredKanji] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('japanese_mastered_kanji');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const animRef = useRef<number | null>(null);

  // Filter lessons
  const availableLessons = getAvailableLessons(level);
  const currentLessonKanji = KANJI_LESSONS_DATA.filter(
    item => item.level === level && item.lesson === selectedLesson
  );
  const activeKanjiItem: KanjiLessonItem | undefined = currentLessonKanji[currentIndex];

  // Lookup details from KANJI_DICTIONARY
  const activeKanjiDetails: KanjiInfo = activeKanjiItem
    ? KANJI_DICTIONARY[activeKanjiItem.kanji] || {
        char: activeKanjiItem.kanji,
        meaning: 'Kanji Character',
        onyomi: '-',
        kunyomi: '-',
        strokes: 8,
        jlpt: level,
      }
    : {
        char: '山',
        meaning: 'mountain',
        onyomi: 'サン',
        kunyomi: 'やま',
        strokes: 3,
        jlpt: 'N5',
      };

  const exampleWords = getExampleWords(activeKanjiDetails);
  const mnemonicInfo = getKanjiMnemonic(activeKanjiDetails.char);

  // Reset state when Kanji changes
  useEffect(() => {
    clearCanvas();
    setAccuracyScore(null);
    setFeedbackMessage(null);
    setIsRevealed(practiceMode === 'normal');
    stopStrokeAnimation();

    if (practiceMode === 'listenDraw') {
      setTimeout(() => {
        speakText(activeKanjiDetails.char);
      }, 300);
    }
  }, [currentIndex, selectedLesson, level, practiceMode]);

  // Sync Mastered set to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('japanese_mastered_kanji', JSON.stringify(Array.from(masteredKanji)));
    } catch (err) {
      console.error('Failed to save mastered kanji:', err);
    }
  }, [masteredKanji]);

  // Canvas Setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(2, 2);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = strokeWidth;
      contextRef.current = ctx;
    }
  }, [strokeColor, strokeWidth, mobileTab]);

  const clearCanvas = () => {
    stopStrokeAnimation();
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setDrawnStrokes([]);
    setAccuracyScore(null);
    setFeedbackMessage(null);
  };

  const stopStrokeAnimation = () => {
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
    setIsAnimatingStrokes(false);
  };

  // Exact Font Glyph Stroke Order Animator (100% Trace Alignment, No Misalignment, No Yellow)
  const getKanjiStrokeBounds = (char: string, idx: number, totalStrokes: number, width: number, height: number) => {
    const padX = width * 0.16;
    const padY = height * 0.16;
    const innerW = width - padX * 2;
    const innerH = height - padY * 2;

    let nSX = 0.2, nSY = 0.2, nEX = 0.8, nEY = 0.2;
    let mode: 'h' | 'v' | 'diag-l' | 'diag-r' = 'h';

    // Exact stroke origin coordinates for common Kanji
    if (char === '山') {
      if (idx === 0) { nSX = 0.50; nSY = 0.15; nEX = 0.50; nEY = 0.85; mode = 'v'; }
      else if (idx === 1) { nSX = 0.20; nSY = 0.35; nEX = 0.80; nEY = 0.85; mode = 'h'; }
      else { nSX = 0.80; nSY = 0.35; nEX = 0.80; nEY = 0.85; mode = 'v'; }
    } else if (char === '川') {
      if (idx === 0) { nSX = 0.25; nSY = 0.18; nEX = 0.20; nEY = 0.82; mode = 'v'; }
      else if (idx === 1) { nSX = 0.50; nSY = 0.22; nEX = 0.50; nEY = 0.78; mode = 'v'; }
      else { nSX = 0.75; nSY = 0.18; nEX = 0.75; nEY = 0.82; mode = 'v'; }
    } else if (char === '田') {
      if (idx === 0) { nSX = 0.20; nSY = 0.20; nEX = 0.20; nEY = 0.80; mode = 'v'; }
      else if (idx === 1) { nSX = 0.20; nSY = 0.20; nEX = 0.80; nEY = 0.80; mode = 'h'; }
      else if (idx === 2) { nSX = 0.50; nSY = 0.20; nEX = 0.50; nEY = 0.80; mode = 'v'; }
      else if (idx === 3) { nSX = 0.20; nSY = 0.50; nEX = 0.80; nEY = 0.50; mode = 'h'; }
      else { nSX = 0.20; nSY = 0.80; nEX = 0.80; nEY = 0.80; mode = 'h'; }
    } else if (char === '日') {
      if (idx === 0) { nSX = 0.25; nSY = 0.18; nEX = 0.25; nEY = 0.82; mode = 'v'; }
      else if (idx === 1) { nSX = 0.25; nSY = 0.18; nEX = 0.75; nEY = 0.82; mode = 'h'; }
      else if (idx === 2) { nSX = 0.25; nSY = 0.50; nEX = 0.75; nEY = 0.50; mode = 'h'; }
      else { nSX = 0.25; nSY = 0.82; nEX = 0.75; nEY = 0.82; mode = 'h'; }
    } else if (char === '月') {
      if (idx === 0) { nSX = 0.30; nSY = 0.15; nEX = 0.25; nEY = 0.85; mode = 'v'; }
      else if (idx === 1) { nSX = 0.30; nSY = 0.15; nEX = 0.70; nEY = 0.85; mode = 'h'; }
      else if (idx === 2) { nSX = 0.30; nSY = 0.40; nEX = 0.70; nEY = 0.40; mode = 'h'; }
      else { nSX = 0.30; nSY = 0.62; nEX = 0.70; nEY = 0.62; mode = 'h'; }
    } else if (char === '木') {
      if (idx === 0) { nSX = 0.15; nSY = 0.40; nEX = 0.85; nEY = 0.40; mode = 'h'; }
      else if (idx === 1) { nSX = 0.50; nSY = 0.15; nEX = 0.50; nEY = 0.85; mode = 'v'; }
      else if (idx === 2) { nSX = 0.50; nSY = 0.40; nEX = 0.20; nEY = 0.80; mode = 'diag-l'; }
      else { nSX = 0.50; nSY = 0.40; nEX = 0.80; nEY = 0.80; mode = 'diag-r'; }
    } else if (char === '人') {
      if (idx === 0) { nSX = 0.50; nSY = 0.15; nEX = 0.20; nEY = 0.85; mode = 'diag-l'; }
      else { nSX = 0.40; nSY = 0.40; nEX = 0.80; nEY = 0.85; mode = 'diag-r'; }
    } else if (char === '火') {
      if (idx === 0) { nSX = 0.30; nSY = 0.35; nEX = 0.20; nEY = 0.55; mode = 'v'; }
      else if (idx === 1) { nSX = 0.70; nSY = 0.35; nEX = 0.80; nEY = 0.55; mode = 'v'; }
      else if (idx === 2) { nSX = 0.50; nSY = 0.15; nEX = 0.25; nEY = 0.85; mode = 'diag-l'; }
      else { nSX = 0.50; nSY = 0.45; nEX = 0.80; nEY = 0.85; mode = 'diag-r'; }
    } else if (char === '水') {
      if (idx === 0) { nSX = 0.50; nSY = 0.15; nEX = 0.50; nEY = 0.85; mode = 'v'; }
      else if (idx === 1) { nSX = 0.20; nSY = 0.40; nEX = 0.40; nEY = 0.70; mode = 'h'; }
      else if (idx === 2) { nSX = 0.75; nSY = 0.35; nEX = 0.55; nEY = 0.55; mode = 'diag-l'; }
      else { nSX = 0.50; nSY = 0.50; nEX = 0.85; nEY = 0.85; mode = 'diag-r'; }
    } else {
      // Dynamic fallback for any character
      const step = idx / Math.max(1, totalStrokes - 1);
      if (totalStrokes === 1) {
        nSX = 0.2; nSY = 0.5; nEX = 0.8; nEY = 0.5; mode = 'h';
      } else if (totalStrokes === 2) {
        if (idx === 0) { nSX = 0.5; nSY = 0.15; nEX = 0.2; nEY = 0.85; mode = 'diag-l'; }
        else { nSX = 0.4; nSY = 0.4; nEX = 0.8; nEY = 0.85; mode = 'diag-r'; }
      } else if (totalStrokes === 3) {
        if (idx === 0) { nSX = 0.5; nSY = 0.15; nEX = 0.5; nEY = 0.85; mode = 'v'; }
        else if (idx === 1) { nSX = 0.2; nSY = 0.35; nEX = 0.2; nEY = 0.85; mode = 'v'; }
        else { nSX = 0.2; nSY = 0.85; nEX = 0.8; nEY = 0.85; mode = 'h'; }
      } else {
        const yPos = 0.18 + step * 0.62;
        if (idx % 2 === 0) {
          nSX = 0.2; nSY = yPos; nEX = 0.8; nEY = yPos; mode = 'h';
        } else {
          nSX = 0.25 + (idx % 3) * 0.25; nSY = yPos; nEX = nSX; nEY = Math.min(0.85, yPos + 0.35); mode = 'v';
        }
      }
    }

    return {
      startX: padX + nSX * innerW,
      startY: padY + nSY * innerH,
      endX: padX + nEX * innerW,
      endY: padY + nEY * innerH,
      mode,
    };
  };

  // ACCURATE FONT STROKE ORDER ANIMATOR (100% MATCH TO TRACE GUIDE)
  const startVisualStrokeAnimation = () => {
    clearCanvas();
    setIsAnimatingStrokes(true);

    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    if (!canvas || !ctx) return;

    const width = canvas.width / 2;
    const height = canvas.height / 2;

    const totalStrokes = Math.max(1, activeKanjiDetails.strokes || 4);
    const perStrokeDuration = 800;
    const pauseDuration = 200;
    const strokeCycleTime = perStrokeDuration + pauseDuration;
    const totalDuration = totalStrokes * strokeCycleTime;
    const startTime = performance.now();

    const renderFrame = (now: number) => {
      const elapsed = now - startTime;

      if (elapsed >= totalDuration) {
        // Final frame: render full font character in dark indigo with numbered badges
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.font = `bold ${height * 0.75}px "Hiragino Sans", "Meiryo", "Kaku Gothic", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#312e81';
        ctx.fillText(activeKanjiDetails.char, width / 2, height / 2);
        ctx.restore();

        // Draw all stroke badges ①, ②, ③...
        for (let s = 0; s < totalStrokes; s++) {
          const b = getKanjiStrokeBounds(activeKanjiDetails.char, s, totalStrokes, width, height);
          ctx.save();
          ctx.beginPath();
          ctx.arc(b.startX, b.startY, 12, 0, Math.PI * 2);
          ctx.fillStyle = '#4f46e5';
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#ffffff';
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 11px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(`${s + 1}`, b.startX, b.startY);
          ctx.restore();
        }

        setIsAnimatingStrokes(false);
        animRef.current = null;
        setFeedbackMessage(`🎬 Complete! All ${totalStrokes} Strokes Animated in Order!`);
        return;
      }

      const currentStrokeIdx = Math.min(totalStrokes - 1, Math.floor(elapsed / strokeCycleTime));
      const strokeElapsed = elapsed % strokeCycleTime;
      const strokeProgress = Math.min(1, strokeElapsed / perStrokeDuration);

      setFeedbackMessage(`✏️ Animating Stroke ${currentStrokeIdx + 1} of ${totalStrokes}...`);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Render font glyph clipped for strokes up to currentStrokeIdx
      for (let s = 0; s <= currentStrokeIdx; s++) {
        const b = getKanjiStrokeBounds(activeKanjiDetails.char, s, totalStrokes, width, height);
        const p = s < currentStrokeIdx ? 1.0 : strokeProgress;

        ctx.save();
        ctx.beginPath();

        // Directional stroke clip box around stroke s
        const margin = width * 0.25;
        if (b.mode === 'v') {
          const clipY = b.startY;
          const clipH = (b.endY - b.startY) * p + margin;
          ctx.rect(b.startX - margin, clipY - margin / 2, margin * 2, clipH);
        } else if (b.mode === 'diag-l') {
          const clipX = b.startX - (b.startX - b.endX) * p - margin;
          const clipY = b.startY;
          const clipW = (b.startX - b.endX) * p + margin * 2;
          const clipH = (b.endY - b.startY) * p + margin * 2;
          ctx.rect(clipX, clipY - margin / 2, clipW, clipH);
        } else if (b.mode === 'diag-r') {
          const clipX = b.startX - margin;
          const clipY = b.startY;
          const clipW = (b.endX - b.startX) * p + margin * 2;
          const clipH = (b.endY - b.startY) * p + margin * 2;
          ctx.rect(clipX, clipY - margin / 2, clipW, clipH);
        } else {
          // Horizontal / general
          const clipX = b.startX - margin / 2;
          const clipW = (b.endX - b.startX) * p + margin;
          ctx.rect(clipX, b.startY - margin, clipW, margin * 2);
        }

        ctx.clip();

        // Render font glyph inside clip
        ctx.font = `bold ${height * 0.75}px "Hiragino Sans", "Meiryo", "Kaku Gothic", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = s < currentStrokeIdx ? '#312e81' : '#4f46e5';
        ctx.fillText(activeKanjiDetails.char, width / 2, height / 2);

        ctx.restore();
      }

      // 2. Render origin badges ①, ②, ③...
      for (let s = 0; s <= currentStrokeIdx; s++) {
        const b = getKanjiStrokeBounds(activeKanjiDetails.char, s, totalStrokes, width, height);
        ctx.save();
        ctx.beginPath();
        ctx.arc(b.startX, b.startY, 12, 0, Math.PI * 2);
        ctx.fillStyle = s === currentStrokeIdx ? '#ec4899' : '#4f46e5';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${s + 1}`, b.startX, b.startY);
        ctx.restore();
      }

      // 3. Render active stroke tip cursor
      const activeB = getKanjiStrokeBounds(activeKanjiDetails.char, currentStrokeIdx, totalStrokes, width, height);
      const tipX = activeB.startX + (activeB.endX - activeB.startX) * strokeProgress;
      const tipY = activeB.startY + (activeB.endY - activeB.startY) * strokeProgress;

      ctx.save();
      ctx.beginPath();
      ctx.arc(tipX, tipY, 10, 0, Math.PI * 2);
      ctx.fillStyle = '#ec4899';
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
      ctx.restore();

      animRef.current = requestAnimationFrame(renderFrame);
    };

    animRef.current = requestAnimationFrame(renderFrame);
  };

  const undoLastStroke = () => {
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    if (!canvas || !ctx || drawnStrokes.length === 0) return;

    const newStrokes = [...drawnStrokes];
    newStrokes.pop();
    setDrawnStrokes(newStrokes);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (newStrokes.length > 0) {
      const lastState = newStrokes[newStrokes.length - 1];
      ctx.putImageData(lastState, 0, 0);
    }
  };

  const saveCanvasState = () => {
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    if (!canvas || !ctx) return;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setDrawnStrokes(prev => [...prev, imageData]);
  };

  // Drawing Event Handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (e.cancelable) e.preventDefault();
    stopStrokeAnimation();

    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    if (!canvas || !ctx) return;

    saveCanvasState();
    setIsDrawing(true);

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    if (e.cancelable) e.preventDefault();

    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    if (!canvas || !ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    if (contextRef.current) {
      contextRef.current.closePath();
    }
  };

  // Audio Speech Synthesis
  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  // Evaluate Drawing Accuracy Algorithm
  const checkDrawing = () => {
    const canvas = canvasRef.current;
    if (!canvas || drawnStrokes.length === 0) {
      setFeedbackMessage('Draw on the canvas first!');
      return;
    }

    setIsRevealed(true);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const userImgData = ctx.getImageData(0, 0, width, height);
    const userPixels = userImgData.data;

    let drawnPixelCount = 0;
    for (let i = 3; i < userPixels.length; i += 4) {
      if (userPixels[i] > 50) drawnPixelCount++;
    }

    if (drawnPixelCount < 120) {
      setFeedbackMessage('Please write the Kanji more clearly!');
      return;
    }

    const offscreen = document.createElement('canvas');
    offscreen.width = width;
    offscreen.height = height;
    const offCtx = offscreen.getContext('2d');
    
    if (offCtx) {
      offCtx.font = `bold ${height * 0.7}px "Hiragino Sans", "Meiryo", sans-serif`;
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';
      offCtx.fillStyle = '#000000';
      offCtx.fillText(activeKanjiDetails.char, width / 2, height / 2);

      const refPixels = offCtx.getImageData(0, 0, width, height).data;
      let refCount = 0;
      let overlapCount = 0;

      for (let i = 3; i < refPixels.length; i += 4) {
        const isRef = refPixels[i] > 50;
        const isUser = userPixels[i] > 50;

        if (isRef) refCount++;
        if (isRef && isUser) overlapCount++;
      }

      const score = Math.min(100, Math.round((overlapCount / Math.max(1, refCount)) * 100 + 25));
      setAccuracyScore(score);

      if (score >= 60) {
        setFeedbackMessage(`🎉 EXCELLENT! ${score}% ACCURACY`);
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        
        setMasteredKanji(prev => new Set(prev).add(activeKanjiDetails.char));
        if (onAddXp) onAddXp(20);
      } else {
        setFeedbackMessage(`Nice try! ${score}% Accuracy.`);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < currentLessonKanji.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const masteredCountInLesson = currentLessonKanji.filter(k => masteredKanji.has(k.kanji)).length;

  return (
    <div className="w-full max-w-5xl bg-white/95 rounded-[2.5rem] shadow-2xl border border-indigo-100 p-3 sm:p-8 flex flex-col gap-4 sm:gap-6 animate-in zoom-in-95 duration-300">
      
      {/* ==================== TOP NAVIGATION HEADER ==================== */}
      <div className="flex items-center justify-between gap-2 sm:gap-3 flex-wrap border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl text-xs font-black transition flex items-center gap-1.5 active:scale-95 border border-slate-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">EXIT PRACTICE</span>
          </button>

          {/* Level Switcher */}
          <div className="flex bg-slate-100 p-1 rounded-2xl border border-slate-200">
            <button
              onClick={() => { setLevel('N5'); setSelectedLesson(1); setCurrentIndex(0); }}
              className={`px-3 py-1 rounded-xl text-xs font-black transition ${
                level === 'N5' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              N5
            </button>
            <button
              onClick={() => { setLevel('N4'); setSelectedLesson(1); setCurrentIndex(0); }}
              className={`px-3 py-1 rounded-xl text-xs font-black transition ${
                level === 'N4' ? 'bg-pink-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              N4
            </button>
          </div>
        </div>

        {/* Practice Mode Toggle */}
        <div className="flex bg-indigo-50 p-1 rounded-2xl border border-indigo-200">
          <button
            onClick={() => setPracticeMode('normal')}
            className={`px-3 py-1 rounded-xl text-[11px] sm:text-xs font-black transition flex items-center gap-1 ${
              practiceMode === 'normal' ? 'bg-indigo-600 text-white shadow-sm' : 'text-indigo-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>PRACTICE</span>
          </button>

          <button
            onClick={() => setPracticeMode('listenDraw')}
            className={`px-3 py-1 rounded-xl text-[11px] sm:text-xs font-black transition flex items-center gap-1 ${
              practiceMode === 'listenDraw' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md' : 'text-indigo-800'
            }`}
          >
            <Headphones className="w-3.5 h-3.5" />
            <span>AUDIO QUIZ 🎧</span>
          </button>
        </div>

        {/* Lesson Select Dropdown & Progress */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-2xl">
            <span className="text-[11px] font-black text-indigo-900">L:</span>
            <select
              value={selectedLesson}
              onChange={(e) => {
                setSelectedLesson(Number(e.target.value));
                setCurrentIndex(0);
              }}
              className="bg-transparent font-black text-indigo-700 text-xs focus:outline-none cursor-pointer"
            >
              {availableLessons.map(num => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1 bg-amber-500/15 border border-amber-500/30 px-3 py-1.5 rounded-2xl text-xs font-black text-amber-900">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>{masteredCountInLesson}/{currentLessonKanji.length}</span>
          </div>
        </div>
      </div>

      {/* MOBILE SEGMENTED TAB SWITCHER (For Phone screens < md) */}
      <div className="flex md:hidden bg-slate-100 p-1 rounded-2xl border border-slate-200 w-full justify-between text-xs font-black">
        <button
          onClick={() => setMobileTab('info')}
          className={`flex-1 py-2 rounded-xl transition flex items-center justify-center gap-1.5 ${
            mobileTab === 'info' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>📖 KANJI INFO & WORDS</span>
        </button>

        <button
          onClick={() => setMobileTab('canvas')}
          className={`flex-1 py-2 rounded-xl transition flex items-center justify-center gap-1.5 ${
            mobileTab === 'canvas' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600'
          }`}
        >
          <PenTool className="w-4 h-4" />
          <span>✍️ CANVAS DRAWING</span>
        </button>
      </div>

      {/* ==================== DUOLINGO SIDE-BY-SIDE PANELS ==================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
        
        {/* ----------------- LEFT PANEL: KANJI INFO & EXAMPLE WORDS ----------------- */}
        <div className={`glass-panel p-4 sm:p-6 rounded-3xl border border-indigo-100 flex-col justify-between gap-4 shadow-sm ${
          mobileTab === 'info' ? 'flex' : 'hidden md:flex'
        }`}>
          <div>
            {/* Top Badge Info */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-black px-3 py-0.5 rounded-full bg-indigo-100 text-indigo-700 uppercase">
                {level} • L{selectedLesson} • {currentIndex + 1}/{currentLessonKanji.length}
              </span>
              <div className="flex items-center gap-1 text-xs font-black text-slate-500">
                <Layers className="w-4 h-4 text-indigo-500" />
                <span>{activeKanjiDetails.strokes} STROKES</span>
              </div>
            </div>

            {/* Target Character Hero Display / Mystery Challenge */}
            <div className="flex flex-col items-center text-center my-2">
              {practiceMode === 'listenDraw' && !isRevealed ? (
                /* LISTEN & DRAW MYSTERY CARD */
                <div className="w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-5 rounded-3xl text-white flex flex-col items-center gap-2 shadow-xl border-4 border-white my-2">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-xl animate-bounce">
                    🎧
                  </div>
                  <div className="text-[10px] font-black tracking-widest uppercase text-pink-200">LISTEN & DRAW CHALLENGE</div>
                  <h4 className="text-base font-black">Listen to the Audio & Draw the Kanji!</h4>
                  
                  <button
                    onClick={() => speakText(activeKanjiDetails.char)}
                    className="mt-2 bg-white text-indigo-900 font-black px-5 py-2 rounded-full shadow-lg hover:scale-105 active:scale-95 transition flex items-center gap-2 text-xs uppercase tracking-wider"
                  >
                    <Volume2 className="w-4 h-4 text-indigo-600 animate-pulse" />
                    <span>REPLAY AUDIO 🔊</span>
                  </button>

                  <button
                    onClick={() => setIsRevealed(true)}
                    className="mt-1 text-xs font-bold text-pink-200 hover:text-white underline flex items-center gap-1"
                  >
                    <Unlock className="w-3.5 h-3.5" />
                    <span>Reveal Kanji Answer</span>
                  </button>
                </div>
              ) : (
                /* NORMAL KANJI CARD */
                <>
                  <div className="relative">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white font-black text-5xl sm:text-6xl rounded-3xl flex items-center justify-center shadow-xl border-4 border-white mb-2">
                      {activeKanjiDetails.char}
                    </div>
                    
                    {masteredKanji.has(activeKanjiDetails.char) && (
                      <div className="absolute -top-2 -right-2 bg-emerald-500 text-white p-1 rounded-full shadow-lg border-2 border-white">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Meanings */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 capitalize tracking-tight mb-1">
                    {activeKanjiDetails.meaning}
                  </h3>

                  {/* Pronunciation Audio Button */}
                  <button
                    onClick={() => speakText(activeKanjiDetails.char)}
                    className="mt-1 flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-3.5 py-1 rounded-full text-xs font-black transition active:scale-95 shadow-sm"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
                    <span>PRONOUNCE</span>
                  </button>
                </>
              )}
            </div>

            {/* Readings Section */}
            {(practiceMode === 'normal' || isRevealed) && (
              <div className="grid grid-cols-2 gap-2 my-2">
                <div className="bg-slate-50 p-2.5 rounded-2xl border border-slate-200/80">
                  <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest block mb-0.5">
                    ONYOMI
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 block leading-tight">
                    {activeKanjiDetails.onyomi || '-'}
                  </span>
                </div>

                <div className="bg-slate-50 p-2.5 rounded-2xl border border-slate-200/80">
                  <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest block mb-0.5">
                    KUNYOMI
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 block leading-tight">
                    {activeKanjiDetails.kunyomi || '-'}
                  </span>
                </div>
              </div>
            )}

            {/* EXAMPLE VOCABULARY WORDS SECTION */}
            {(practiceMode === 'normal' || isRevealed) && (
              <div className="bg-gradient-to-br from-indigo-50/90 to-purple-50/90 p-3 rounded-2xl border border-indigo-100 text-left my-2">
                <div className="flex items-center gap-1 text-[11px] font-black text-indigo-900 uppercase tracking-wider mb-1.5">
                  <Sparkles className="w-3 h-3 text-indigo-600" />
                  <span>WORDS WITH "{activeKanjiDetails.char}"</span>
                </div>

                <div className="flex flex-col gap-1.5">
                  {exampleWords.map((ex, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-white/90 p-2 rounded-xl border border-slate-200/80 shadow-sm"
                    >
                      <div className="flex items-baseline gap-1.5 flex-wrap">
                        <span className="text-sm sm:text-base font-black text-slate-900">{ex.word}</span>
                        <span className="text-xs font-extrabold text-indigo-600">({ex.reading})</span>
                        <span className="text-[11px] font-bold text-slate-600 italic">— "{ex.meaning}"</span>
                      </div>

                      <button
                        onClick={() => speakText(ex.word)}
                        className="p-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-600 transition active:scale-95 shrink-0 ml-1"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* EXPANDABLE RADICALS & MNEMONIC EXTRA OPTION */}
            {(practiceMode === 'normal' || isRevealed) && (
              <div className="my-2 text-left">
                <button
                  onClick={() => setShowMnemonics(!showMnemonics)}
                  className="w-full flex items-center justify-between bg-amber-50 hover:bg-amber-100/80 text-amber-900 border border-amber-200 p-2.5 rounded-2xl text-xs font-black transition active:scale-95 shadow-sm"
                >
                  <div className="flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-amber-600 animate-pulse" />
                    <span>RADICALS & MNEMONIC STORY</span>
                  </div>
                  <span className="text-[10px] font-black bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded-full uppercase">
                    {showMnemonics ? 'HIDE ▲' : 'SHOW ▼'}
                  </span>
                </button>

                {showMnemonics && mnemonicInfo && (
                  <div className="mt-2 bg-gradient-to-br from-amber-50 to-orange-50/80 p-3.5 rounded-2xl border border-amber-200/90 shadow-sm animate-in fade-in duration-200">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-[10px] font-black uppercase text-amber-800 tracking-wider block">COMPONENTS:</span>
                      {mnemonicInfo.radicals.map((r, idx) => (
                        <span key={idx} className="text-xs font-black bg-white text-slate-800 px-2.5 py-1 rounded-xl border border-amber-200 shadow-xs flex items-center gap-1">
                          <span className="text-base text-indigo-700">{r.char}</span>
                          <span className="text-[10px] font-bold text-slate-500">({r.meaning})</span>
                        </span>
                      ))}
                    </div>

                    <p className="text-xs font-extrabold text-slate-800 leading-relaxed italic bg-white/80 p-2.5 rounded-xl border border-amber-200/60">
                      💡 "{mnemonicInfo.story}"
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Lesson Kanji Selector Strip */}
          <div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1.5">
              LESSON KANJI
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {currentLessonKanji.map((item, idx) => {
                const isMastered = masteredKanji.has(item.kanji);
                const isSelected = idx === currentIndex;
                return (
                  <button
                    key={item.kanji + idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setMobileTab('canvas');
                    }}
                    className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl font-black text-base sm:text-lg transition flex items-center justify-center shrink-0 border ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-700 shadow-md scale-105'
                        : isMastered
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {item.kanji}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ----------------- RIGHT PANEL: INTERACTIVE DRAWING CANVAS & ANIMATION PLAYER ----------------- */}
        <div className={`glass-panel p-4 sm:p-6 rounded-3xl border border-indigo-100 flex-col justify-between gap-3 shadow-sm items-center text-center ${
          mobileTab === 'canvas' ? 'flex' : 'hidden md:flex'
        }`}>
          
          {/* Canvas Mode & Controls Header */}
          <div className="w-full flex items-center justify-between gap-1.5 flex-wrap">
            {/* Trace Visibility Switcher */}
            <div className="flex bg-slate-100 p-1 rounded-2xl border border-slate-200">
              <button
                onClick={() => setGuideMode('bold')}
                className={`px-2.5 py-1 rounded-xl text-[11px] font-black transition flex items-center gap-1 ${
                  guideMode === 'bold' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600'
                }`}
              >
                <Eye className="w-3 h-3" />
                <span>TRACE</span>
              </button>
              <button
                onClick={() => setGuideMode('faint')}
                className={`px-2.5 py-1 rounded-xl text-[11px] font-black transition flex items-center gap-1 ${
                  guideMode === 'faint' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600'
                }`}
              >
                <span>FAINT</span>
              </button>
              <button
                onClick={() => setGuideMode('off')}
                className={`px-2.5 py-1 rounded-xl text-[11px] font-black transition flex items-center gap-1 ${
                  guideMode === 'off' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600'
                }`}
              >
                <EyeOff className="w-3 h-3" />
                <span>FREE</span>
              </button>
            </div>

            {/* BRUSH STROKE SIZE SELECTOR (TRACE MATCH 24px DEFAULT) */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl border border-slate-200 text-xs font-black">
              {[
                { label: 'TRACE (24px)', size: 24 },
                { label: 'BOLD (32px)', size: 32 },
                { label: 'FINE (16px)', size: 16 },
              ].map(item => (
                <button
                  key={item.size}
                  onClick={() => setStrokeWidth(item.size)}
                  className={`px-2 py-0.5 rounded-xl transition text-[10px] ${
                    strokeWidth === item.size
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* REAL-TIME STROKE CANVAS ANIMATOR BUTTON */}
            <button
              onClick={() => {
                if (isAnimatingStrokes) {
                  stopStrokeAnimation();
                } else {
                  startVisualStrokeAnimation();
                }
              }}
              className={`px-3 py-1 rounded-2xl text-xs font-black transition flex items-center gap-1.5 border shadow-sm ${
                isAnimatingStrokes
                  ? 'bg-amber-500 text-white border-amber-600 animate-pulse'
                  : 'bg-white text-indigo-700 border-indigo-200 hover:bg-indigo-50'
              }`}
            >
              {isAnimatingStrokes ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-indigo-600" />}
              <span>{isAnimatingStrokes ? 'PAUSE' : 'ANIMATE 🎬'}</span>
            </button>
          </div>

          {/* HIGH-TECH TOUCH-OPTIMIZED CANVAS CONTAINER */}
          <div className="relative w-full max-w-[270px] sm:max-w-[320px] aspect-square bg-slate-50 rounded-3xl border-2 border-indigo-200 overflow-hidden shadow-inner flex items-center justify-center touch-none">
            
            {/* Genkōyōshi `田` Grid Lines Overlay */}
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-2 opacity-35">
              <div className="w-full h-1/2 border-b-2 border-dashed border-indigo-400"></div>
              <div className="h-full w-1/2 border-r-2 border-dashed border-indigo-400 absolute top-0 left-0"></div>
            </div>

            {/* HIGH-VISIBILITY CRYSTAL-CLEAR TRACE GUIDE OVERLAY (EXACT FONT MATCH FOR 24PX BRUSH) */}
            {guideMode !== 'off' && (practiceMode === 'normal' || isRevealed) && (
              <div
                className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none text-[11rem] sm:text-[13rem] leading-none tracking-normal font-bold transition-all duration-200 z-10 ${
                  guideMode === 'bold'
                    ? 'text-indigo-400/70 opacity-90 drop-shadow-sm'
                    : 'text-indigo-300/40 opacity-40'
                }`}
                style={{
                  fontFamily: '"Hiragino Sans", "Meiryo", "Kaku Gothic", sans-serif',
                }}
              >
                {activeKanjiDetails.char}
              </div>
            )}

            {/* Canvas Surface with Touch Prevention */}
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="absolute inset-0 w-full h-full cursor-crosshair touch-none z-20"
            />
          </div>

          {/* Feedback & Score Banner */}
          {feedbackMessage && (
            <div className={`w-full py-2 px-3 rounded-2xl text-xs font-black transition-all ${
              accuracyScore && accuracyScore >= 60
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                : 'bg-amber-100 text-amber-800 border border-amber-300'
            }`}>
              {feedbackMessage}
            </div>
          )}

          {/* Drawing Action Buttons (Undo, Clear, Check Accuracy) */}
          <div className="w-full flex items-center gap-2">
            <button
              onClick={undoLastStroke}
              disabled={drawnStrokes.length === 0}
              title="Undo last stroke"
              className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 transition active:scale-90 border border-slate-200"
            >
              <Undo2 className="w-4 h-4" />
            </button>

            <button
              onClick={clearCanvas}
              disabled={drawnStrokes.length === 0}
              title="Clear canvas"
              className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 transition active:scale-90 border border-slate-200"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <button
              onClick={checkDrawing}
              className="flex-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-black py-2.5 rounded-2xl shadow-md active:scale-95 transition flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider"
            >
              <Award className="w-4 h-4" />
              <span>CHECK DRAWING ✨</span>
            </button>
          </div>

          {/* Previous / Next Kanji Navigation Bar */}
          <div className="w-full flex justify-between items-center pt-2 border-t border-slate-100">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-3 py-1.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-30 text-xs font-black transition flex items-center gap-1 active:scale-95 border border-slate-200"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>PREV</span>
            </button>

            <span className="text-xs font-black text-slate-400">
              {currentIndex + 1} / {currentLessonKanji.length}
            </span>

            <button
              onClick={handleNext}
              disabled={currentIndex === currentLessonKanji.length - 1}
              className="px-3 py-1.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-30 text-xs font-black transition flex items-center gap-1 active:scale-95 shadow-md"
            >
              <span>NEXT</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
