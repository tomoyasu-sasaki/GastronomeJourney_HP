'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScrollToTopButtonProps {
  threshold?: number; // スクロール表示のしきい値（px）
  color?: 'primary' | 'secondary' | 'light';
  size?: 'sm' | 'md' | 'lg';
  position?: 'right' | 'left';
  bottom?: number;
}

export default function ScrollToTopButton({
  threshold = 200,
  color = 'primary',
  size = 'md',
  position = 'right',
  bottom = 30,
}: ScrollToTopButtonProps) {
  const [show, setShow] = useState(false);

  // 色の設定
  const colorClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    light: 'bg-white text-primary hover:bg-gray-100 border border-gray-200',
  };

  // サイズの設定
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  // ポジションの設定
  const positionClasses = {
    right: 'right-6',
    left: 'left-6',
  };

  useEffect(() => {
    const checkScroll = () => {
      if (!show && window.scrollY > threshold) {
        setShow(true);
      } else if (show && window.scrollY <= threshold) {
        setShow(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [show, threshold]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          className={`fixed ${positionClasses[position]} rounded-full shadow-md flex items-center justify-center z-50 ${colorClasses[color]} ${sizeClasses[size]}`}
          style={{ bottom: `${bottom}px` }}
          onClick={handleScrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="ページのトップへスクロール"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
} 