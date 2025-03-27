import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  fallbackSrc?: string;
  lowQualityPreview?: boolean;
  aspectRatio?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  fallbackSrc = '/images/placeholder.jpg',
  lowQualityPreview = false,
  quality = 85,
  priority = false,
  aspectRatio,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  const imgSrc = error ? fallbackSrc : src;
  const blurClassName = !isLoaded && lowQualityPreview ? 'blur-sm' : 'blur-0';
  const aspectRatioStyle = aspectRatio ? { aspectRatio } : {};

  return (
    <div
      className={`overflow-hidden relative ${className}`}
      style={aspectRatioStyle}
    >
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        className={`transition-all duration-300 ${blurClassName} ${
          isLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-90'
        }`}
        onLoadingComplete={handleLoad}
        onError={handleError}
        {...props}
      />
      {!isLoaded && lowQualityPreview && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
} 