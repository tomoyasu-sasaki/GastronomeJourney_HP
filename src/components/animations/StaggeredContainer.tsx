'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface StaggeredContainerProps {
  children: React.ReactNode;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

export default function StaggeredContainer({
  children,
  delay = 0,
  staggerDelay = 0.1,
  duration = 0.5,
  threshold = 0.1,
  once = true,
  className = '',
}: StaggeredContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration,
        delay,
        when: 'beforeChildren',
        staggerChildren: staggerDelay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        return (
          <motion.div key={child.key} variants={childVariants}>
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
} 