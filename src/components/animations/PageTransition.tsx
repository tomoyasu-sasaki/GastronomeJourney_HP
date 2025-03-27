'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type TransitionType = 'fade' | 'slide' | 'scale' | 'none';

interface PageTransitionProps {
  children: ReactNode;
  type?: TransitionType;
  duration?: number;
}

export default function PageTransition({
  children,
  type = 'fade',
  duration = 0.35,
}: PageTransitionProps) {
  const pathname = usePathname();

  // 遷移タイプに応じたバリアントを定義
  const getVariants = () => {
    switch (type) {
      case 'fade':
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        };
      case 'slide':
        return {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -20 },
        };
      case 'scale':
        return {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 1.05 },
        };
      case 'none':
      default:
        return {
          initial: {},
          animate: {},
          exit: {},
        };
    }
  };

  const variants = getVariants();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ 
          duration,
          ease: [0.22, 1, 0.36, 1], // カスタムイージング（イーズアウト・キュービック）
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 