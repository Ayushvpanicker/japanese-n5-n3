import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, Layers } from 'lucide-react';
import { getKanjiBreakdown, KanjiInfo } from '../data/kanjiData';

interface KanjiModalProps {
  word: string | null;
  reading: string;
  meaning: string;
  onClose: () => void;
}

export function KanjiModal({ word, reading, meaning, onClose }: KanjiModalProps) {
  if (!word) return null;

  const breakdown: KanjiInfo[] = getKanjiBreakdown(word);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-md pointer-events-auto select-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 18, stiffness: 260 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md bg-white/95 rounded-[2.5rem] p-6 shadow-2xl border border-indigo-100 flex flex-col items-center text-center overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition active:scale-90"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Header Badge */}
          <div className="flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 shadow-sm">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span>KANJI CHARACTER BREAKDOWN</span>
          </div>

          {/* Large Main Word Heading */}
          <h2 className="text-5xl font-black text-slate-900 mb-1 tracking-tight">
            {word}
          </h2>
          <div className="text-lg font-extrabold text-indigo-600 mb-1">
            {reading}
          </div>
          <div className="text-sm font-bold text-slate-600 mb-6 italic">
            "{meaning}"
          </div>

          {/* Kanji Components Grid */}
          {breakdown.length > 0 ? (
            <div className="w-full flex flex-col gap-3 max-h-[50vh] overflow-y-auto pr-1">
              {breakdown.map((item, idx) => (
                <div
                  key={item.char + idx}
                  className="glass-panel p-4 rounded-2xl border border-slate-200/80 flex items-center justify-between text-left shadow-sm hover:border-indigo-300 transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-black text-3xl rounded-2xl flex items-center justify-center shadow-md">
                      {item.char}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <span className="text-base font-black text-slate-900 capitalize leading-snug">
                          {item.meaning}
                        </span>
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 uppercase shrink-0">
                          {item.jlpt}
                        </span>
                      </div>
                      <div className="text-xs text-slate-600 font-extrabold truncate">
                        <span className="text-indigo-600 font-bold">Onyomi:</span> {item.onyomi}
                      </div>
                      <div className="text-xs text-slate-600 font-extrabold truncate">
                        <span className="text-teal-600 font-bold">Kunyomi:</span> {item.kunyomi}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-center text-right pl-2 border-l border-slate-200">
                    <div className="flex items-center gap-1 text-[10px] font-black text-slate-500 uppercase tracking-wider">
                      <Layers className="w-3 h-3 text-indigo-500" />
                      <span>Strokes</span>
                    </div>
                    <span className="text-xl font-black text-indigo-900 leading-tight">{item.strokes}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm font-bold text-slate-500 py-4">
              No individual Kanji characters found in this word.
            </div>
          )}

          <button
            onClick={onClose}
            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-black py-3 rounded-2xl shadow-lg active:scale-95 transition tracking-wide text-xs uppercase"
          >
            CLOSE DETAILS
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
