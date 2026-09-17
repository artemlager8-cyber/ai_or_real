import React from 'react';
import { Play, Trophy, Star, Sparkles, BarChart3, HelpCircle, ShieldCheck, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { GameStats, ScreenState } from '../types';
import { getLevelByXp } from '../utils/levels';

interface HomeScreenProps {
  stats: GameStats;
  onStartGame: () => void;
  onNavigate: (screen: ScreenState) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ stats, onStartGame, onNavigate }) => {
  const currentLevel = getLevelByXp(stats.totalXp);

  return (
    <div className="flex-1 flex flex-col items-center justify-between px-4 py-6 max-w-md mx-auto w-full">
      {/* Top Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full text-center mt-2 flex flex-col items-center"
      >
        {/* Glowing badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7C5CFC]/15 border border-[#7C5CFC]/30 text-[#7C5CFC] text-xs font-semibold mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Обучающая медиа-игра</span>
        </div>

        {/* Title */}
        <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-white mb-2">
          AI <span className="text-[#7C5CFC]">or</span> Real?
        </h1>

        {/* Tagline */}
        <p className="text-lg font-medium text-[#9A9AA8] max-w-xs mx-auto">
          «Сможешь отличить настоящее?»
        </p>

        <p className="text-xs text-[#9A9AA8]/80 mt-2 max-w-sm px-4">
          Тренируй зоркость: находи артефакты нейросетей и настоящие детали реальных фото!
        </p>
      </motion.div>

      {/* Center Interactive Visual & Play Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="w-full my-6 flex flex-col items-center"
      >
        {/* Mini duality graphic banner */}
        <div className="w-full bg-[#151520] border border-white/10 rounded-3xl p-4 mb-6 relative overflow-hidden shadow-xl shadow-black/40">
          <div className="flex items-center justify-between gap-3 text-center">
            <div className="flex-1 bg-[#1F1938] border border-[#7C5CFC]/30 rounded-2xl p-3 flex flex-col items-center">
              <span className="text-2xl mb-1">🤖</span>
              <span className="font-display font-bold text-xs text-[#7C5CFC]">AI ГЕНЕРАЦИЯ</span>
              <span className="text-[10px] text-[#9A9AA8] mt-0.5">Артефакты, пальцы, блики</span>
            </div>

            <div className="text-xs font-bold text-[#9A9AA8] uppercase px-1">
              VS
            </div>

            <div className="flex-1 bg-[#132822] border border-[#35E59A]/30 rounded-2xl p-3 flex flex-col items-center">
              <span className="text-2xl mb-1">📷</span>
              <span className="font-display font-bold text-xs text-[#35E59A]">РЕАЛЬНОЕ ФОТО</span>
              <span className="text-[10px] text-[#9A9AA8] mt-0.5">Фактура, поры, физика</span>
            </div>
          </div>
        </div>

        {/* Big PLAY Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStartGame}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#7C5CFC] via-[#6B46C1] to-[#4F46E5] text-white font-display font-extrabold text-xl tracking-wide shadow-lg shadow-[#7C5CFC]/30 hover:shadow-[#7C5CFC]/50 transition-all flex items-center justify-center gap-3 border border-white/20"
        >
          <Play className="w-6 h-6 fill-white" />
          <span>ИГРАТЬ</span>
        </motion.button>
      </motion.div>

      {/* Bottom Stats & Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="w-full space-y-3"
      >
        {/* User Status Card */}
        <div className="w-full bg-[#151520] border border-white/10 rounded-2xl p-4 shadow-md">
          <div className="grid grid-cols-2 gap-3 divide-x divide-white/10">
            {/* Best Score */}
            <div className="flex items-center gap-3 pl-1">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-5 h-5 text-amber-400" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-[#9A9AA8] block uppercase font-medium">
                  Лучший результат
                </span>
                <span className="font-display font-bold text-base text-white truncate block">
                  {stats.bestScore} XP
                </span>
              </div>
            </div>

            {/* Current Level */}
            <div className="flex items-center gap-3 pl-4">
              <div className="w-10 h-10 rounded-xl bg-[#7C5CFC]/15 border border-[#7C5CFC]/30 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">{currentLevel.badge}</span>
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-[#9A9AA8] block uppercase font-medium">
                  Текущий уровень
                </span>
                <span className="font-display font-bold text-base text-[#7C5CFC] truncate block">
                  {currentLevel.title}
                </span>
              </div>
            </div>
          </div>

          {/* Max streak bonus indicator if available */}
          {stats.maxStreak > 1 && (
            <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-xs text-[#9A9AA8]">
              <span className="flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                Рекордная серия:
              </span>
              <span className="font-bold text-amber-300">
                {stats.maxStreak} подряд 🔥
              </span>
            </div>
          )}
        </div>

        {/* Secondary Buttons */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={() => onNavigate('STATS')}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-semibold text-white/90 transition-colors"
          >
            <BarChart3 className="w-4 h-4 text-[#7C5CFC]" />
            <span>Статистика</span>
          </button>

          <button
            onClick={() => onNavigate('RULES')}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-semibold text-white/90 transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-[#35E59A]" />
            <span>Как играть?</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
