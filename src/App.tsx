import { useState, useEffect } from 'react';
import { CardItem } from './components/CardItem';
import { MemeSticker, MemeData } from './components/MemeSticker';
import { KanjiModal } from './components/KanjiModal';
import { SpeedQuiz } from './components/SpeedQuiz';
import { KanjiDrawPractice } from './components/KanjiDrawPractice';
import { fetchCardsByChapter, fetchAvailableChapters } from './lib/supabase';
import { Card, DisplayMode, AudioSpeed } from './types/card';
import { MOCK_CARDS } from './data/mockCards';
import confetti from 'canvas-confetti';
import { Flame, Sparkles, Trophy, ArrowLeft, BookOpen, CheckCircle2, XCircle, RefreshCw, Smile, Shuffle, SlidersHorizontal, Zap, Eye, Volume2 } from 'lucide-react';

// Fisher-Yates Deck Randomizer Algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

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
  const [activeView, setActiveView] = useState<'home' | 'deck' | 'speedQuiz' | 'weakDeck' | 'learnKanji'>('home');
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [cards, setCards] = useState<Card[]>([]);
  const [initialCount, setInitialCount] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState({ remembered: 0, review: 0 });

  // Weak Words SRS State (Persistent in localStorage)
  const [weakCards, setWeakCards] = useState<Card[]>(() => {
    try {
      const saved = localStorage.getItem('japanese_weak_cards');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Gamification, Meme & Preference State
  const [streak, setStreak] = useState(0);
  const [failStreak, setFailStreak] = useState(0);
  const [xp, setXp] = useState(0);
  const [comboMessage, setComboMessage] = useState<string | null>(null);
  const [levelFilter, setLevelFilter] = useState<'all' | 'n5' | 'n4'>('all');
  const [activeMeme, setActiveMeme] = useState<MemeData | null>(null);
  const [memeMode, setMemeMode] = useState(true);
  const [shownMemes, setShownMemes] = useState<Set<string>>(new Set());
  const [randomizerChapter, setRandomizerChapter] = useState<number | 'any'>('any');

  // New Preferences: Audio Speed & Display Mode
  const [audioSpeed, setAudioSpeed] = useState<AudioSpeed>(1.0);
  const [displayMode, setDisplayMode] = useState<DisplayMode>('all');
  const [activeKanjiCard, setActiveKanjiCard] = useState<Card | null>(null);

  // Sync weakCards to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('japanese_weak_cards', JSON.stringify(weakCards));
    } catch (err) {
      console.error('Failed to save weak cards to localStorage:', err);
    }
  }, [weakCards]);

  useEffect(() => {
    async function loadChapters() {
      const chapters = await fetchAvailableChapters();
      if (chapters && chapters.length > 0) {
        setAvailableChapters(chapters);
      }
    }
    loadChapters();
  }, []);

  const addWeakCard = (swipedCard: Card) => {
    setWeakCards(prev => {
      if (prev.some(c => c.id === swipedCard.id || (c.kanji === swipedCard.kanji && c.reading === swipedCard.reading))) {
        return prev;
      }
      return [swipedCard, ...prev];
    });
  };

  const loadChapter = async (chapter: number) => {
    setLoading(true);
    const fetchedCards = await fetchCardsByChapter(chapter);
    const randomizedCards = shuffleArray(fetchedCards);
    setCards(randomizedCards);
    setInitialCount(randomizedCards.length);
    setSelectedChapter(chapter);
    setActiveView('deck');
    setScore({ remembered: 0, review: 0 });
    setStreak(0);
    setFailStreak(0);
    setActiveMeme(null);
    setShownMemes(new Set());
    setLoading(false);
  };

  const startWeakDeck = () => {
    if (weakCards.length === 0) return;
    const randomizedWeak = shuffleArray(weakCards);
    setCards(randomizedWeak);
    setInitialCount(randomizedWeak.length);
    setSelectedChapter(999);
    setActiveView('weakDeck');
    setScore({ remembered: 0, review: 0 });
    setStreak(0);
    setFailStreak(0);
  };

  const triggerNextUnshownMeme = (type: 'success' | 'fail') => {
    if (!memeMode) return;

    const memePool = MEME_STICKERS[type];
    const unshown = memePool.filter(m => !shownMemes.has(m.id));

    if (unshown.length > 0) {
      // Pick the first unshown meme in order or randomly
      const selected = unshown[0];
      setShownMemes(prev => new Set(prev).add(selected.id));
      setActiveMeme({ ...selected, id: `${selected.id}_${Date.now()}` });
    }
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

      // Meme Trigger: Trigger on 2nd, 3rd, 5th, etc., only if NOT shown yet
      if (newStreak === 2 || newStreak === 3 || newStreak === 5 || newStreak === 8) {
        triggerNextUnshownMeme('success');
      }
    } else {
      // Wrong Swipe Logic
      const newFail = failStreak + 1;
      setFailStreak(newFail);
      setStreak(0);
      setScore(prev => ({ ...prev, review: prev.review + 1 }));

      // Save card to Weak Words SRS Deck
      const currentSwipedCard = cards.find(c => c.id === id);
      if (currentSwipedCard) {
        addWeakCard(currentSwipedCard);
      }

      // Meme Trigger on 2nd, 3rd, 5th wrong swipes, only if NOT shown yet
      if (newFail === 2 || newFail === 3 || newFail === 5 || newFail === 8) {
        triggerNextUnshownMeme('fail');
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

  const startRandomChapter = () => {
    let targetCh: number;
    if (randomizerChapter === 'any') {
      const pool = filteredChapters.length > 0 ? filteredChapters : availableChapters;
      if (pool.length === 0) return;
      targetCh = pool[Math.floor(Math.random() * pool.length)];
      triggerCombo(`🎲 Surprise Chapter ${targetCh} Loaded (Shuffled)!`);
    } else {
      targetCh = randomizerChapter;
      triggerCombo(`🔀 Chapter ${targetCh} Loaded in Random Order!`);
    }
    loadChapter(targetCh);
  };

  return (
    <div className="relative min-h-[100dvh] bg-transparent flex flex-col items-center justify-between p-4 overflow-hidden select-none font-sans text-slate-900">
      
      {/* --- AMBIENT SUNSET ORBS --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[550px] h-[550px] bg-pink-300/30 rounded-full mix-blend-multiply filter blur-[140px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-300/25 rounded-full mix-blend-multiply filter blur-[130px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* --- TOP APP HEADER (XP, STREAK, DISPLAY MODE, AUDIO SPEED & MEME TOGGLE) --- */}
      <header className="z-20 w-full max-w-4xl flex justify-between items-center py-3 px-2 gap-2 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setActiveView('home');
              setSelectedChapter(null);
            }}
            className="bg-white/90 border border-slate-200/80 p-2.5 rounded-2xl flex items-center gap-2 shadow-sm backdrop-blur-md hover:bg-white active:scale-95 transition"
          >
            <Sparkles className="w-5 h-5 text-indigo-600 animate-spin" style={{ animationDuration: '8s' }} />
            <span className="text-xs font-black tracking-widest text-indigo-900 uppercase">JLPT MASTER</span>
          </button>

          {/* Learn Kanji Section Launch Button */}
          <button
            onClick={() => {
              setActiveView('learnKanji');
              setSelectedChapter(null);
            }}
            title="Open Duolingo-style Kanji Drawing Practice"
            className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-3.5 py-2 rounded-2xl text-xs font-black shadow-md hover:shadow-lg active:scale-95 transition flex items-center gap-1.5 border border-white/30"
          >
            <span>✍️</span>
            <span className="hidden md:inline">DRAW KANJI</span>
          </button>

          {/* Display Mode Toggle (Kanji + Reading vs Kanji Only) */}
          <button
            onClick={() => setDisplayMode(prev => prev === 'all' ? 'kanji-only' : 'all')}
            title="Toggle Kanji Reading visibility on front card"
            className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-black transition-all border shadow-sm backdrop-blur-md ${
              displayMode === 'kanji-only'
                ? 'bg-purple-600 text-white border-purple-700 shadow-purple-500/30'
                : 'bg-white/80 text-slate-700 border-slate-200 hover:text-slate-900'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">{displayMode === 'kanji-only' ? 'KANJI ONLY' : 'ALL READINGS'}</span>
          </button>

          {/* Audio Speed Toggle (1.0x vs 0.75x Slow) */}
          <button
            onClick={() => setAudioSpeed(prev => prev === 1.0 ? 0.75 : 1.0)}
            title="Toggle audio pronunciation speed"
            className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-black transition-all border shadow-sm backdrop-blur-md ${
              audioSpeed === 0.75
                ? 'bg-amber-500 text-white border-amber-600 shadow-amber-500/30'
                : 'bg-white/80 text-slate-700 border-slate-200 hover:text-slate-900'
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span>{audioSpeed === 0.75 ? '0.75x SLOW' : '1.0x FAST'}</span>
          </button>
        </div>

        {/* XP, Streak & Meme Toggle */}
        <div className="flex items-center gap-2">
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

        {/* Kanji Breakdown Modal */}
        {activeKanjiCard && (
          <KanjiModal
            word={activeKanjiCard.kanji}
            reading={activeKanjiCard.reading}
            meaning={activeKanjiCard.meaning}
            onClose={() => setActiveKanjiCard(null)}
          />
        )}

        {activeView === 'learnKanji' ? (
          /* ==================== DUOLINGO-STYLE KANJI DRAW PRACTICE ==================== */
          <KanjiDrawPractice
            onClose={() => {
              setActiveView('home');
              setSelectedChapter(null);
            }}
            onAddXp={(amount) => setXp(prev => prev + amount)}
          />
        ) : activeView === 'speedQuiz' ? (
          /* ==================== 60-SEC SPEED BLITZ QUIZ VIEW ==================== */
          <SpeedQuiz
            cardPool={MOCK_CARDS}
            onClose={() => {
              setActiveView('home');
              setSelectedChapter(null);
            }}
            onAddWeakCard={addWeakCard}
          />
        ) : activeView === 'home' || selectedChapter === null ? (
          // ==================== HOME MENU SCREEN (LIGHT MODE) ====================
          <div className="w-full flex flex-col items-center max-w-3xl animate-in zoom-in-95 duration-400">
            
            {/* Title Section */}
            <div className="text-center mb-6">
              <h1 className="text-4xl md:text-6xl font-black mb-3 tracking-tight text-gradient-japan drop-shadow-sm">
                Minna no Nihongo
              </h1>
              <p className="text-slate-600 text-sm md:text-base font-bold">
                Master Japanese Vocabulary with Interactive 3D Flashcards & Memes
              </p>
            </div>

            {/* DEDICATED DUOLINGO KANJI DRAW PRACTICE BANNER */}
            <div className="w-full max-w-lg mb-4">
              <button
                onClick={() => setActiveView('learnKanji')}
                className="w-full p-4.5 rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-black border border-indigo-300 shadow-xl hover:shadow-2xl transition-all active:scale-95 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-black shadow-inner">
                    ✍️
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black uppercase tracking-wider text-pink-200">DUOLINGO STYLE</span>
                      <span className="text-[10px] font-black bg-white/20 px-2 py-0.5 rounded-full text-white uppercase">310 KANJI</span>
                    </div>
                    <span className="text-lg font-black tracking-tight">LEARN TO DRAW KANJI</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-white/20 px-4 py-2 rounded-2xl text-xs font-black tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>PRACTICE NOW</span>
                  <span>→</span>
                </div>
              </button>
            </div>

            {/* QUICK LAUNCH ACTION BUTTONS: WEAK WORDS SRS + 60s SPEED BLITZ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg mb-4">
              {/* Weak Words SRS Deck Launch */}
              <button
                onClick={startWeakDeck}
                disabled={weakCards.length === 0}
                className={`p-4 rounded-3xl font-black transition-all flex items-center justify-between border shadow-lg ${
                  weakCards.length > 0
                    ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white border-rose-300 hover:shadow-xl active:scale-95'
                    : 'bg-white/60 text-slate-400 border-slate-200 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-black uppercase tracking-wider">WEAK WORDS DECK</span>
                    <span className="text-sm font-extrabold opacity-95">
                      {weakCards.length > 0 ? `${weakCards.length} Missed Words` : 'No Missed Words Yet!'}
                    </span>
                  </div>
                </div>
                {weakCards.length > 0 && <span className="text-xs font-black bg-white/20 px-3 py-1 rounded-full">STUDY →</span>}
              </button>

              {/* 60s Speed Quiz Blitz Launch */}
              <button
                onClick={() => setActiveView('speedQuiz')}
                className="p-4 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black hover:from-amber-600 hover:to-orange-600 border border-amber-300 shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                    <Zap className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-black uppercase tracking-wider">SPEED BLITZ QUIZ</span>
                    <span className="text-sm font-extrabold opacity-95">60-Sec Challenge</span>
                  </div>
                </div>
                <span className="text-xs font-black bg-white/20 px-3 py-1 rounded-full">PLAY ⚡</span>
              </button>
            </div>

            {/* Dedicated Chapter Randomizer Control Panel */}
            <div className="w-full max-w-lg mb-6 glass-panel p-4 rounded-3xl border border-indigo-200/80 shadow-lg backdrop-blur-xl flex flex-col items-center gap-3 text-center">
              <div className="flex items-center gap-2 text-indigo-900 font-black text-xs uppercase tracking-widest">
                <Shuffle className="w-4 h-4 text-indigo-600 animate-spin" style={{ animationDuration: '8s' }} />
                <span>CHAPTER DECK RANDOMIZER</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                {/* Chapter Select Dropdown for Randomizer */}
                <div className="relative w-full sm:w-1/2">
                  <select
                    value={randomizerChapter}
                    onChange={(e) => setRandomizerChapter(e.target.value === 'any' ? 'any' : Number(e.target.value))}
                    className="w-full bg-white/90 border border-indigo-200 text-slate-800 font-extrabold text-xs py-3 px-4 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none cursor-pointer"
                  >
                    <option value="any">🎲 Any Chapter (Surprise Me)</option>
                    {filteredChapters.map(ch => (
                      <option key={ch} value={ch}>
                        Chapter {ch} {ch >= 26 ? '(JLPT N4)' : '(JLPT N5)'}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-indigo-500">
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Start Randomized Deck Button */}
                <button
                  onClick={startRandomChapter}
                  className="w-full sm:w-1/2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-black py-3 px-4 rounded-2xl shadow-md hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 text-xs tracking-wider uppercase border border-white/30"
                >
                  <Shuffle className="w-4 h-4" />
                  <span>START RANDOMIZED →</span>
                </button>
              </div>
            </div>

            {/* Level Filter Tabs (All / N5 / N4) */}
            <div className="flex bg-white/90 p-1.5 rounded-2xl border border-slate-200/80 mb-6 shadow-md backdrop-blur-md">
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
                <button
                  onClick={() => setCards(prev => shuffleArray(prev))}
                  title="Randomize remaining cards in this chapter"
                  className="bg-white/90 hover:bg-white backdrop-blur-md px-3.5 py-2 rounded-2xl text-xs font-black text-indigo-700 transition active:scale-95 border border-indigo-200 shadow-sm flex items-center gap-1.5"
                >
                  <Shuffle className="w-3.5 h-3.5 text-indigo-600" />
                  <span>SHUFFLE</span>
                </button>

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
                      audioSpeed={audioSpeed}
                      displayMode={displayMode}
                      onOpenKanjiModal={(c) => setActiveKanjiCard(c)}
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
