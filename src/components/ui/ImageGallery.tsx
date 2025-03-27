import { useRef, useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ImageGalleryProps {
  images: Image[];
  title?: string;
  columns?: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  hover?: 'zoom' | 'fade' | 'none';
  aspectRatio?: string;
  className?: string;
}

export default function ImageGallery({
  images,
  title,
  columns = 3,
  gap = 'md',
  rounded = 'md',
  hover = 'zoom',
  aspectRatio = '16/9',
  className = '',
}: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // ギャップのサイズをクラス名にマッピング
  const gapMap = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  };

  // カラム数をクラス名にマッピング
  const columnMap = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  // 角丸のサイズをクラス名にマッピング
  const roundedMap = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  // ホバーエフェクトをクラス名にマッピング
  const getHoverClass = (index: number) => {
    const isActive = activeIndex === index;
    
    switch (hover) {
      case 'zoom':
        return isActive ? 'scale-105' : 'hover:scale-105';
      case 'fade':
        return isActive ? 'opacity-80' : 'hover:opacity-80';
      default:
        return '';
    }
  };

  // 画像をクリックした時の処理
  const handleImageClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  if (images.length === 0) {
    return (
      <div className="bg-background-light p-6 rounded-lg text-center">
        <p className="text-foreground/70">画像がありません</p>
      </div>
    );
  }

  return (
    <div 
      className={`w-full ${className}`}
      ref={galleryRef}
      aria-label={title || '画像ギャラリー'}
      role="region"
    >
      {title && (
        <h3 className="text-lg font-medium mb-4">{title}</h3>
      )}
      
      <div className={`grid ${columnMap[columns]} ${gapMap[gap]}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden"
            onClick={() => handleImageClick(index)}
            tabIndex={0}
            role="button"
            aria-label={`画像 ${index + 1}: ${image.alt}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleImageClick(index);
              }
            }}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={`w-full h-auto transition-transform duration-300 ease-in-out ${roundedMap[rounded]} ${getHoverClass(index)}`}
              aspectRatio={aspectRatio}
              lowQualityPreview={true}
            />
            <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 ${roundedMap[rounded]}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
} 