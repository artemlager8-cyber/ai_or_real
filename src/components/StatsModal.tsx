import React, { useState } from 'react';
import { Trophy, CheckCircle2, Flame, Percent, Gamepad2, ArrowLeft, Trash2, Award, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { GameStats, ScreenState } from '../types';
import { LEVELS, getLevelByXp } from '../utils/levels';

interface StatsModalProps {
  stats: GameStats;
  onBack: () => void;
  onReset: () => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({ stats, onBack, onReset }) => {
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const currentLevel = getLevelByXp(stats.totalXp);
  
  // Calculate accuracy
  const accuracy = stats.totalAnswered > 0
    ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100)
    : 0;

  // Next level progress
  const nextLevel = LEVELS.find((l) => l.level === currentLevel.level + 1);
  const progressPercent = nextLevel
    ? Math.min(
        100,
        Math.max(
          0,
          Math.round(((stats.totalXp - currentLevel.minXp) / (currentLevel.maxXp - currentLevel.minXp)) * 100)
        )
      )
    : 100;

  return (
    <div className="flex-1 flex flex-col justify-between px-4 py-4 max-w-md mx-auto w-full">
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-semibold text-[#9A9AA8] hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-xl transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Назад</span>
        </button>

        <h1 className="font-display font-black text-lg text-white">
          Моя статистика
        </h1>

        <div className="w-12 text-right">
          {/* subtle reset icon */}
          <button
            onClick={() => setShowConfirmReset(true)}
            className="text-[#9A9AA8]/50 hover:text-[#FF5570] p-1 transition-colors"
            title="Сбросить статистику"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Stats Scrollable Content */}
      <div className="w-full flex-1 overflow-y-auto space-y-4 pr-1">
        {/* Current Rank Banner */}
        <div className="w-full bg-gradient-to-br from-[#1C1833] to-[#12121E] border border-[#7C5CFC]/30 rounded-3xl p-4 shadow-xl">
          <div className="flex items-center gap-3.5 mb-3">
            <div className="w-14 h-14 rounded-2xl bg-[#7C5CFC]/20 border border-[#7C5CFC]/40 flex items-center justify-center text-3xl shadow-inner">
              {currentLevel.badge}
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#7C5CFC] uppercase tracking-wider block">
                Текущий уровень: {currentLevel.level}
              </span>
              <h2 className="font-display font-extrabold text-xl text-white">
                {currentLevel.title}
              </h2>
              <span className="text-xs text-[#9A9AA8]">
                Всего набрано: <strong className="text-[#35E59A]">{stats.totalXp} XP</strong>
              </span>
            </div>
          </div>

          {/* Progress bar to next rank */}
          {nextLevel ? (
            <div className="space-y-1.5 pt-2 border-t border-white/5">
              <div className="flex justify-between text-[11px] text-[#9A9AA8]">
                <span>До уровня «{nextLevel.title}»</span>
                <span className="text-white font-medium">{progressPercent}%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#7C5CFC] to-[#35E59A] rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-[#9A9AA8]/70">
                <span>{stats.totalXp} XP</span>
                <span>{currentLevel.maxXp} XP</span>
              </div>
            </div>
          ) : (
            <div className="text-xs text-[#35E59A] font-semibold pt-1 border-t border-white/5">
              👑 Максимальный уровень достигнут!
            </div>
          )}
        </div>

        {/* 6 Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* Games Played */}
          <div className="bg-[#151520] border border-white/10 rounded-2xl p-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
              <Gamepad2 className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <span className="text-[11px] text-[#9A9AA8] block font-medium">
                Игр сыграно
              </span>
              <span className="font-display font-extrabold text-lg text-white">
                {stats.gamesPlayed}
              </span>
            </div>
          </div>

          {/* Total Correct */}
          <div className="bg-[#151520] border border-white/10 rounded-2xl p-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#35E59A]/10 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-[#35E59A]" />
            </div>
            <div>
              <span className="text-[11px] text-[#9A9AA8] block font-medium">
                Правильных ответов
              </span>
              <span className="font-display font-extrabold text-lg text-[#35E59A]">
                {stats.totalCorrect}
              </span>
            </div>
          </div>

          {/* Best Score */}
          <div className="bg-[#151520] border border-white/10 rounded-2xl p-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
              <Trophy className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <span className="text-[11px] text-[#9A9AA8] block font-medium">
                Лучший результат
              </span>
              <span className="font-display font-extrabold text-lg text-white">
                {stats.bestScore} XP
              </span>
            </div>
          </div>

          {/* Accuracy % */}
          <div className="bg-[#151520] border border-white/10 rounded-2xl p-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
              <Percent className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <span className="text-[11px] text-[#9A9AA8] block font-medium">
                Точность ответов
              </span>
              <span className="font-display font-extrabold text-lg text-white">
                {accuracy}%
              </span>
            </div>
          </div>

          {/* Max Streak */}
          <div className="bg-[#151520] border border-white/10 rounded-2xl p-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
              <Flame className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <span className="text-[11px] text-[#9A9AA8] block font-medium">
                Макс. серия
              </span>
              <span className="font-display font-extrabold text-lg text-orange-300">
                {stats.maxStreak} 🔥
              </span>
            </div>
          </div>

          {/* Current Level */}
          <div className="bg-[#151520] border border-white/10 rounded-2xl p-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#7C5CFC]/15 flex items-center justify-center flex-shrink-0 text-lg">
              {currentLevel.badge}
            </div>
            <div>
              <span className="text-[11px] text-[#9A9AA8] block font-medium">
                Текущий уровень
              </span>
              <span className="font-display font-extrabold text-xs text-[#7C5CFC] block truncate">
                {currentLevel.title}
              </span>
            </div>
          </div>
        </div>

        {/* Levels Ladder */}
        <div className="bg-[#151520] border border-white/10 rounded-2xl p-4">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#7C5CFC]" />
            <span>Иерархия детективов</span>
          </h3>

          <div className="space-y-2">
            {LEVELS.map((lvl) => {
              const isAchieved = stats.totalXp >= lvl.minXp;
              const isCurrent = currentLevel.level === lvl.level;

              return (
                <div
                  key={lvl.level}
                  className={`flex items-center justify-between p-2.5 rounded-xl border text-xs transition-all ${
                    isCurrent
                      ? 'bg-[#7C5CFC]/15 border-[#7C5CFC]/50 text-white font-bold'
                      : isAchieved
                      ? 'bg-white/5 border-white/5 text-white/80'
                      : 'bg-white/[0.02] border-white/5 text-[#9A9AA8]/50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{lvl.badge}</span>
                    <div>
                      <span className="block font-semibold">
                        Уровень {lvl.level} — {lvl.title}
                      </span>
                      <span className="text-[10px] text-[#9A9AA8]">
                        от {lvl.minXp} XP
                      </span>
                    </div>
                  </div>

                  <div>
                    {isCurrent ? (
                      <span className="text-[10px] bg-[#7C5CFC] text-white px-2 py-0.5 rounded-md">
                        Текущий
                      </span>
                    ) : isAchieved ? (
                      <span className="text-[10px] text-[#35E59A]">
                        ✓ Достигнут
                      </span>
                    ) : (
                      <span className="text-[10px] text-[#9A9AA8]/40">
                        🔒 Заблокирован
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Reset confirmation modal */}
      {showConfirmReset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-xs bg-[#1A1A28] border border-white/15 rounded-2xl p-5 shadow-2xl text-center space-y-3">
            <h4 className="font-display font-bold text-base text-white">
              Сбросить всю статистику?
            </h4>
            <p className="text-xs text-[#9A9AA8]">
              Очки, уровень и серии будут обнулены. Это действие нельзя отменить.
            </p>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setShowConfirmReset(false)}
                className="flex-1 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white"
              >
                Отмена
              </button>
              <button
                onClick={() => {
                  onReset();
                  setShowConfirmReset(false);
                }}
                className="flex-1 py-2 px-3 rounded-xl bg-[#FF5570] hover:bg-[#FF5570]/90 text-xs font-semibold text-white"
              >
                Сбросить
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom return button */}
      <div className="pt-3">
        <button
          onClick={onBack}
          className="w-full py-3 rounded-2xl bg-white/10 hover:bg-white/15 text-sm font-semibold text-white transition-colors"
        >
          Вернуться
        </button>
      </div>
    </div>
  );
};
