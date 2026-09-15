import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Card } from '../types/card';
import { Volume2, RotateCw, Sparkles, Check, X } from 'lucide-react';

interface CardItemProps {
  card: Card;
  onSwipe: (id: string, remembered: boolean) => void;
  active: boolean;
}

export function CardItem({ card, onSwipe, active }: CardItemProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  // Dynamic green (Right / Mastered) and red (Left / Review) swipe overlays
  const greenOpacity = useTransform(x, [10, 80, 180], [0, 0.5, 1]);
  const redOpacity = useTransform(x, [-180, -80, -10], [1, 0.5, 0]);

  // Function to pronounce Japanese word using Web Speech API
  const speakJapanese = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const textToSpeak = card.kanji || card.reading;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.9;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
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

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-[28rem] flex items-center justify-center cursor-grab active:cursor-grabbing preserve-3d"
      style={{ x, rotate, opacity }}
      drag={active ? "x" : false}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* --- FRONT OF CARD (LIGHT MODE) --- */}
      <div className="absolute w-full h-full glass-card-front rounded-[2.5rem] flex flex-col items-center justify-between p-8 backface-hidden border border-white/80 text-center select-none overflow-hidden glow-purple">
        
        {/* GREEN OVERLAY (Swiping Right) */}
        <motion.div 
          className="absolute inset-0 bg-emerald-500/20 rounded-[2.5rem] pointer-events-none flex items-center justify-start p-8 border-4 border-emerald-500 shadow-[inset_0_0_60px_rgba(16,185,129,0.3)] z-30"
          style={{ opacity: greenOpacity }}
        >
          <div className="bg-emerald-600 text-white font-black text-2xl px-6 py-3 rounded-2xl shadow-2xl border border-emerald-300 flex items-center gap-3 transform -rotate-12">
            <Check className="w-7 h-7 stroke-[3]" />
            <span>MASTERED +10XP</span>
          </div>
        </motion.div>

        {/* RED OVERLAY (Swiping Left) */}
        <motion.div 
          className="absolute inset-0 bg-rose-500/20 rounded-[2.5rem] pointer-events-none flex items-center justify-end p-8 border-4 border-rose-500 shadow-[inset_0_0_60px_rgba(244,63,94,0.3)] z-30"
          style={{ opacity: redOpacity }}
        >
          <div className="bg-rose-600 text-white font-black text-2xl px-6 py-3 rounded-2xl shadow-2xl border border-rose-300 flex items-center gap-3 transform rotate-12">
            <X className="w-7 h-7 stroke-[3]" />
            <span>REVIEW</span>
          </div>
        </motion.div>

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
        <div className="my-auto flex flex-col items-center justify-center z-10">
          {card.kanji ? (
            <>
              <h2 className="text-6xl md:text-7xl font-black text-slate-900 mb-4 tracking-tight drop-shadow-sm">
                {card.kanji}
              </h2>
              <div className="text-2xl md:text-3xl font-extrabold text-indigo-600 bg-indigo-50/90 px-6 py-2.5 rounded-2xl border border-indigo-200/80 shadow-sm flex items-center gap-2">
                <span>{card.reading}</span>
              </div>
            </>
          ) : (
            <h2 className="text-6xl md:text-7xl font-black text-indigo-600 mb-2 tracking-tight drop-shadow-sm">
              {card.reading}
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
      <div className="absolute w-full h-full glass-card-back rounded-[2.5rem] flex flex-col items-center justify-between p-8 backface-hidden rotate-y-180 border border-indigo-200 text-center select-none overflow-hidden glow-cyan">
        
        {/* GREEN OVERLAY (Swiping Right) */}
        <motion.div 
          className="absolute inset-0 bg-emerald-500/20 rounded-[2.5rem] pointer-events-none flex items-center justify-start p-8 border-4 border-emerald-500 shadow-[inset_0_0_60px_rgba(16,185,129,0.3)] z-30"
          style={{ opacity: greenOpacity }}
        >
          <div className="bg-emerald-600 text-white font-black text-2xl px-6 py-3 rounded-2xl shadow-2xl border border-emerald-300 flex items-center gap-3 transform -rotate-12">
            <Check className="w-7 h-7 stroke-[3]" />
            <span>MASTERED +10XP</span>
          </div>
        </motion.div>

        {/* RED OVERLAY (Swiping Left) */}
        <motion.div 
          className="absolute inset-0 bg-rose-500/20 rounded-[2.5rem] pointer-events-none flex items-center justify-end p-8 border-4 border-rose-500 shadow-[inset_0_0_60px_rgba(244,63,94,0.3)] z-30"
          style={{ opacity: redOpacity }}
        >
          <div className="bg-rose-600 text-white font-black text-2xl px-6 py-3 rounded-2xl shadow-2xl border border-rose-300 flex items-center gap-3 transform rotate-12">
            <X className="w-7 h-7 stroke-[3]" />
            <span>REVIEW</span>
          </div>
        </motion.div>

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
            {card.reading} {card.kanji ? `• ${card.kanji}` : ''}
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
