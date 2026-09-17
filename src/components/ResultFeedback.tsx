import React from 'react';
import { Check, X, ArrowRight, Sparkles, Flame, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { AnswerResult } from '../types';

interface ResultFeedbackProps {
  result: AnswerResult;
  isLastQuestion: boolean;
  onNext: () => void;
}

export const ResultFeedback: React.FC<ResultFeedbackProps> = ({
  result,
  isLastQuestion,
  onNext,
}) => {
  const { isCorrect, userAnswer, earnedXp, streak, item } = result;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className="w-full bg-[#151522] border border-white/15 rounded-3xl p-5 shadow-2xl relative overflow-hidden"
    >
      {/* Glow background accent */}
      <div
        className={`absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 rounded-full blur-2xl pointer-events-none opacity-30 ${
          isCorrect ? 'bg-[#35E59A]' : 'bg-[#FF5570]'
        }`}
      />

      {/* Main Status Badge */}
      <div
        className={`w-full py-3.5 px-4 rounded-2xl flex items-center justify-between border ${
          isCorrect
            ? 'bg-[#35E59A]/15 border-[#35E59A]/40 text-[#35E59A]'
            : 'bg-[#FF5570]/15 border-[#FF5570]/40 text-[#FF5570]'
        } mb-4`}
      >
        <div className="flex items-center gap-2.5">
          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center font-black ${
              isCorrect ? 'bg-[#35E59A] text-black' : 'bg-[#FF5570] text-white'
            }`}
          >
            {isCorrect ? <Check className="w-5 h-5 stroke-[3]" /> : <X className="w-5 h-5 stroke-[3]" />}
          </div>
          <span className="font-display font-black text-lg tracking-wider">
            {isCorrect ? '✓ ПРАВИЛЬНО!' : '✕ НЕПРАВИЛЬНО'}
          </span>
        </div>

        {/* XP earned pill */}
        <div className="flex items-center gap-1">
          <span
            className={`font-display font-extrabold text-base ${
              isCorrect ? 'text-[#35E59A]' : 'text-[#9A9AA8]'
            }`}
          >
            {isCorrect ? `+${earnedXp} XP` : '+0 XP'}
          </span>
        </div>
      </div>

      {/* Streak bonus banner if active */}
      {isCorrect && streak > 1 && (
        <div className="flex items-center justify-between bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-xl text-xs text-amber-300 mb-3.5">
          <span className="flex items-center gap-1.5 font-semibold">
            <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Серия {streak} подряд!
          </span>
          <span className="text-[11px] bg-amber-400/20 px-2 py-0.5 rounded-md font-bold">
            Бонус серии
          </span>
        </div>
      )}

      {/* Correct answer indicator */}
      <div className="flex items-center justify-between text-sm py-2 px-3 bg-white/5 rounded-xl mb-3 border border-white/5">
        <span className="text-[#9A9AA8] font-medium">Правильный ответ:</span>
        <span
          className={`font-display font-extrabold text-sm px-2.5 py-1 rounded-lg ${
            item.answer === 'AI'
              ? 'bg-[#7C5CFC]/25 text-[#7C5CFC] border border-[#7C5CFC]/40'
              : 'bg-[#35E59A]/25 text-[#35E59A] border border-[#35E59A]/40'
          }`}
        >
          {item.answer === 'AI' ? '🤖 AI ГЕНЕРАЦИЯ' : '📷 РЕАЛЬНОЕ ФОТО'}
        </span>
      </div>

      {/* Explanation Section */}
      <div className="space-y-2 mb-5">
        <div className="flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-[#7C5CFC]" />
          <span>Почему?</span>
        </div>

        <p className="text-sm text-white/90 leading-relaxed bg-[#11111A] p-3 rounded-xl border border-white/5">
          {item.explanation}
        </p>

        {/* Clues bullets */}
        {item.clues && item.clues.length > 0 && (
          <div className="space-y-1.5 mt-2">
            <span className="text-[11px] font-semibold text-[#9A9AA8] block">
              Признаки для проверки:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {item.clues.map((clue, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-white/5 border border-white/10 text-[#9A9AA8] px-2.5 py-1 rounded-lg"
                >
                  • {clue}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Next Question Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onNext}
        className="w-full py-3.5 px-5 rounded-2xl bg-[#7C5CFC] hover:bg-[#6B46C1] text-white font-display font-bold text-base shadow-lg shadow-[#7C5CFC]/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
      >
        <span>{isLastQuestion ? 'ИТОГИ ИГРЫ' : 'СЛЕДУЮЩЕЕ'}</span>
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
};
