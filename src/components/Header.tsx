import React from 'react';
import { Sparkles, Trophy, BookOpen, BarChart3, Home } from 'lucide-react';
import { ScreenState, GameStats } from '../types';
import { getLevelByXp } from '../utils/levels';

interface HeaderProps {
  currentScreen: ScreenState;
  stats: GameStats;
  onNavigate: (screen: ScreenState) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, stats, onNavigate }) => {
  const currentLevel = getLevelByXp(stats.totalXp);

  return (
    <header className="w-full max-w-md mx-auto px-4 pt-4 pb-2 flex items-center justify-between border-b border-white/5">
      {/* Brand logo / home link */}
      <button
        onClick={() => onNavigate('HOME')}
        className="flex items-center gap-2 group text-left focus:outline-none"
        title="На главную"
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7C5CFC] to-[#4F46E5] flex items-center justify-center shadow-lg shadow-[#7C5CFC]/20 group-hover:scale-105 transition-transform">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <span className="font-display font-extrabold text-base tracking-tight text-white flex items-center gap-1">
            AI <span className="text-[#7C5CFC] text-xs">or</span> Real?
          </span>
          <span className="text-[10px] text-[#9A9AA8] block -mt-1 tracking-wider uppercase">
            Школьный детектив
          </span>
        </div>
      </button>

      {/* Action buttons / quick stats */}
      <div className="flex items-center gap-1.5">
        {currentScreen !== 'HOME' && (
          <button
            onClick={() => onNavigate('HOME')}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#9A9AA8] hover:text-white transition-colors"
            title="Главный экран"
          >
            <Home className="w-4 h-4" />
          </button>
        )}

        {/* Level badge pill */}
        <div
          onClick={() => onNavigate('STATS')}
          className="cursor-pointer flex items-center gap-1.5 bg-[#171724] border border-white/10 hover:border-[#7C5CFC]/40 px-2.5 py-1.5 rounded-xl transition-all"
          title={`Уровень: ${currentLevel.title}`}
        >
          <span className="text-xs">{currentLevel.badge}</span>
          <span className="text-xs font-semibold text-white/90 hidden xs:inline">
            Ур. {currentLevel.level}
          </span>
          <span className="text-[11px] font-bold text-[#35E59A]">
            {stats.totalXp} XP
          </span>
        </div>

        {/* Rules button */}
        <button
          onClick={() => onNavigate('RULES')}
          className={`p-2 rounded-xl transition-colors ${
            currentScreen === 'RULES'
              ? 'bg-[#7C5CFC] text-white'
              : 'bg-white/5 hover:bg-white/10 text-[#9A9AA8] hover:text-white'
          }`}
          title="Правила игры"
        >
          <BookOpen className="w-4 h-4" />
        </button>

        {/* Stats button */}
        <button
          onClick={() => onNavigate('STATS')}
          className={`p-2 rounded-xl transition-colors ${
            currentScreen === 'STATS'
              ? 'bg-[#7C5CFC] text-white'
              : 'bg-white/5 hover:bg-white/10 text-[#9A9AA8] hover:text-white'
          }`}
          title="Моя статистика"
        >
          <BarChart3 className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
