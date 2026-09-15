import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Card } from '../types/card';
import { Volume2, RotateCw, Sparkles, Check, X } from 'lucide-react';

interface CardItemProps {
  card: Card;
  onSwipe: (id: string, remembered: boolean) => void;
  active: boolean;
  stackIndex?: number;
}

function isValidKanji(kanji?: string | null): boolean {
  if (!kanji) return false;
  const cleaned = kanji.trim();
  if (!cleaned) return false;

  // Filter out OCR symbol artifacts like "一 〜", "一〜", "〜", "-", "ー", "一 -", etc.
  if (/^[\s\-\~〜～・ー—_]+$/.test(cleaned)) return false;
  if (/^[一\s]*[〜~ー\-\_・]+[一\s]*$/.test(cleaned)) return false;
  if (cleaned === '一 〜' || cleaned === '一〜' || cleaned === '一 -' || cleaned === '一-' || cleaned === '〜') return false;

  // Must contain actual Kanji characters (U+4E00 - U+9FAF)
  const containsKanjiChar = /[\u4E00-\u9FAF]/.test(cleaned);
  if (!containsKanjiChar) return false;

  return true;
}

// Robust Japanese Audio Pronunciation Engine
function playJapaneseAudio(rawText: string, onStateChange: (speaking: boolean) => void) {
  if (!rawText) return;

  // Clean text of non-Japanese artifacts, notes in parentheses, English letters, and stray symbols
  const cleanText = rawText
    .replace(/[\(\[\（\【].*?[\)\]\）\】]/g, '')
    .split(/[,、\/]/)[0]
    .replace(/[a-zA-Z0-9]/g, '')
    .replace(/^[〜~\s]+|[〜~\s]+$/g, '')
    .replace(/[^\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/g, '')
    .trim();

  const targetText = cleanText || rawText.replace(/[^\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/g, '').trim();
  if (!targetText) return;

  // Strategy 1: Web Speech API with ja-JP native voice selection
  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(targetText);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.85; // Natural learning speed

      const voices = window.speechSynthesis.getVoices();
      const jaVoice = 
        voices.find(v => v.lang === 'ja-JP' && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Kyoko') || v.name.includes('Otoya'))) ||
        voices.find(v => v.lang === 'ja-JP') ||
        voices.find(v => v.lang.toLowerCase().startsWith('ja')) ||
        voices.find(v => /japanese|日本語/i.test(v.name));

      if (jaVoice) {
        utterance.voice = jaVoice;
      }

      utterance.onstart = () => onStateChange(true);
      utterance.onend = () => onStateChange(false);
      utterance.onerror = () => fallbackAudioTTS(targetText, onStateChange);

      window.speechSynthesis.speak(utterance);
      return;
    } catch {
      // Fall through to audio element fallback
    }
  }

  // Strategy 2: HTML5 Audio Fallback Engine
  fallbackAudioTTS(targetText, onStateChange);
}

function fallbackAudioTTS(text: string, onStateChange: (speaking: boolean) => void) {
  try {
    const encoded = encodeURIComponent(text);
    const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=ja&client=tw-ob`;
    const audio = new Audio(audioUrl);
    
    onStateChange(true);
    audio.onended = () => onStateChange(false);
    audio.onerror = () => onStateChange(false);
    audio.play().catch(() => onStateChange(false));
  } catch {
    onStateChange(false);
  }
}

export function CardItem({ card, onSwipe, active, stackIndex = 0 }: CardItemProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  // Preload speech voices on mount
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
      const handleVoicesChanged = () => window.speechSynthesis.getVoices();
      window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
      return () => window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
    }
  }, []);

  // Dynamic green (Right / Mastered) and red (Left / Review) swipe overlays
  const greenOpacity = useTransform(x, [10, 80, 180], [0, 0.5, 1]);
  const redOpacity = useTransform(x, [-180, -80, -10], [1, 0.5, 0]);

  const hasKanji = isValidKanji(card.kanji);
  // If card has tilde in kanji artifact but not reading, append tilde for clean reading display
  const displayReading = (!hasKanji && card.kanji?.includes('〜') && !card.reading.includes('〜'))
    ? `${card.reading}〜`
    : card.reading;

  // Function to pronounce Japanese word using Web Speech API with fallback
  const speakJapanese = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    playJapaneseAudio(displayReading || card.kanji || '', setIsSpeaking);
  };

  // Keyboard controls for active card
  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.code === 'KeyA') {
        e.preventDefault();
        speakJapanese();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        onSwipe(card.id, true);
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        onSwipe(card.id, false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [active, card.id, card.kanji, card.reading]);

  const handleDragEnd = (_event: any, info: any) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      onSwipe(card.id, true); // Swiped Right -> Mastered
    } else if (info.offset.x < -threshold) {
      onSwipe(card.id, false); // Swiped Left -> Needs Review
    }
  };

  // Stack depth visual offsets
  const scale = 1 - stackIndex * 0.04;
  const translateY = stackIndex * 10;
  const cardOpacity = Math.max(0, 1 - stackIndex * 0.15);

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-[28rem] flex items-center justify-center cursor-grab active:cursor-grabbing preserve-3d"
      style={{
        x: active ? x : 0,
        rotate: active ? rotate : 0,
        opacity: active ? opacity : cardOpacity,
        scale,
        translateY,
        zIndex: 50 - stackIndex,
        pointerEvents: active ? 'auto' : 'none',
      }}
      drag={active ? "x" : false}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      onClick={() => active && setIsFlipped(!isFlipped)}
    >
      {/* --- FRONT OF CARD (LIGHT MODE) --- */}
      <div className={`absolute w-full h-full glass-card-front rounded-[2.5rem] flex flex-col items-center justify-between p-8 backface-hidden border border-white/80 text-center select-none overflow-hidden ${
        active ? 'glow-purple' : 'shadow-lg'
      }`}>
        
        {/* GREEN OVERLAY (Swiping Right) */}
        {active && (
          <motion.div 
            className="absolute inset-0 bg-emerald-500/20 rounded-[2.5rem] pointer-events-none flex items-center justify-start p-8 border-4 border-emerald-500 shadow-[inset_0_0_60px_rgba(16,185,129,0.3)] z-30"
            style={{ opacity: greenOpacity }}
          >
            <div className="bg-emerald-600 text-white font-black text-2xl px-6 py-3 rounded-2xl shadow-2xl border border-emerald-300 flex items-center gap-3 transform -rotate-12">
              <Check className="w-7 h-7 stroke-[3]" />
              <span>MASTERED +10XP</span>
            </div>
          </motion.div>
        )}

        {/* RED OVERLAY (Swiping Left) */}
        {active && (
          <motion.div 
            className="absolute inset-0 bg-rose-500/20 rounded-[2.5rem] pointer-events-none flex items-center justify-end p-8 border-4 border-rose-500 shadow-[inset_0_0_60px_rgba(244,63,94,0.3)] z-30"
            style={{ opacity: redOpacity }}
          >
            <div className="bg-rose-600 text-white font-black text-2xl px-6 py-3 rounded-2xl shadow-2xl border border-rose-300 flex items-center gap-3 transform rotate-12">
              <X className="w-7 h-7 stroke-[3]" />
              <span>REVIEW</span>
            </div>
          </motion.div>
        )}

        {/* Top Bar: Chapter badge & Audio Pronounce Button */}
        <div className="w-full flex justify-between items-center z-10">
          <span className="text-[11px] font-extrabold tracking-widest text-indigo-700 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200 flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            CHAPTER {card.chapter}
          </span>

          <button
            onClick={speakJapanese}
            title="Listen to Japanese pronunciation (Key: A)"
            className={`p-3 rounded-2xl transition-all duration-300 border flex items-center gap-2 ${
              isSpeaking 
                ? 'bg-indigo-600 text-white border-indigo-700 scale-110 shadow-lg shadow-indigo-500/40' 
                : 'bg-white hover:bg-indigo-50 text-indigo-600 border-indigo-200 hover:scale-105 active:scale-95 shadow-sm'
            }`}
          >
            <Volume2 className={`w-5 h-5 ${isSpeaking ? 'animate-bounce' : ''}`} />
            <span className="text-xs font-extrabold hidden sm:inline">Listen</span>
          </button>
        </div>

        {/* Main Japanese Kanji & Hiragana Word Content */}
        <div className="my-auto flex flex-col items-center justify-center z-10 w-full px-2">
          {hasKanji ? (
            <>
              <h2 className={`font-black text-slate-900 mb-3 tracking-tight drop-shadow-sm text-center leading-tight ${
                card.kanji!.length > 8 ? 'text-3xl md:text-4xl' : 'text-5xl md:text-6xl'
              }`}>
                {card.kanji}
              </h2>
              <div className="text-lg md:text-2xl font-extrabold text-indigo-600 bg-indigo-50/90 px-5 py-2 rounded-2xl border border-indigo-200/80 shadow-sm flex items-center justify-center gap-2 text-center max-w-full">
                <span>{displayReading}</span>
              </div>
            </>
          ) : (
            <h2 className={`font-black text-indigo-600 mb-2 tracking-tight drop-shadow-sm text-center leading-tight ${
              displayReading.length > 8 ? 'text-3xl md:text-4xl' : 'text-5xl md:text-6xl'
            }`}>
              {displayReading}
            </h2>
          )}
        </div>

        {/* Bottom Hint */}
        <div className="w-full flex items-center justify-center gap-2 text-xs font-extrabold text-slate-500 bg-slate-100/80 py-2.5 px-4 rounded-2xl border border-slate-200/80 z-10 shadow-sm">
          <RotateCw className="w-3.5 h-3.5 text-indigo-500" />
          <span>Tap to Flip Card</span>
        </div>
      </div>

      {/* --- BACK OF CARD (LIGHT MODE) --- */}
      <div className={`absolute w-full h-full glass-card-back rounded-[2.5rem] flex flex-col items-center justify-between p-8 backface-hidden rotate-y-180 border border-indigo-200 text-center select-none overflow-hidden ${
        active ? 'glow-cyan' : 'shadow-lg'
      }`}>
        
        {/* GREEN OVERLAY (Swiping Right) */}
        {active && (
          <motion.div 
            className="absolute inset-0 bg-emerald-500/20 rounded-[2.5rem] pointer-events-none flex items-center justify-start p-8 border-4 border-emerald-500 shadow-[inset_0_0_60px_rgba(16,185,129,0.3)] z-30"
            style={{ opacity: greenOpacity }}
          >
            <div className="bg-emerald-600 text-white font-black text-2xl px-6 py-3 rounded-2xl shadow-2xl border border-emerald-300 flex items-center gap-3 transform -rotate-12">
              <Check className="w-7 h-7 stroke-[3]" />
              <span>MASTERED +10XP</span>
            </div>
          </motion.div>
        )}

        {/* RED OVERLAY (Swiping Left) */}
        {active && (
          <motion.div 
            className="absolute inset-0 bg-rose-500/20 rounded-[2.5rem] pointer-events-none flex items-center justify-end p-8 border-4 border-rose-500 shadow-[inset_0_0_60px_rgba(244,63,94,0.3)] z-30"
            style={{ opacity: redOpacity }}
          >
            <div className="bg-rose-600 text-white font-black text-2xl px-6 py-3 rounded-2xl shadow-2xl border border-rose-300 flex items-center gap-3 transform rotate-12">
              <X className="w-7 h-7 stroke-[3]" />
              <span>REVIEW</span>
            </div>
          </motion.div>
        )}

        {/* Back Top Header */}
        <div className="w-full flex justify-between items-center z-10">
          <span className="text-[11px] font-extrabold tracking-widest text-indigo-700 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200">
            MEANING
          </span>

          <button
            onClick={speakJapanese}
            title="Listen to Japanese pronunciation"
            className="p-2.5 rounded-2xl bg-white hover:bg-indigo-50 text-indigo-600 border border-indigo-200 active:scale-95 transition shadow-sm"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        {/* Back Content: Reading + English Meaning */}
        <div className="my-auto flex flex-col items-center justify-center w-full z-10">
          <div className="text-xl font-extrabold text-indigo-600 mb-2">
            {displayReading} {hasKanji ? `• ${card.kanji}` : ''}
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight tracking-tight text-gradient-japan">
            {card.meaning}
          </h3>

          {card.notes && (
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl text-xs text-slate-700 w-full max-w-xs shadow-sm text-left">
              <span className="font-extrabold text-indigo-600 text-[10px] uppercase tracking-widest block mb-1">Context / Usage</span>
              {card.notes}
            </div>
          )}
        </div>

        {/* Keyboard / Swipe Action Hint Footer */}
        <div className="w-full text-[11px] text-slate-600 font-extrabold tracking-wider uppercase bg-slate-100/90 py-2 px-3 rounded-2xl border border-slate-200 z-10 flex justify-around shadow-sm">
          <span className="text-rose-600">← Swipe Left</span>
          <span>•</span>
          <span className="text-emerald-600">Swipe Right →</span>
        </div>
      </div>
    </motion.div>
  );
}
