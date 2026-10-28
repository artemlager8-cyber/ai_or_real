import React, { useEffect } from 'react';
import { Trophy, RotateCcw, Home, BarChart3, Award } from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { GameStats, ScreenState, Language } from '../types';
import { getLevelByXp, getLevelTitle } from '../utils/levels';
import { TRANSLATIONS } from '../utils/i18n';
import { FEEDBACK_URL } from '../config';

interface GameOverScreenProps {
  correctCount: number;
  totalQuestions: number;
  earnedXp: number;
  maxSessionStreak: number;
  stats: GameStats;
  language: Language;
  onPlayAgain: () => void;
  onNavigate: (screen: ScreenState) => void;
}

export const GameOverScreen: React.FC<GameOverScreenProps> = ({
  correctCount,
  totalQuestions,
  earnedXp,
  maxSessionStreak,
  stats,
  language,
  onPlayAgain,
  onNavigate,
}) => {
  const accuracy = Math.round((correctCount / totalQuestions) * 100);
  const isHighPerformance = accuracy >= 70;
  const currentLevel = getLevelByXp(stats.totalXp);
  const t = TRANSLATIONS[language];

  // Trigger celebration confetti on high performance
  useEffect(() => {
    if (isHighPerformance) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#7C5CFC', '#35E59A', '#FFD700', '#FF5570'],
        });
      } catch {
        // Safe fallback if canvas is restricted
      }
    }
  }, [isHighPerformance]);

  return (
    <div className="flex-1 flex flex-col items-center justify-between px-4 py-6 max-w-md mx-auto w-full">
      {/* Top Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full text-center mt-2 flex flex-col items-center"
      >
        <div
          className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-3 shadow-xl ${
            isHighPerformance
              ? 'bg-[#35E59A]/20 border border-[#35E59A]/40 text-[#35E59A]'
              : 'bg-[#7C5CFC]/20 border border-[#7C5CFC]/40 text-[#7C5CFC]'
          }`}
        >
          {isHighPerformance ? (
            <Trophy className="w-8 h-8 text-[#35E59A]" />
          ) : (
            <Award className="w-8 h-8 text-[#7C5CFC]" />
          )}
        </div>

        <h1 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wide uppercase">
          {t.gameOverTitle}
        </h1>
        <p className="text-sm text-[#9A9AA8] mt-0.5">
          {t.investigationSession}
        </p>
      </motion.div>

      {/* Center Summary Stats Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="w-full my-4 space-y-3"
      >
        <div className="w-full bg-[#151522] border border-white/10 rounded-3xl p-5 shadow-2xl">
          {/* Main metrics grid */}
          <div className="grid grid-cols-3 gap-2 text-center pb-4 border-b border-white/10">
            {/* Correct count */}
            <div className="bg-white/5 rounded-2xl p-3 flex flex-col items-center">
              <span className="text-xs text-[#9A9AA8] font-medium mb-1 truncate w-full">
                {t.answersLabel}
              </span>
              <span className="font-display font-extrabold text-xl text-white">
                {correctCount} / {totalQuestions}
              </span>
              <span className="text-[10px] text-[#35E59A] mt-0.5">
                {t.correctSublabel}
              </span>
            </div>

            {/* Earned XP */}
            <div className="bg-[#7C5CFC]/10 border border-[#7C5CFC]/30 rounded-2xl p-3 flex flex-col items-center">
              <span className="text-xs text-[#9A9AA8] font-medium mb-1 truncate w-full">
                {t.pointsLabel}
              </span>
              <span className="font-display font-extrabold text-xl text-[#35E59A]">
                +{earnedXp}
              </span>
              <span className="text-[10px] text-white/70 mt-0.5 font-bold">
                XP
              </span>
            </div>

            {/* Accuracy */}
            <div className="bg-white/5 rounded-2xl p-3 flex flex-col items-center">
              <span className="text-xs text-[#9A9AA8] font-medium mb-1 truncate w-full">
                {t.accuracyLabel}
              </span>
              <span
                className={`font-display font-extrabold text-xl ${
                  accuracy >= 70 ? 'text-[#35E59A]' : 'text-amber-400'
                }`}
              >
                {accuracy}%
              </span>
              <span className="text-[10px] text-[#9A9AA8] mt-0.5">
                {t.resultSublabel}
              </span>
            </div>
          </div>

          {/* Motivating Message */}
          <div className="mt-4 text-center">
            {isHighPerformance ? (
              <div className="bg-[#35E59A]/10 border border-[#35E59A]/20 p-3.5 rounded-2xl">
                <p className="text-sm font-semibold text-[#35E59A] flex items-center justify-center gap-1.5 mb-1">
                  <span>{t.highAccuracyTitle}</span>
                </p>
                <p className="text-xs text-white/80">
                  {t.highAccuracyDesc}
                </p>
              </div>
            ) : (
              <div className="bg-amber-500/10 border border-amber-500/20 p-3.5 rounded-2xl">
                <p className="text-sm font-semibold text-amber-300 flex items-center justify-center gap-1.5 mb-1">
                  <span>{t.lowAccuracyTitle}</span>
                </p>
                <p className="text-xs text-[#9A9AA8]">
                  {t.lowAccuracyDesc}
                </p>
              </div>
            )}
          </div>

          {/* Level info snippet */}
          <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
            <span className="text-[#9A9AA8] flex items-center gap-1.5">
              <span>{currentLevel.badge}</span>
              <span>{t.yourStatus}: <strong className="text-white">{getLevelTitle(currentLevel, language)}</strong></span>
            </span>
            <span className="text-[#35E59A] font-bold">
              {t.totalXpLabel(stats.totalXp)}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="w-full space-y-3"
      >
        {/* Play Again Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onPlayAgain}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#7C5CFC] to-[#4F46E5] text-white font-display font-bold text-lg shadow-lg shadow-[#7C5CFC]/30 hover:shadow-[#7C5CFC]/50 transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/20"
        >
          <RotateCcw className="w-5 h-5" />
          <span>{t.playAgainBtn}</span>
        </motion.button>

        {/* Feedback Button */}
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={FEEDBACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-6 rounded-2xl bg-[#171726] hover:bg-[#202035] border border-[#7C5CFC]/40 hover:border-[#7C5CFC] text-white font-display font-bold text-base shadow-lg shadow-black/30 hover:shadow-[#7C5CFC]/25 transition-all flex items-center justify-center gap-2 cursor-pointer text-center group"
        >
          <span className="group-hover:text-[#35E59A] transition-colors">{t.feedbackBtn}</span>
        </motion.a>

        {/* Go to Home and View Stats */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={() => onNavigate('HOME')}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold text-white/90 transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4 text-[#9A9AA8]" />
            <span>{t.homeBtn}</span>
          </button>

          <button
            onClick={() => onNavigate('STATS')}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold text-white/90 transition-colors cursor-pointer"
          >
            <BarChart3 className="w-4 h-4 text-[#7C5CFC]" />
            <span>{t.statsBtn}</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

