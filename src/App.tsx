import { useState, useEffect } from 'react';
import { CardItem } from './components/CardItem';
import { MemeSticker, MemeData } from './components/MemeSticker';
import { fetchCardsByChapter, fetchAvailableChapters } from './lib/supabase';
import { Card } from './types/card';
import confetti from 'canvas-confetti';
import { Flame, Sparkles, Trophy, ArrowLeft, BookOpen, CheckCircle2, XCircle, RefreshCw, Smile } from 'lucide-react';

// Exact User Provided GIPHY Meme Stickers
const MEME_STICKERS = {
  success: [
    {
      id: 'meme_s1',
      type: 'success' as const,
      title: 'BRO IS COOKING! 🔥',
      subtitle: '2 Streak! Keep up the momentum!',
      gifUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZms2enFlY2Q3MXdvbTQ3YndjY2F5Z2R5amF4ZDVkYWhnOHF4cGt5eCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/X6hLfRgoJmWiF0i9Xr/giphy.gif',
      badge: '2X STREAK 🔥',
    },
    {
      id: 'meme_s2',
      type: 'success' as const,
      title: 'ABSOLUTE CHAD! 🗿',
      subtitle: '3 Streak! Japanese Master energy!',
      gifUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZms2enFlY2Q3MXdvbTQ3YndjY2F5Z2R5amF4ZDVkYWhnOHF4cGt5eCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/NMlz9mhcZUI1GDd40H/giphy.gif',
      badge: '3X CHAD STREAK 🗿',
    },
    {
      id: 'meme_s3',
      type: 'success' as const,
      title: 'GALAXY BRAIN UNLOCKED! 🧠',
      subtitle: 'Unstoppable streak! Much vocabulary!',
      gifUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZms2enFlY2Q3MXdvbTQ3YndjY2F5Z2R5amF4ZDVkYWhnOHF4cGt5eCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/H0Xp04QsacQ05zEo0A/giphy.gif',
      badge: 'SUPER STREAK 🧠',
    },
  ],
  fail: [
    {
      id: 'meme_f1',
      type: 'fail' as const,
      title: 'CHOTTO MATTE... 😿',
      subtitle: '2 Mistakes! Don\'t worry, try again!',
      gifUrl: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Zng2enZlbnE1dHRnaDA0YTlhOG5yOXppZG55cWdkankwaG1pN2ZnbCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/6fggXNqOuTm9lAb2Yu/giphy.gif',
      badge: 'KEEP TRYING 😿',
    },
    {
      id: 'meme_f2',
      type: 'fail' as const,
      title: 'EMOTIONAL DAMAGE! 💔',
      subtitle: '3 Mistakes! Tap card to see reading!',
      gifUrl: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ejlseDVpN2IwdDJlM3pqZno1MDUyNWllcTluYTNraHM0MDludXc4ZiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/RxtjuEgVX4rBoWihUa/giphy.gif',
      badge: 'EMOTIONAL DAMAGE 💔',
    },
    {
      id: 'meme_f3',
      type: 'fail' as const,
      title: 'SAD HAMSTER HOURS 🐹',
      subtitle: 'Mistakes build strength! You got this!',
      gifUrl: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eWh1Nzlsanp1ZHZhemtzY3VvdDFsbngxdHMxMzFyaGZxdG5jaWdmMCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/8bl86q2fSFG7bfZUlm/giphy.gif',
      badge: 'STAY STRONG 🐹',
    },
  ],
};

export default function App() {
  const [availableChapters, setAvailableChapters] = useState<number[]>(
    Array.from({ length: 50 }, (_, i) => i + 1)
  );
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [cards, setCards] = useState<Card[]>([]);
  const [initialCount, setInitialCount] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState({ remembered: 0, review: 0 });

  // Gamification & Meme state
  const [streak, setStreak] = useState(0);
  const [failStreak, setFailStreak] = useState(0);
  const [xp, setXp] = useState(0);
  const [comboMessage, setComboMessage] = useState<string | null>(null);
  const [levelFilter, setLevelFilter] = useState<'all' | 'n5' | 'n4'>('all');
  const [activeMeme, setActiveMeme] = useState<MemeData | null>(null);
  const [memeMode, setMemeMode] = useState(true);

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
    setFailStreak(0);
    setActiveMeme(null);
    setLoading(false);
  };

  const handleSwipe = (id: string, remembered: boolean) => {
    if (remembered) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setFailStreak(0);
      setXp(prev => prev + 10);
      setScore(prev => ({ ...prev, remembered: prev.remembered + 1 }));

      // Combo Notifications & Confetti
      if (newStreak === 3) {
        triggerCombo('🔥 3 STREAK! +10 XP');
      } else if (newStreak === 5) {
        triggerCombo('⚡ 5 STREAK COMBO! UNSTOPPABLE');
        confetti({ particleCount: 80, spread: 60 });
      } else if (newStreak === 10) {
        triggerCombo('👑 10 STREAK! JAPANESE MASTER!');
        confetti({ particleCount: 150, spread: 100 });
      }

      // Meme Trigger on 2 or 3 Rights (and cycling after)
      if (memeMode) {
        if (newStreak === 2) {
          setActiveMeme({ ...MEME_STICKERS.success[0], id: 's1_' + Date.now() });
        } else if (newStreak === 3) {
          setActiveMeme({ ...MEME_STICKERS.success[1], id: 's2_' + Date.now() });
        } else if (newStreak >= 5) {
          const memeIndex = (newStreak % MEME_STICKERS.success.length);
          setActiveMeme({ ...MEME_STICKERS.success[memeIndex], id: 's3_' + Date.now() });
        }
      }
    } else {
      // Wrong Swipe Logic
      const newFail = failStreak + 1;
      setFailStreak(newFail);
      setStreak(0);
      setScore(prev => ({ ...prev, review: prev.review + 1 }));

      // Meme Trigger on 2 or 3 Wrongs
      if (memeMode) {
        if (newFail === 2) {
          setActiveMeme({ ...MEME_STICKERS.fail[0], id: 'f1_' + Date.now() });
        } else if (newFail === 3) {
          setActiveMeme({ ...MEME_STICKERS.fail[1], id: 'f2_' + Date.now() });
        } else if (newFail >= 5) {
          const memeIndex = (newFail % MEME_STICKERS.fail.length);
          setActiveMeme({ ...MEME_STICKERS.fail[memeIndex], id: 'f3_' + Date.now() });
        }
      }
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

  const filteredChapters = availableChapters.filter(ch => {
    if (levelFilter === 'n5') return ch <= 25;
    if (levelFilter === 'n4') return ch >= 26;
    return true;
  });

  return (
    <div className="relative min-h-[100dvh] bg-transparent flex flex-col items-center justify-between p-4 overflow-hidden select-none font-sans text-slate-900">
      
      {/* --- AMBIENT SUNSET ORBS --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[550px] h-[550px] bg-pink-300/30 rounded-full mix-blend-multiply filter blur-[140px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-300/25 rounded-full mix-blend-multiply filter blur-[130px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* --- TOP APP HEADER (TOTAL XP, STREAK & MEME TOGGLE) --- */}
      <header className="z-20 w-full max-w-4xl flex justify-between items-center py-3 px-2">
        <div className="flex items-center gap-2">
          <div className="bg-white/90 border border-slate-200/80 p-2.5 rounded-2xl flex items-center gap-2 shadow-sm backdrop-blur-md">
            <Sparkles className="w-5 h-5 text-indigo-600 animate-spin" style={{ animationDuration: '8s' }} />
            <span className="text-xs font-black tracking-widest text-indigo-900 uppercase">JLPT MASTER</span>
          </div>

          {/* Meme Mode Toggle */}
          <button
            onClick={() => setMemeMode(!memeMode)}
            title="Toggle Instagram Meme Reactions"
            className={`hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-black transition-all border shadow-sm backdrop-blur-md ${
              memeMode
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-300 scale-105'
                : 'bg-white/80 text-slate-500 border-slate-200 hover:text-slate-800'
            }`}
          >
            <Smile className="w-4 h-4" />
            <span>MEMES {memeMode ? 'ON' : 'OFF'}</span>
          </button>
        </div>

        {/* XP & Streak Pills */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 px-3.5 py-1.5 rounded-full shadow-sm backdrop-blur-md">
            <Trophy className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-black text-amber-900">{xp} XP</span>
          </div>

          <div className="flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 px-3.5 py-1.5 rounded-full shadow-sm backdrop-blur-md">
            <Flame className={`w-4 h-4 ${streak > 0 ? 'text-orange-600 animate-bounce' : 'text-slate-400'}`} />
            <span className="text-xs font-black text-orange-900">{streak} STREAK</span>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="z-20 w-full max-w-4xl flex-1 flex flex-col items-center justify-center py-4">
        
        {/* Combo Notification Banner */}
        {comboMessage && (
          <div className="fixed top-20 z-50 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-black px-6 py-3 rounded-full shadow-2xl animate-bounce text-sm tracking-wider border border-white/40">
            {comboMessage}
          </div>
        )}

        {/* Meme Sticker Popup */}
        <MemeSticker meme={activeMeme} onClose={() => setActiveMeme(null)} />

        {selectedChapter === null ? (
          // ==================== HOME MENU SCREEN (LIGHT MODE) ====================
          <div className="w-full flex flex-col items-center max-w-3xl animate-in zoom-in-95 duration-400">
            
            {/* Title Section */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-black mb-3 tracking-tight text-gradient-japan drop-shadow-sm">
                Minna no Nihongo
              </h1>
              <p className="text-slate-600 text-sm md:text-base font-bold">
                Master Japanese Vocabulary with Interactive 3D Flashcards & Memes
              </p>
            </div>

            {/* Level Filter Tabs (All / N5 / N4) */}
            <div className="flex bg-white/90 p-1.5 rounded-2xl border border-slate-200/80 mb-8 shadow-md backdrop-blur-md">
              <button
                onClick={() => setLevelFilter('all')}
                className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all ${
                  levelFilter === 'all' 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ALL CHAPTERS
              </button>
              <button
                onClick={() => setLevelFilter('n5')}
                className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all ${
                  levelFilter === 'n5' 
                    ? 'bg-teal-600 text-white shadow-md' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                N5 (CH. 1-25)
              </button>
              <button
                onClick={() => setLevelFilter('n4')}
                className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all ${
                  levelFilter === 'n4' 
                    ? 'bg-pink-600 text-white shadow-md' 
                    : 'text-slate-600 hover:text-slate-900'
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
                    className={`group relative glass-panel hover:bg-white/95 active:scale-95 transition-all p-6 rounded-3xl text-xl font-bold border flex flex-col items-center justify-between gap-3 shadow-md hover:shadow-xl overflow-hidden ${
                      isN4 ? 'hover:border-pink-500/60 border-pink-200' : 'hover:border-indigo-500/60 border-indigo-200'
                    }`}
                  >
                    {/* Level Tag */}
                    <div className="w-full flex justify-between items-center">
                      <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase ${
                        isN4 ? 'bg-pink-100 text-pink-700 border border-pink-200' : 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                      }`}>
                        {isN4 ? 'JLPT N4' : 'JLPT N5'}
                      </span>
                      <BookOpen className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                    </div>

                    {/* Chapter Number */}
                    <div className="flex flex-col items-center my-2">
                      <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">CHAPTER</span>
                      <span className="text-4xl font-black text-slate-900 group-hover:scale-110 transition-transform">{ch}</span>
                    </div>

                    {/* Bottom CTA */}
                    <div className="w-full text-center text-xs font-black text-indigo-600 group-hover:text-indigo-800">
                      START DECK →
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          // ==================== FLASHCARD DECK SCREEN (LIGHT MODE) ====================
          <div className="w-full flex flex-col items-center max-w-md animate-in fade-in duration-300">
            
            {/* Top Navigation & Deck Info */}
            <div className="flex justify-between items-center w-full mb-4 px-1">
              <button 
                onClick={() => setSelectedChapter(null)} 
                className="bg-white/90 hover:bg-white backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-black text-slate-800 transition active:scale-95 border border-slate-200 shadow-sm flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>MENU</span>
              </button>
              
              <div className="flex items-center gap-2">
                <span className="font-black text-indigo-900 text-xs tracking-widest uppercase bg-indigo-50 px-4 py-2 rounded-2xl backdrop-blur-md border border-indigo-200 shadow-sm">
                  CHAPTER {selectedChapter}
                </span>
              </div>
            </div>

            {/* LIVE SCORE COUNTERS BAR (Wrong Left vs Right Right) */}
            <div className="flex justify-between items-center w-full mb-6 px-1">
              {/* WRONG COUNTER (LEFT SIDE - RED) */}
              <div className="flex items-center gap-3 bg-rose-50/90 backdrop-blur-md border border-rose-200 px-4 py-2.5 rounded-2xl shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-600 font-black text-sm flex items-center justify-center border border-rose-300 shadow-inner">
                  <XCircle className="w-5 h-5 text-rose-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-700">Review</span>
                  <span className="text-2xl font-black text-rose-600 leading-none">{score.review}</span>
                </div>
              </div>

              {/* PROGRESS COUNTER (CENTER) */}
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">DECK</span>
                <span className="text-sm font-black text-slate-800">{cards.length} / {initialCount} LEFT</span>
              </div>

              {/* RIGHT COUNTER (RIGHT SIDE - GREEN) */}
              <div className="flex items-center gap-3 bg-emerald-50/90 backdrop-blur-md border border-emerald-200 px-4 py-2.5 rounded-2xl shadow-sm">
                <div className="flex flex-col text-right">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-700">Mastered</span>
                  <span className="text-2xl font-black text-emerald-600 leading-none">{score.remembered}</span>
                </div>
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 font-black text-sm flex items-center justify-center border border-emerald-300 shadow-inner">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
            </div>

            {/* Card Stack Container */}
            <div className="relative w-full h-[28rem]">
              {loading ? (
                <div className="w-full h-full flex flex-col items-center justify-center glass-panel rounded-[2.5rem] border border-slate-200">
                  <RefreshCw className="animate-spin w-10 h-10 text-indigo-600 mb-4" />
                  <div className="text-slate-800 font-bold text-sm">Loading Chapter Deck...</div>
                </div>
              ) : cards.length > 0 ? (
                cards.slice(-3).map((card, index, array) => {
                  const isTop = index === array.length - 1;
                  const stackOffset = array.length - 1 - index;
                  return (
                    <CardItem 
                      key={card.id} 
                      card={card} 
                      onSwipe={handleSwipe} 
                      active={isTop} 
                      stackIndex={stackOffset}
                    />
                  );
                })
              ) : (
                /* DECK COMPLETE SCREEN */
                <div className="w-full h-full flex flex-col items-center justify-center glass-panel rounded-[2.5rem] shadow-2xl border border-slate-200 p-8 text-center animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6 border border-emerald-300 glow-emerald">
                    <Trophy className="w-10 h-10 text-emerald-600 animate-bounce" />
                  </div>

                  <h2 className="text-4xl font-black mb-2 text-gradient-japan">
                    Deck Complete!
                  </h2>
                  <p className="text-slate-600 text-xs font-bold mb-6">Chapter {selectedChapter} Mastered</p>

                  <div className="flex w-full justify-around mb-8 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-black text-emerald-600 mb-1">{score.remembered}</span>
                      <span className="text-[10px] text-slate-500 font-extrabold tracking-widest uppercase">Mastered</span>
                    </div>
                    <div className="w-px h-full bg-slate-200"></div>
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-black text-rose-600 mb-1">{score.review}</span>
                      <span className="text-[10px] text-slate-500 font-extrabold tracking-widest uppercase">Review</span>
                    </div>
                    <div className="w-px h-full bg-slate-200"></div>
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-black text-amber-600 mb-1">+{score.remembered * 10}</span>
                      <span className="text-[10px] text-slate-500 font-extrabold tracking-widest uppercase">XP Gained</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedChapter(null)}
                    className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white hover:from-indigo-700 hover:to-pink-700 active:scale-95 py-4 rounded-2xl font-black tracking-wide transition shadow-xl"
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
      <footer className="z-20 w-full max-w-4xl flex justify-between items-center py-2 px-2 text-[11px] text-slate-600 font-extrabold">
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
