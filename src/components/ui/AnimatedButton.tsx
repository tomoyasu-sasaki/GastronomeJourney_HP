'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export default function AnimatedButton({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  type = 'button',
  ariaLabel,
}: AnimatedButtonProps) {
  // サイズごとのクラスを定義
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 rounded-md',
    md: 'text-sm px-4 py-2 rounded-lg',
    lg: 'text-base px-6 py-3 rounded-xl',
  };

  // バリアントごとのクラスを定義
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90 shadow-sm',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-sm',
    outline: 'bg-transparent border border-primary text-primary hover:bg-primary/10',
    ghost: 'bg-transparent text-primary hover:bg-primary/10',
  };

  // 全体のクラス名を構築
  const buttonClasses = `
    font-medium transition-all inline-flex items-center justify-center
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  // タップ/クリックアニメーションの設定
  const tapAnimation = {
    scale: disabled ? 1 : 0.97,
  };

  // マウスホバーアニメーションの設定
  const hoverAnimation = {
    scale: disabled ? 1 : 1.03,
    transition: { duration: 0.2 },
  };

  // アイコンの配置を設定
  const iconElement = icon && (
    <span className={`inline-flex ${iconPosition === 'left' ? 'mr-2' : 'ml-2'}`}>
      {icon}
    </span>
  );

  // ボタンかリンクかを判断
  if (href) {
    return (
      <motion.div
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
        className="inline-block"
      >
        <Link
          href={href}
          className={buttonClasses}
          aria-disabled={disabled}
          aria-label={ariaLabel}
        >
          {iconPosition === 'left' && iconElement}
          {children}
          {iconPosition === 'right' && iconElement}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
      className={buttonClasses}
      aria-label={ariaLabel}
    >
      {iconPosition === 'left' && iconElement}
      {children}
      {iconPosition === 'right' && iconElement}
    </motion.button>
  );
} 