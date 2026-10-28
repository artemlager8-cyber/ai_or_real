import React from 'react';
import { Sparkles, BookOpen, BarChart3, Home, Languages } from 'lucide-react';
import { ScreenState, GameStats, Language } from '../types';
import { getLevelByXp, getLevelTitle } from '../utils/levels';
import { TRANSLATIONS } from '../utils/i18n';

interface HeaderProps {
  currentScreen: ScreenState;
  stats: GameStats;
  currentSessionXp?: number;
  language: Language;
  onLanguageChange?: (lang: Language) => void;
  onToggleLanguage?: (lang: Language) => void;
  onNavigate: (screen: ScreenState) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  stats,
  currentSessionXp = 0,
  language,
  onLanguageChange,
  onToggleLanguage,
  onNavigate,
}) => {
  // Во время игры мгновенно отображаем очки сразу после каждого ответа
  const displayXp = stats.totalXp + (currentScreen === 'PLAYING' ? currentSessionXp : 0);
  const currentLevel = getLevelByXp(displayXp);
  const t = TRANSLATIONS[language];

  const handleLanguageSelect = (lang: Language) => {
    if (onLanguageChange) {
      onLanguageChange(lang);
    } else if (onToggleLanguage) {
      onToggleLanguage(lang);
    }
  };

  return (
    <header className="w-full max-w-md mx-auto px-4 pt-3.5 pb-2 flex items-center justify-between border-b border-white/5">
      {/* Brand logo / home link */}
      <button
        onClick={() => onNavigate('HOME')}
        className="flex items-center gap-2 group text-left focus:outline-none"
        title={t.homeTitle}
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7C5CFC] to-[#4F46E5] flex items-center justify-center shadow-lg shadow-[#7C5CFC]/20 group-hover:scale-105 transition-transform flex-shrink-0">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div className="min-w-0">
          <span className="font-display font-extrabold text-base tracking-tight text-white flex items-center gap-1 leading-tight">
            AI <span className="text-[#7C5CFC] text-xs">or</span> Real?
          </span>
          <span className="text-[10px] text-[#9A9AA8] block tracking-wider uppercase truncate">
            {t.brandTagline}
          </span>
        </div>
      </button>

      {/* Action buttons, language switcher, quick stats */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        {/* Language switch button EN / RU */}
        <div
          className="flex items-center bg-[#171724] border border-white/10 rounded-xl p-0.5"
          role="group"
          aria-label="Language switch"
        >
          <button
            onClick={() => handleLanguageSelect('ru')}
            className={`px-2 py-1 rounded-lg text-xs font-bold transition-all ${
              language === 'ru'
                ? 'bg-[#7C5CFC] text-white shadow-sm'
                : 'text-[#9A9AA8] hover:text-white'
            }`}
            title="Русский язык"
          >
            RU
          </button>
          <button
            onClick={() => handleLanguageSelect('en')}
            className={`px-2 py-1 rounded-lg text-xs font-bold transition-all ${
              language === 'en'
                ? 'bg-[#7C5CFC] text-white shadow-sm'
                : 'text-[#9A9AA8] hover:text-white'
            }`}
            title="English language"
          >
            EN
          </button>
        </div>

        {currentScreen !== 'HOME' && (
          <button
            onClick={() => onNavigate('HOME')}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#9A9AA8] hover:text-white transition-colors"
            title={t.homeTitle}
          >
            <Home className="w-4 h-4" />
          </button>
        )}

        {/* Level badge pill */}
        <div
          onClick={() => onNavigate('STATS')}
          className="cursor-pointer flex items-center gap-1.5 bg-[#171724] border border-white/10 hover:border-[#7C5CFC]/40 px-2 py-1.5 rounded-xl transition-all"
          title={`${t.currentLevelLabel}: ${getLevelTitle(currentLevel, language)}`}
        >
          <span className="text-xs">{currentLevel.badge}</span>
          <span className="text-xs font-semibold text-white/90 hidden xs:inline">
            {t.levelBadge(currentLevel.level)}
          </span>
          <span className="text-[11px] font-bold text-[#35E59A]">
            {displayXp} XP
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
          title={t.rulesTitle}
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
          title={t.statsTitle}
        >
          <BarChart3 className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

