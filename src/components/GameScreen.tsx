import React, { useState } from 'react';
import { Sparkles, Maximize2, Flame, Bot, Camera, ImageOff } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GameItem, AnswerType, AnswerResult } from '../types';
import { getStreakBonus } from '../utils/levels';
import { ResultFeedback } from './ResultFeedback';
import { ImageModal } from './ImageModal';

interface GameScreenProps {
  questionIndex: number; // 0-based
  totalQuestions: number;
  currentItem: GameItem;
  currentGameXp: number;
  streak: number;
  onAnswerSubmit: (answer: AnswerType) => AnswerResult;
  onNextQuestion: () => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({
  questionIndex,
  totalQuestions,
  currentItem,
  currentGameXp,
  streak,
  onAnswerSubmit,
  onNextQuestion,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerType | null>(null);
  const [currentResult, setCurrentResult] = useState<AnswerResult | null>(null);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Handle user picking AI or REAL
  const handleSelect = (choice: AnswerType) => {
    if (selectedAnswer !== null) return; // Answer locked!
    setSelectedAnswer(choice);
    const res = onAnswerSubmit(choice);
    setCurrentResult(res);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setCurrentResult(null);
    setImageLoaded(false);
    setImageError(false);
    onNextQuestion();
  };

  const isLastQuestion = questionIndex === totalQuestions - 1;
  const nextBonus = getStreakBonus(streak + 1);

  return (
    <div className="flex-1 flex flex-col justify-between px-4 py-4 max-w-md mx-auto w-full">
      {/* Top Bar: Progress & XP */}
      <div className="w-full mb-3 space-y-2">
        <div className="flex items-center justify-between">
          {/* Question counter */}
          <span className="font-display font-bold text-sm tracking-wide text-white/90">
            Вопрос {questionIndex + 1} <span className="text-[#9A9AA8]">/ {totalQuestions}</span>
          </span>

          {/* Current Game XP & Streak */}
          <div className="flex items-center gap-2">
            {streak > 0 && (
              <span className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded-lg animate-pulse">
                <Flame className="w-3.5 h-3.5 fill-amber-400" />
                {streak}
              </span>
            )}
            <div className="flex items-center gap-1.5 bg-[#171724] border border-white/10 px-3 py-1 rounded-xl">
              <span className="text-amber-400 text-xs">⭐</span>
              <span className="font-display font-bold text-sm text-[#35E59A]">
                {currentGameXp} XP
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#7C5CFC] to-[#35E59A] rounded-full"
            initial={{ width: `${(questionIndex / totalQuestions) * 100}%` }}
            animate={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Center Main Card */}
      <div className="w-full flex-1 flex flex-col justify-center my-1">
        <div className="relative w-full bg-[#151520] border border-white/10 rounded-3xl p-3 shadow-xl overflow-hidden flex flex-col">
          {/* Header over image: Category badge and inspect action */}
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[11px] font-bold text-[#7C5CFC] bg-[#7C5CFC]/15 border border-[#7C5CFC]/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {currentItem.categoryRu}
            </span>

            <button
              onClick={() => setIsZoomOpen(true)}
              className="flex items-center gap-1 text-[11px] text-[#9A9AA8] hover:text-white bg-white/5 hover:bg-white/10 px-2 py-1 rounded-lg transition-colors"
              title="Увеличить изображение"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Приблизить</span>
            </button>
          </div>

          {/* Image Container with aspect ratio */}
          <div
            onClick={() => setIsZoomOpen(true)}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#0D0D14] cursor-pointer group flex items-center justify-center border border-white/5"
          >
            {/* Loading placeholder skeleton */}
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#171725] animate-pulse text-[#9A9AA8]">
                <Sparkles className="w-8 h-8 text-[#7C5CFC] animate-spin mb-2" />
                <span className="text-xs">Загрузка изображения...</span>
              </div>
            )}

            {/* Fallback in case image fails */}
            {imageError ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#171725] p-4 text-center">
                <ImageOff className="w-10 h-10 text-[#FF5570] mb-2" />
                <span className="text-sm font-semibold text-white mb-1">
                  {currentItem.title}
                </span>
                <span className="text-xs text-[#9A9AA8]">
                  Категория: {currentItem.categoryRu}
                </span>
              </div>
            ) : (
              <img
                src={currentItem.image}
                alt={currentItem.title}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover select-none transition-all duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                } group-hover:scale-105`}
                draggable={false}
              />
            )}

            {/* Tap to inspect overlay clue */}
            <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-[10px] text-white/80 flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3 h-3" />
              <span>Нажми для зума</span>
            </div>
          </div>

          {/* Subject title hint */}
          <p className="text-xs text-center text-[#9A9AA8] mt-2.5 px-2 truncate">
            {currentItem.title}
          </p>
        </div>
      </div>

      {/* Answer selection or Result Feedback Section */}
      <div className="w-full mt-2">
        <AnimatePresence mode="wait">
          {!currentResult ? (
            <motion.div
              key="buttons"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3"
            >
              {/* Question label */}
              <div className="text-center">
                <h2 className="font-display font-bold text-lg text-white">
                  Что это?
                </h2>
                <p className="text-xs text-[#9A9AA8]">
                  Серия даёт бонус: следующий ответ принесет +{nextBonus} XP
                </p>
              </div>

              {/* Two Big Buttons: 🤖 AI and 📷 REAL */}
              <div className="grid grid-cols-2 gap-3.5">
                {/* AI Button */}
                <motion.button
                  whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                  whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                  disabled={selectedAnswer !== null}
                  onClick={() => handleSelect('AI')}
                  className={`py-4 px-3 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer border ${
                    selectedAnswer === 'AI'
                      ? 'bg-[#7C5CFC] border-white text-white shadow-lg shadow-[#7C5CFC]/40'
                      : 'bg-[#181528] hover:bg-[#201C35] border-[#7C5CFC]/40 text-white shadow-md'
                  } disabled:cursor-not-allowed`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#7C5CFC]/20 flex items-center justify-center mb-0.5">
                    <Bot className="w-6 h-6 text-[#7C5CFC]" />
                  </div>
                  <span className="font-display font-extrabold text-lg tracking-wider">
                    🤖 AI
                  </span>
                  <span className="text-[11px] text-[#9A9AA8] font-medium">
                    Нейросеть
                  </span>
                </motion.button>

                {/* REAL Button */}
                <motion.button
                  whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                  whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                  disabled={selectedAnswer !== null}
                  onClick={() => handleSelect('REAL')}
                  className={`py-4 px-3 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer border ${
                    selectedAnswer === 'REAL'
                      ? 'bg-[#35E59A] border-white text-black shadow-lg shadow-[#35E59A]/40'
                      : 'bg-[#12221E] hover:bg-[#182C27] border-[#35E59A]/40 text-white shadow-md'
                  } disabled:cursor-not-allowed`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#35E59A]/20 flex items-center justify-center mb-0.5">
                    <Camera className="w-6 h-6 text-[#35E59A]" />
                  </div>
                  <span className="font-display font-extrabold text-lg tracking-wider">
                    📷 REAL
                  </span>
                  <span className="text-[11px] text-[#9A9AA8] font-medium">
                    Настоящее фото
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <ResultFeedback
              key="feedback"
              result={currentResult}
              isLastQuestion={isLastQuestion}
              onNext={handleNext}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Full screen inspect modal */}
      <ImageModal
        isOpen={isZoomOpen}
        imageUrl={currentItem.image}
        title={currentItem.title}
        onClose={() => setIsZoomOpen(false)}
      />
    </div>
  );
};
