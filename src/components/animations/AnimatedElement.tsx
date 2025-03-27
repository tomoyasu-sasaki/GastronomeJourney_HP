'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

type AnimationType = 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'zoomIn' | 'bounce' | 'none';

interface AnimatedElementProps {
  children: React.ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  as?: React.ElementType;
}

export default function AnimatedElement({
  children,
  type = 'fadeIn',
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true,
  className = '',
  as: Component = 'div',
}: AnimatedElementProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  // アニメーションの種類に応じたバリエーションを定義
  const getVariants = (): Variants => {
    const baseTransition = {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1.0], // カスタムイージング（イーズアウト・キュービック）
    };

    switch (type) {
      case 'fadeIn':
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: baseTransition,
          },
        };

      case 'slideUp':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: baseTransition,
          },
        };

      case 'slideDown':
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: baseTransition,
          },
        };

      case 'slideLeft':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: baseTransition,
          },
        };

      case 'slideRight':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: baseTransition,
          },
        };

      case 'zoomIn':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: baseTransition,
          },
        };

      case 'bounce':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              ...baseTransition,
              type: "spring",
              stiffness: 300,
              damping: 10
            },
          },
        };

      case 'none':
      default:
        return {
          hidden: {},
          visible: {},
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {Component === 'div' ? children : <Component>{children}</Component>}
    </motion.div>
  );
} 