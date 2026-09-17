import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageUrl, title, onClose }) => {
  const [scale, setScale] = useState(1);

  if (!isOpen) return null;

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.5, 1));
  const handleReset = () => setScale(1);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Top bar controls */}
        <div 
          className="w-full max-w-lg flex items-center justify-between py-2 text-white z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="text-sm font-medium text-white/80 truncate pr-2">
            🔍 {title}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              disabled={scale <= 1}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-40 transition-colors"
              title="Уменьшить"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomIn}
              disabled={scale >= 3}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-40 transition-colors"
              title="Увеличить"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            {scale > 1 && (
              <button
                onClick={handleReset}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                title="Сброс масштаба"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors ml-2"
              title="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scalable image container */}
        <div 
          className="relative max-w-full max-h-[80vh] overflow-auto flex items-center justify-center rounded-2xl border border-white/10 bg-[#12121c]"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            src={imageUrl}
            alt={title}
            animate={{ scale }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="max-h-[75vh] w-auto object-contain rounded-xl select-none"
            draggable={false}
          />
        </div>

        <p className="text-xs text-[#9A9AA8] mt-3 text-center">
          Внимательно осмотри пальцы, фон, блики и надписи
        </p>
      </motion.div>
    </AnimatePresence>
  );
};
