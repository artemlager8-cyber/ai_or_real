import React from 'react';
import { ArrowLeft, BookOpen, AlertTriangle, Sparkles, Eye } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../utils/i18n';

interface RulesModalProps {
  language: Language;
  onBack: () => void;
  onStartGame: () => void;
}

export const RulesModal: React.FC<RulesModalProps> = ({ language, onBack, onStartGame }) => {
  const t = TRANSLATIONS[language];

  return (
    <div className="flex-1 flex flex-col justify-between px-4 py-4 max-w-md mx-auto w-full">
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-semibold text-[#9A9AA8] hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.backBtn}</span>
        </button>

        <h1 className="font-display font-black text-lg text-white">
          {t.howToPlayTitle}
        </h1>

        <div className="w-12" />
      </div>

      {/* Main Scrollable Instructions */}
      <div className="w-full flex-1 overflow-y-auto space-y-4 pr-1">
        {/* Important Disclaimer Notice (required by prompt) */}
        <div className="bg-[#FF5570]/10 border border-[#FF5570]/30 rounded-2xl p-3.5 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#FF5570] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-white/90 leading-relaxed">
            <strong className="text-[#FF5570] block font-bold mb-0.5">
              {t.warningTitle}:
            </strong>
            {t.warningDesc}
          </div>
        </div>

        {/* 6 Step Gameplay Guide */}
        <div className="bg-[#151520] border border-white/10 rounded-2xl p-4">
          <h2 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-[#7C5CFC]" />
            <span>{t.gameRulesTitle}</span>
          </h2>

          <div className="space-y-2.5">
            {t.ruleSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs">
                <span className="w-5 h-5 rounded-full bg-[#7C5CFC]/20 text-[#7C5CFC] font-bold flex items-center justify-center flex-shrink-0 text-[11px] mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-white/80 leading-snug">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scoring & Streak Table */}
        <div className="bg-[#151520] border border-white/10 rounded-2xl p-4">
          <h2 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{t.scoringTitle}</span>
          </h2>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-white/5 rounded-xl p-2.5">
              <span className="text-[#9A9AA8] block text-[11px]">{t.streak1}:</span>
              <span className="font-bold text-[#35E59A]">+100 XP</span>
            </div>
            <div className="bg-white/5 rounded-xl p-2.5">
              <span className="text-[#9A9AA8] block text-[11px]">{t.streak2}:</span>
              <span className="font-bold text-[#35E59A]">+120 XP</span>
            </div>
            <div className="bg-white/5 rounded-xl p-2.5">
              <span className="text-[#9A9AA8] block text-[11px]">{t.streak3}:</span>
              <span className="font-bold text-amber-300">+150 XP</span>
            </div>
            <div className="bg-white/5 rounded-xl p-2.5">
              <span className="text-[#9A9AA8] block text-[11px]">{t.streak4}:</span>
              <span className="font-bold text-orange-400">+200 XP 🔥</span>
            </div>
          </div>
          <p className="text-[11px] text-[#9A9AA8] mt-2">
            {t.streakResetDesc}
          </p>
        </div>

        {/* Detective Clues Checklist */}
        <div className="bg-[#151520] border border-white/10 rounded-2xl p-4">
          <h2 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Eye className="w-4 h-4 text-[#35E59A]" />
            <span>{t.cluesCheatSheetTitle}</span>
          </h2>

          <div className="space-y-3">
            {t.cheatSheetClues.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#9A9AA8] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Play Button */}
      <div className="pt-3">
        <button
          onClick={onStartGame}
          className="w-full py-3.5 rounded-2xl bg-[#7C5CFC] hover:bg-[#6B46C1] text-sm font-display font-bold text-white transition-all shadow-lg shadow-[#7C5CFC]/30 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>{t.gotItStartGameBtn}</span>
        </button>
      </div>
    </div>
  );
};

