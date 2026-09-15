import { useState, useEffect } from 'react';
import { CardItem } from './components/CardItem';
import { fetchCardsByChapter, fetchAvailableChapters } from './lib/supabase';
import { Card } from './types/card';
import confetti from 'canvas-confetti';
import { Flame, Sparkles, Trophy, ArrowLeft, BookOpen, CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

export default function App() {
  const [availableChapters, setAvailableChapters] = useState<number[]>([1, 2, 3, 4, 5, 26]);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [cards, setCards] = useState<Card[]>([]);
  const [initialCount, setInitialCount] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState({ remembered: 0, review: 0 });

  // Gamification state
  const [streak, setStreak] = useState(0);
  const [xp, setXp] = useState(0);
  const [comboMessage, setComboMessage] = useState<string | null>(null);
  const [levelFilter, setLevelFilter] = useState<'all' | 'n5' | 'n4'>('all');

  useEffect(() => {
    async function loadChapters() {
      const chapters = await fetchAvailableChapters();
      if (chapters && chapters.length > 0) {
        setAvailableChapters(chapters);
      }
    }
    loadChapters();
  }, []);

  const loadChapter = async (chapter: number) => {
    setLoading(true);
    const fetchedCards = await fetchCardsByChapter(chapter);
    setCards(fetchedCards);
    setInitialCount(fetchedCards.length);
    setSelectedChapter(chapter);
    setScore({ remembered: 0, review: 0 });
    setStreak(0);
    setLoading(false);
  };

  const handleSwipe = (id: string, remembered: boolean) => {
    if (remembered) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setXp(prev => prev + 10);
      setScore(prev => ({ ...prev, remembered: prev.remembered + 1 }));

      // Streak celebration
      if (newStreak === 3) {
        triggerCombo('🔥 3 STREAK! +10 XP');
      } else if (newStreak === 5) {
        triggerCombo('⚡ 5 STREAK COMBO! UNSTOPPABLE');
        confetti({ particleCount: 80, spread: 60 });
      } else if (newStreak === 10) {
        triggerCombo('👑 10 STREAK! JAPANESE MASTER!');
        confetti({ particleCount: 150, spread: 100 });
      }
    } else {
      setStreak(0);
      setScore(prev => ({ ...prev, review: prev.review + 1 }));
    }

    setCards(prev => prev.filter(c => c.id !== id));

    if (cards.length === 1) {
      confetti({ particleCount: 200, spread: 90 });
    }
  };

  const triggerCombo = (msg: string) => {
    setComboMessage(msg);
    setTimeout(() => setComboMessage(null), 2200);
  };

  // Filtered chapters for tab view
  const filteredChapters = availableChapters.filter(ch => {
    if (levelFilter === 'n5') return ch <= 25;
    if (levelFilter === 'n4') return ch >= 26;
    return true;
  });

  return (
    <div className="relative min-h-[100dvh] bg-slate-950 flex flex-col items-center justify-between p-4 overflow-hidden select-none font-sans text-slate-100">
      
      {/* --- AMBIENT NEON GLOW ORBS --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[550px] h-[550px] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[140px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-600/15 rounded-full mix-blend-screen filter blur-[130px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[40%] left-[40%] w-[350px] h-[350px] bg-cyan-600/15 rounded-full mix-blend-screen filter blur-[110px] animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* --- TOP APP HEADER (TOTAL XP & STREAK) --- */}
      <header className="z-20 w-full max-w-4xl flex justify-between items-center py-3 px-2">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-950/80 border border-indigo-500/30 p-2 rounded-2xl flex items-center gap-2 shadow-lg">
            <Sparkles className="w-5 h-5 text-indigo-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span className="text-xs font-black tracking-widest text-indigo-300 uppercase">JLPT MASTER</span>
          </div>
        </div>

        {/* XP & Streak Pills */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full shadow-lg">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-black text-amber-300">{xp} XP</span>
          </div>

          <div className="flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full shadow-lg">
            <Flame className={`w-4 h-4 ${streak > 0 ? 'text-orange-400 animate-bounce' : 'text-slate-500'}`} />
            <span className="text-xs font-black text-orange-300">{streak} STREAK</span>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="z-20 w-full max-w-4xl flex-1 flex flex-col items-center justify-center py-4">
        
        {/* Combo Notification Banner */}
        {comboMessage && (
          <div className="fixed top-20 z-50 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black px-6 py-3 rounded-full shadow-2xl animate-bounce text-sm tracking-wider border border-amber-200">
            {comboMessage}
          </div>
        )}

        {selectedChapter === null ? (
          // ==================== HOME MENU SCREEN ====================
          <div className="w-full flex flex-col items-center max-w-3xl animate-in zoom-in-95 duration-400">
            
            {/* Title Section */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-black mb-3 tracking-tight text-gradient-japan drop-shadow-lg">
                Minna no Nihongo
              </h1>
              <p className="text-slate-400 text-sm md:text-base font-semibold">
                Master Japanese Vocabulary with Interactive 3D Flashcards
              </p>
            </div>

            {/* Level Filter Tabs (All / N5 / N4) */}
            <div className="flex bg-slate-900/80 p-1.5 rounded-2xl border border-white/10 mb-8 shadow-xl">
              <button
                onClick={() => setLevelFilter('all')}
                className={`px-5 py-2 rounded-xl text-xs font-black transition-all ${
                  levelFilter === 'all' 
                    ? 'bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ALL CHAPTERS
              </button>
              <button
                onClick={() => setLevelFilter('n5')}
                className={`px-5 py-2 rounded-xl text-xs font-black transition-all ${
                  levelFilter === 'n5' 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                N5 (CH. 1-25)
              </button>
              <button
                onClick={() => setLevelFilter('n4')}
                className={`px-5 py-2 rounded-xl text-xs font-black transition-all ${
                  levelFilter === 'n4' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                N4 (CH. 26-50)
              </button>
            </div>

            {/* Chapter Selection Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-h-[55vh] overflow-y-auto p-2 pr-3">
              {filteredChapters.map(ch => {
                const isN4 = ch >= 26;
                return (
                  <button
                    key={ch}
                    onClick={() => loadChapter(ch)}
                    className={`group relative glass-panel hover:bg-slate-800/80 active:scale-95 transition-all p-6 rounded-3xl text-xl font-bold border flex flex-col items-center justify-between gap-3 shadow-xl hover:shadow-2xl overflow-hidden ${
                      isN4 ? 'hover:border-purple-500/50 border-purple-500/10' : 'hover:border-sky-500/50 border-sky-500/10'
                    }`}
                  >
                    {/* Level Tag */}
                    <div className="w-full flex justify-between items-center">
                      <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase ${
                        isN4 ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}>
                        {isN4 ? 'JLPT N4' : 'JLPT N5'}
                      </span>
                      <BookOpen className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                    </div>

                    {/* Chapter Number */}
                    <div className="flex flex-col items-center my-2">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">CHAPTER</span>
                      <span className="text-4xl font-black text-white group-hover:scale-110 transition-transform">{ch}</span>
                    </div>

                    {/* Bottom CTA */}
                    <div className="w-full text-center text-xs font-extrabold text-sky-400 group-hover:text-sky-300">
                      START DECK →
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          // ==================== FLASHCARD DECK SCREEN ====================
          <div className="w-full flex flex-col items-center max-w-md animate-in fade-in duration-300">
            
            {/* Top Navigation & Deck Info */}
            <div className="flex justify-between items-center w-full mb-4 px-1">
              <button 
                onClick={() => setSelectedChapter(null)} 
                className="bg-slate-900/80 hover:bg-slate-800 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-black text-slate-300 transition active:scale-95 border border-white/10 shadow-lg flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>MENU</span>
              </button>
              
              <div className="flex items-center gap-2">
                <span className="font-black text-white text-xs tracking-widest uppercase bg-indigo-950/80 px-4 py-2 rounded-2xl backdrop-blur-md border border-indigo-500/30">
                  CHAPTER {selectedChapter}
                </span>
              </div>
            </div>

            {/* LIVE SCORE COUNTERS BAR (Wrong Left vs Right Right) */}
            <div className="flex justify-between items-center w-full mb-6 px-1">
              {/* WRONG COUNTER (LEFT SIDE - RED) */}
              <div className="flex items-center gap-3 bg-rose-950/60 backdrop-blur-md border border-rose-500/30 px-4 py-2.5 rounded-2xl shadow-xl shadow-rose-950/40">
                <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 font-black text-sm flex items-center justify-center border border-rose-500/40 shadow-inner">
                  <XCircle className="w-5 h-5 text-rose-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-400">Review</span>
                  <span className="text-2xl font-black text-rose-300 leading-none">{score.review}</span>
                </div>
              </div>

              {/* PROGRESS COUNTER (CENTER) */}
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">DECK</span>
                <span className="text-sm font-black text-slate-200">{cards.length} / {initialCount} LEFT</span>
              </div>

              {/* RIGHT COUNTER (RIGHT SIDE - GREEN) */}
              <div className="flex items-center gap-3 bg-emerald-950/60 backdrop-blur-md border border-emerald-500/30 px-4 py-2.5 rounded-2xl shadow-xl shadow-emerald-950/40">
                <div className="flex flex-col text-right">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">Mastered</span>
                  <span className="text-2xl font-black text-emerald-300 leading-none">{score.remembered}</span>
                </div>
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-black text-sm flex items-center justify-center border border-emerald-500/40 shadow-inner">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
            </div>

            {/* Card Stack Container */}
            <div className="relative w-full h-[28rem]">
              {loading ? (
                <div className="w-full h-full flex flex-col items-center justify-center glass-panel rounded-[2.5rem] border border-white/10">
                  <RefreshCw className="animate-spin w-10 h-10 text-sky-400 mb-4" />
                  <div className="text-slate-300 font-bold text-sm">Loading Chapter Deck...</div>
                </div>
              ) : cards.length > 0 ? (
                cards.map((card, index) => (
                  <CardItem 
                    key={card.id} 
                    card={card} 
                    onSwipe={handleSwipe} 
                    active={index === cards.length - 1} 
                  />
                ))
              ) : (
                /* DECK COMPLETE SCREEN */
                <div className="w-full h-full flex flex-col items-center justify-center glass-panel rounded-[2.5rem] shadow-2xl border border-white/15 p-8 text-center animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 border border-emerald-400/40 glow-emerald">
                    <Trophy className="w-10 h-10 text-emerald-300 animate-bounce" />
                  </div>

                  <h2 className="text-4xl font-black mb-2 text-gradient-japan">
                    Deck Complete!
                  </h2>
                  <p className="text-slate-400 text-xs font-semibold mb-6">Chapter {selectedChapter} Mastered</p>

                  <div className="flex w-full justify-around mb-8 bg-slate-900/80 p-5 rounded-2xl border border-white/10">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-black text-emerald-400 mb-1">{score.remembered}</span>
                      <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Mastered</span>
                    </div>
                    <div className="w-px h-full bg-white/10"></div>
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-black text-rose-400 mb-1">{score.review}</span>
                      <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Review</span>
                    </div>
                    <div className="w-px h-full bg-white/10"></div>
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-black text-amber-400 mb-1">+{score.remembered * 10}</span>
                      <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">XP Gained</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedChapter(null)}
                    className="w-full bg-gradient-to-r from-sky-400 to-indigo-500 text-slate-950 hover:from-sky-300 hover:to-indigo-400 active:scale-95 py-4 rounded-2xl font-black tracking-wide transition shadow-xl glow-cyan"
                  >
                    CONTINUE STUDYING
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* --- FOOTER & KEYBOARD SHORTCUT HINTS --- */}
      <footer className="z-20 w-full max-w-4xl flex justify-between items-center py-2 px-2 text-[11px] text-slate-500 font-bold">
        <span>Minna no Nihongo Flashcards</span>
        <div className="hidden sm:flex items-center gap-4">
          <span>[←] Review</span>
          <span>[→] Mastered</span>
          <span>[Space] Flip</span>
          <span>[A] Pronounce</span>
        </div>
      </footer>
    </div>
  );
}
