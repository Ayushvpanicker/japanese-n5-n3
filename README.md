# 🇯🇵 Minna no Nihongo Flashcards (N5 & N4/N3)

An interactive, gamified 3D flashcard web application built with **React 18**, **TypeScript**, **Tailwind CSS v3**, **Framer Motion**, and **Supabase**. Practice Minna no Nihongo Japanese vocabulary with native audio pronunciation, streak multipliers, XP rewards, and live swipe feedback!

![Minna no Nihongo Flashcards](https://img.shields.io/badge/JLPT-N5%20%7C%20N4-indigo?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-sky?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-Database-emerald?style=for-the-badge&logo=supabase)

---

## ✨ Features

- 🎴 **Interactive 3D Glassmorphic Cards**: Smooth 3D card flip physics using Framer Motion.
- 🔊 **Native Japanese Audio Pronunciation**: Listen to authentic pronunciation (`ja-JP`) with the built-in Web Speech API.
- ⛩️ **Prominent Hiragana & Kanji Display**: Clear Hiragana badges displayed on front and back of cards.
- 🔴🟢 **Real-time Swipe Feedback**:
  - Swiping Right $\rightarrow$ Emerald Green overlay + `✓ MASTERED (+10 XP)`.
  - Swiping Left $\rightarrow$ Rose Red overlay + `✕ REVIEW`.
- 🔥 **Gamification & Streak Combos**:
  - Live Streak Counter & Multipliers (`3 STREAK`, `5 COMBO`, `10 MASTER!`).
  - Total XP Points system & Confetti celebrations.
- 📚 **Full JLPT N5 & N4 Vocabulary**: Pre-populated database with **400+ vocabulary cards** covering Chapters 1 to 50.
- ⌨️ **Keyboard Navigation**:
  - `←` Left Arrow: Swipe Left (Review)
  - `→` Right Arrow: Swipe Right (Mastered)
  - `Space` / `↑`: Flip Card
  - `Key A`: Audio Pronunciation

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 + Vite 8
- **Language**: TypeScript 5.6
- **Styling**: Tailwind CSS v3 + Custom Tokyo Glassmorphism System
- **Animations**: Framer Motion 11 + Canvas Confetti
- **Database**: Supabase PostgreSQL (`cards` table)
- **Audio**: Native Browser Web Speech API (`SpeechSynthesisUtterance`)

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/Ayushvpanicker/japanese-n5-n3.git
cd japanese-n5-n3
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 4. Seed Database (Optional)
```bash
npm run seed
```

### 5. Run Local Development Server
```bash
npm run dev
```

---

## 📦 Project Structure

```
japanese-n5-n3/
├── src/
│   ├── components/
│   │   └── CardItem.tsx        # 3D Flip Card Component with Audio & Swipe overlays
│   ├── data/
│   │   └── mockCards.ts       # Fallback mock cards
│   ├── lib/
│   │   └── supabase.ts        # Supabase client & dynamic chapter queries
│   ├── types/
│   │   └── card.ts            # Card interface types
│   ├── App.tsx                # Main App with Gamification, XP & JLPT Filters
│   ├── index.css              # Custom Tokyo Glassmorphism CSS design system
│   └── main.tsx               # App entry point
├── scripts/
│   ├── reseedFullVocabulary.ts # Full N4 vocabulary database seed script
│   └── importPdf.ts           # PDF vocabulary parsing tool
├── .env.example               # Environment variables template
├── package.json
└── README.md
```

---

## 📄 License
[ISC License](LICENSE)
