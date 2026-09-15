import { useState, useEffect } from 'react';
import { Card } from '../types/card';
import confetti from 'canvas-confetti';
import { Timer, Trophy, Sparkles, CheckCircle2, XCircle, ArrowLeft, Volume2, Flame } from 'lucide-react';

interface SpeedQuizProps {
  cardPool: Card[];
  onClose: () => void;
  onAddWeakCard: (card: Card) => void;
}

interface Question {
  card: Card;
  options: string[];
  correctAnswer: string;
}

export function SpeedQuiz({ cardPool, onClose, onAddWeakCard }: SpeedQuizProps) {
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState({ correct: 0, wrong: 0, xp: 0 });
  const [streak, setStreak] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  // Helper to generate a question with 4 unique options
  const generateQuestion = (): Question | null => {
    if (!cardPool || cardPool.length < 4) return null;

    const targetCard = cardPool[Math.floor(Math.random() * cardPool.length)];
    const options = [targetCard.meaning];

    // Pick 3 distractor meanings from other cards
    while (options.length < 4) {
      const randomCard = cardPool[Math.floor(Math.random() * cardPool.length)];
      if (!options.includes(randomCard.meaning)) {
        options.push(randomCard.meaning);
      }
    }

    // Shuffle options using Fisher-Yates
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }

    return {
      card: targetCard,
      options,
      correctAnswer: targetCard.meaning,
    };
  };

  // Start game & countdown timer
  useEffect(() => {
    setCurrentQuestion(generateQuestion());

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsGameOver(true);
          confetti({ particleCount: 120, spread: 80 });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Speak target Japanese word
  const speakWord = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[^\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/g, '').trim();
    if (!cleanText) return;
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleOptionClick = (option: string) => {
    if (isAnswered || !currentQuestion || isGameOver) return;

    setSelectedOption(option);
    setIsAnswered(true);

    const isCorrect = option === currentQuestion.correctAnswer;

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      const bonusXp = 10 + (newStreak >= 5 ? 10 : 0);
      setScore(prev => ({ ...prev, correct: prev.correct + 1, xp: prev.xp + bonusXp }));

      if (newStreak === 5) confetti({ particleCount: 50, spread: 50 });
    } else {
      setStreak(0);
      setScore(prev => ({ ...prev, wrong: prev.wrong + 1 }));
      onAddWeakCard(currentQuestion.card); // Save missed card to Weak Words Deck
    }

    // Auto-advance to next question after 600ms
    setTimeout(() => {
      setSelectedOption(null);
      setIsAnswered(false);
      if (timeLeft > 0) {
        setCurrentQuestion(generateQuestion());
      }
    }, 600);
  };

  const restartQuiz = () => {
    setTimeLeft(60);
    setScore({ correct: 0, wrong: 0, xp: 0 });
    setStreak(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsGameOver(false);
    setCurrentQuestion(generateQuestion());
  };

  return (
    <div className="w-full max-w-xl animate-in zoom-in-95 duration-300 flex flex-col items-center">
      {/* Top Bar: Navigation, Timer & Live XP */}
      <div className="w-full flex justify-between items-center mb-6 px-1">
        <button
          onClick={onClose}
          className="bg-white/90 hover:bg-white backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-black text-slate-800 transition active:scale-95 border border-slate-200 shadow-sm flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>EXIT QUIZ</span>
        </button>

        {/* 60s Live Timer */}
        <div className={`flex items-center gap-2 px-5 py-2 rounded-2xl border font-black text-sm shadow-md backdrop-blur-md transition-all ${
          timeLeft <= 10
            ? 'bg-rose-500 text-white border-rose-600 animate-bounce'
            : 'bg-indigo-600 text-white border-indigo-700'
        }`}>
          <Timer className="w-4 h-4" />
          <span>{timeLeft}s LEFT</span>
        </div>

        {/* XP Score */}
        <div className="flex items-center gap-1.5 bg-amber-500/20 border border-amber-500/40 px-4 py-2 rounded-2xl shadow-sm text-amber-900 font-black text-xs">
          <Trophy className="w-4 h-4 text-amber-600" />
          <span>+{score.xp} XP</span>
        </div>
      </div>

      {!isGameOver && currentQuestion ? (
        /* ==================== ACTIVE QUIZ QUESTION CARD ==================== */
        <div className="w-full glass-panel rounded-[2.5rem] p-8 border border-white/90 shadow-2xl flex flex-col items-center text-center">
          
          {/* Question Streak Badge & Audio Pronounce */}
          <div className="w-full flex justify-between items-center mb-4">
            <div className="flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 px-3 py-1 rounded-full text-xs font-black text-orange-900">
              <Flame className="w-3.5 h-3.5 text-orange-600" />
              <span>{streak} STREAK</span>
            </div>

            <button
              onClick={() => speakWord(currentQuestion.card.reading || currentQuestion.card.kanji || '')}
              className="p-3 rounded-2xl bg-indigo-50 hover:bg-indigo-100 text-indigo-600 border border-indigo-200 transition active:scale-95 shadow-sm"
              title="Pronounce Japanese word"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>

          {/* Main Japanese Word */}
          <div className="my-6">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">
              CH. {currentQuestion.card.chapter} VOCABULARY
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              {currentQuestion.card.kanji || currentQuestion.card.reading}
            </h2>
            {currentQuestion.card.kanji && (
              <div className="text-xl font-extrabold text-indigo-600 mt-2">
                {currentQuestion.card.reading}
              </div>
            )}
          </div>

          {/* 4 Multiple Choice Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-2">
            {currentQuestion.options.map((opt, idx) => {
              const isSelected = selectedOption === opt;
              const isCorrectOpt = opt === currentQuestion.correctAnswer;

              let btnStyle = 'bg-white/90 hover:bg-white text-slate-800 border-slate-200 hover:border-indigo-400';
              if (isAnswered) {
                if (isCorrectOpt) {
                  btnStyle = 'bg-emerald-600 text-white border-emerald-700 scale-102 shadow-lg';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-600 text-white border-rose-700 animate-shake';
                } else {
                  btnStyle = 'bg-slate-100/60 text-slate-400 border-slate-200 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(opt)}
                  disabled={isAnswered}
                  className={`p-4 rounded-2xl border font-extrabold text-sm transition-all duration-200 shadow-sm flex items-center justify-between text-left ${btnStyle}`}
                >
                  <span className="leading-snug">{opt}</span>
                  {isAnswered && isCorrectOpt && <CheckCircle2 className="w-5 h-5 text-white shrink-0 ml-2" />}
                  {isAnswered && isSelected && !isCorrectOpt && <XCircle className="w-5 h-5 text-white shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        /* ==================== GAME OVER RESULT SCREEN ==================== */
        <div className="w-full glass-panel rounded-[2.5rem] p-8 border border-white/90 shadow-2xl flex flex-col items-center text-center animate-in zoom-in-95 duration-400">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-4 border border-amber-300">
            <Trophy className="w-10 h-10 text-amber-600 animate-bounce" />
          </div>

          <h2 className="text-4xl font-black text-gradient-japan mb-2">Time's Up! Blitz Complete</h2>
          <p className="text-slate-600 text-xs font-bold mb-6">60-Second Speed Quiz Results</p>

          <div className="flex w-full justify-around mb-8 bg-slate-50/80 p-5 rounded-2xl border border-slate-200">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-emerald-600">{score.correct}</span>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Correct</span>
            </div>
            <div className="w-px h-full bg-slate-200"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-rose-600">{score.wrong}</span>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Wrong</span>
            </div>
            <div className="w-px h-full bg-slate-200"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-amber-600">+{score.xp}</span>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">XP Earned</span>
            </div>
          </div>

          <div className="flex gap-3 w-full">
            <button
              onClick={restartQuiz}
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black py-4 rounded-2xl shadow-xl active:scale-95 transition text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>PLAY AGAIN</span>
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-white hover:bg-slate-50 text-slate-800 font-black py-4 rounded-2xl border border-slate-200 shadow-sm active:scale-95 transition text-xs uppercase tracking-wider"
            >
              BACK TO MENU
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
