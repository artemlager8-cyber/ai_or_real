/**
 * AI or Real? — Обучающая игра на внимательность и медиаграмотность
 * Bilingual educational game (EN / RU) helping teens spot AI artifacts and understand real photography details.
 */

import React, { useState, useEffect } from 'react';
import { ScreenState, GameStats, GameItem, AnswerType, AnswerResult, Language } from './types';
import { getRandomGameDeck } from './data/questions';
import { getStreakBonus } from './utils/levels';
import { loadGameStats, saveGameStats, resetGameStats, loadLanguage, saveLanguage } from './utils/storage';
import { TRANSLATIONS } from './utils/i18n';
import { Header } from './components/Header';
import { HomeScreen } from './components/HomeScreen';
import { GameScreen } from './components/GameScreen';
import { GameOverScreen } from './components/GameOverScreen';
import { StatsModal } from './components/StatsModal';
import { RulesModal } from './components/RulesModal';

export default function App() {
  // Текущий активный экран приложения
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('HOME');

  // Язык интерфейса: RU или EN (сохраняется в localStorage)
  const [language, setLanguage] = useState<Language>(() => loadLanguage());

  // Локальная статистика игрока (сохраняется в localStorage)
  const [stats, setStats] = useState<GameStats>(() => loadGameStats());

  // Состояние текущей игровой сессии (10 случайных вопросов)
  const [gameDeck, setGameDeck] = useState<GameItem[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentGameXp, setCurrentGameXp] = useState<number>(0);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [maxSessionStreak, setMaxSessionStreak] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);

  // Синхронизация статистики в localStorage при изменении
  useEffect(() => {
    saveGameStats(stats);
  }, [stats]);

  // Переключение языка
  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    saveLanguage(newLang);
  };

  // Запуск новой игры
  const handleStartGame = () => {
    const deck = getRandomGameDeck(10);
    setGameDeck(deck);
    setCurrentQuestionIndex(0);
    setCurrentGameXp(0);
    setCurrentStreak(0);
    setMaxSessionStreak(0);
    setCorrectCount(0);
    setCurrentScreen('PLAYING');
  };

  // Обработка выбора ответа (AI или REAL)
  const handleAnswerSubmit = (userAnswer: AnswerType): AnswerResult => {
    const currentItem = gameDeck[currentQuestionIndex];
    const isCorrect = userAnswer === currentItem.answer;

    let earnedXp = 0;
    let newStreak = 0;

    if (isCorrect) {
      newStreak = currentStreak + 1;
      earnedXp = getStreakBonus(newStreak);
      setCurrentStreak(newStreak);
      setCurrentGameXp((prev) => prev + earnedXp);
      setCorrectCount((prev) => prev + 1);
      setMaxSessionStreak((prev) => Math.max(prev, newStreak));
    } else {
      // При ошибке серия обнуляется
      newStreak = 0;
      setCurrentStreak(0);
      earnedXp = 0;
    }

    return {
      isCorrect,
      userAnswer,
      earnedXp,
      streak: newStreak,
      item: currentItem,
    };
  };

  // Переход к следующему вопросу или финалу игры
  const handleNextQuestion = () => {
    if (currentQuestionIndex < gameDeck.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Игра завершена после 10 вопросов: обновляем общую статистику
      const finalXp = currentGameXp;
      const finalMaxStreak = maxSessionStreak;
      const finalCorrect = correctCount;

      setStats((prev) => ({
        gamesPlayed: prev.gamesPlayed + 1,
        totalCorrect: prev.totalCorrect + finalCorrect,
        totalAnswered: prev.totalAnswered + gameDeck.length,
        bestScore: Math.max(prev.bestScore, finalXp),
        totalXp: prev.totalXp + finalXp,
        maxStreak: Math.max(prev.maxStreak, finalMaxStreak),
      }));

      setCurrentScreen('GAMEOVER');
    }
  };

  // Сброс статистики
  const handleResetStats = () => {
    const freshStats = resetGameStats();
    setStats(freshStats);
  };

  const t = TRANSLATIONS[language];

  return (
    <div className="min-h-screen bg-[#0D0D14] text-white flex flex-col justify-between selection:bg-[#7C5CFC] selection:text-white">
      {/* Header bar with language switcher */}
      <Header
        currentScreen={currentScreen}
        stats={stats}
        currentSessionXp={currentGameXp}
        language={language}
        onLanguageChange={handleLanguageChange}
        onNavigate={setCurrentScreen}
      />

      {/* Dynamic Screen View */}
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        {currentScreen === 'HOME' && (
          <HomeScreen
            stats={stats}
            language={language}
            onStartGame={handleStartGame}
            onNavigate={setCurrentScreen}
          />
        )}

        {currentScreen === 'PLAYING' && gameDeck.length > 0 && (
          <GameScreen
            questionIndex={currentQuestionIndex}
            totalQuestions={gameDeck.length}
            currentItem={gameDeck[currentQuestionIndex]}
            currentGameXp={currentGameXp}
            streak={currentStreak}
            language={language}
            onAnswerSubmit={handleAnswerSubmit}
            onNextQuestion={handleNextQuestion}
          />
        )}

        {currentScreen === 'GAMEOVER' && (
          <GameOverScreen
            correctCount={correctCount}
            totalQuestions={gameDeck.length || 10}
            earnedXp={currentGameXp}
            maxSessionStreak={maxSessionStreak}
            stats={stats}
            language={language}
            onPlayAgain={handleStartGame}
            onNavigate={setCurrentScreen}
          />
        )}

        {currentScreen === 'STATS' && (
          <StatsModal
            stats={stats}
            language={language}
            onBack={() => setCurrentScreen('HOME')}
            onReset={handleResetStats}
          />
        )}

        {currentScreen === 'RULES' && (
          <RulesModal
            language={language}
            onBack={() => setCurrentScreen('HOME')}
            onStartGame={handleStartGame}
          />
        )}
      </main>

      {/* Footer subtle tag */}
      <footer className="w-full max-w-md mx-auto py-2 text-center text-[10px] text-[#9A9AA8]/50">
        {t.footerNote}
      </footer>
    </div>
  );
}

