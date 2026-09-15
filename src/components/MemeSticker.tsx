import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, AlertCircle } from 'lucide-react';

export interface MemeData {
  id: string;
  type: 'success' | 'fail';
  title: string;
  subtitle: string;
  gifUrl: string;
  badge: string;
}

interface MemeStickerProps {
  meme: MemeData | null;
  onClose: () => void;
}

export function MemeSticker({ meme, onClose }: MemeStickerProps) {
  useEffect(() => {
    if (!meme) return;
    const timer = setTimeout(() => {
      onClose();
    }, 2800);
    return () => clearTimeout(timer);
  }, [meme, onClose]);

  if (!meme) return null;

  const isSuccess = meme.type === 'success';

  return (
    <AnimatePresence>
      {/* Backdrop overlay & centered modal container */}
      <motion.div
        key={meme.id + Date.now()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm pointer-events-auto select-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 40, rotate: isSuccess ? -6 : 6 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: -30 }}
          transition={{ type: 'spring', damping: 14, stiffness: 260 }}
          onClick={(e) => e.stopPropagation()}
          className={`relative flex flex-col items-center p-5 rounded-[2.5rem] shadow-2xl border-4 backdrop-blur-2xl max-w-xs sm:max-w-sm text-center ${
            isSuccess
              ? 'bg-gradient-to-b from-amber-500/95 via-orange-500/95 to-yellow-500/95 text-white border-amber-300 shadow-amber-500/40'
              : 'bg-gradient-to-b from-rose-600/95 via-red-600/95 to-pink-700/95 text-white border-rose-300 shadow-rose-600/40'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1.5 rounded-full bg-black/30 hover:bg-black/50 text-white transition active:scale-90"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Badge Tag */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 text-[10px] font-black tracking-widest uppercase mb-2 border border-white/20">
            {isSuccess ? <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> : <AlertCircle className="w-3.5 h-3.5 text-rose-200" />}
            <span>{meme.badge}</span>
          </div>

          {/* GIF Sticker Image Container */}
          <div className="relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-white/60 shadow-lg bg-black/20 my-1 flex items-center justify-center">
            <img
              src={meme.gifUrl}
              alt={meme.title}
              className="w-full h-full object-cover transform hover:scale-105 transition"
              onError={(e) => {
                // Fallback emoji if network drops
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Meme Title & Subtitle */}
          <h3 className="text-lg font-black tracking-wide mt-2 drop-shadow-md uppercase">
            {meme.title}
          </h3>
          <p className="text-xs font-bold opacity-90 leading-snug px-2 mt-0.5">
            {meme.subtitle}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
