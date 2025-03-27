import React from 'react';

interface PlaceholderProps {
  type?: 'image' | 'text' | 'card';
  width?: string | number;
  height?: string | number;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  className?: string;
  animate?: boolean;
  children?: React.ReactNode;
}

export default function Placeholder({
  type = 'image',
  width = '100%',
  height = '200px',
  rounded = 'md',
  className = '',
  animate = true,
  children,
}: PlaceholderProps) {
  // 角丸のサイズをクラス名にマッピング
  const roundedMap = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  // アニメーションクラスを設定
  const animateClass = animate ? 'animate-pulse' : '';

  // 幅と高さのスタイル
  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  // プレースホルダーのタイプに基づいたクラス名とコンテンツ
  const getPlaceholder = () => {
    switch (type) {
      case 'image':
        return (
          <div
            className={`bg-gray-200 ${roundedMap[rounded]} ${animateClass} flex items-center justify-center ${className}`}
            style={style}
            role="img"
            aria-label="画像の読み込み中"
          >
            {children || (
              <svg
                className="w-12 h-12 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z" />
              </svg>
            )}
          </div>
        );
      case 'text':
        return (
          <div
            className={`space-y-2 ${className}`}
            style={style}
            role="status"
            aria-label="テキストの読み込み中"
          >
            {children || (
              <>
                <div className={`h-2.5 bg-gray-200 ${roundedMap['sm']} ${animateClass} w-full max-w-[360px]`}></div>
                <div className={`h-2 bg-gray-200 ${roundedMap['sm']} ${animateClass} w-full max-w-[300px]`}></div>
                <div className={`h-2 bg-gray-200 ${roundedMap['sm']} ${animateClass} w-full max-w-[330px]`}></div>
                <div className={`h-2 bg-gray-200 ${roundedMap['sm']} ${animateClass} w-full max-w-[280px]`}></div>
              </>
            )}
          </div>
        );
      case 'card':
        return (
          <div
            className={`bg-white shadow-sm border border-gray-200 ${roundedMap[rounded]} p-4 ${className}`}
            style={style}
            role="status"
            aria-label="カードの読み込み中"
          >
            {children || (
              <div className="space-y-4">
                <div className={`h-32 bg-gray-200 ${roundedMap['sm']} ${animateClass}`}></div>
                <div className={`h-3 bg-gray-200 ${roundedMap['sm']} ${animateClass} w-3/4`}></div>
                <div className={`h-2 bg-gray-200 ${roundedMap['sm']} ${animateClass} w-full`}></div>
                <div className={`h-2 bg-gray-200 ${roundedMap['sm']} ${animateClass} w-full`}></div>
                <div className={`h-2 bg-gray-200 ${roundedMap['sm']} ${animateClass} w-2/3`}></div>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return getPlaceholder();
} 