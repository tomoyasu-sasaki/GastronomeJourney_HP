'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Screenshot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
}

const ScreenshotGallery = ({ screenshots }: ScreenshotGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  // キーボード操作のサポート
  const handleKeyDown = (e: React.KeyboardEvent, action: 'prev' | 'next' | number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (action === 'prev') {
        handlePrev();
      } else if (action === 'next') {
        handleNext();
      } else if (typeof action === 'number') {
        handleThumbnailClick(action);
      }
    }
  };

  if (screenshots.length === 0) {
    return (
      <div className="bg-gray-100 rounded-lg p-8 h-[400px] flex items-center justify-center" role="region" aria-label="スクリーンショットギャラリー">
        <div className="text-gray-400 text-center">
          <svg className="w-20 h-20 mx-auto mb-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 4h7V2H4c-1.1 0-2 .9-2 2v7h2V4zm6 9l-4 5h12l-3-4-2.03 2.71L10 13zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5zM20 2h-7v2h7v7h2V4c0-1.1-.9-2-2-2zm0 18h-7v2h7c1.1 0 2-.9 2-2v-7h-2v7zM4 13H2v7c0 1.1.9 2 2 2h7v-2H4v-7z" />
          </svg>
          <p>スクリーンショットは準備中</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light rounded-lg p-4 sm:p-6" role="region" aria-label="アプリスクリーンショットギャラリー">
      {/* メインスクリーンショット */}
      <div 
        className="relative mb-4 bg-white p-4 rounded-lg shadow-sm flex items-center justify-center min-h-[400px]"
        aria-live="polite"
        aria-atomic="true"
      >
        <Image
          src={screenshots[activeIndex].src}
          alt={screenshots[activeIndex].alt}
          width={screenshots[activeIndex].width}
          height={screenshots[activeIndex].height}
          className="max-h-[400px] w-auto object-contain"
        />
        
        {/* 前へボタン */}
        <button 
          onClick={handlePrev}
          onKeyDown={(e) => handleKeyDown(e, 'prev')}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="前のスクリーンショット"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* 次へボタン */}
        <button 
          onClick={handleNext}
          onKeyDown={(e) => handleKeyDown(e, 'next')}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="次のスクリーンショット"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* サムネイル */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2" role="tablist" aria-label="スクリーンショットサムネイル">
        {screenshots.map((screenshot, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`p-1 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              activeIndex === index ? 'bg-primary' : 'bg-white hover:bg-gray-100'
            }`}
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls="main-screenshot"
            aria-label={`${screenshot.alt} サムネイル (${index + 1}/${screenshots.length})`}
          >
            <Image
              src={screenshot.src}
              alt=""
              width={80}
              height={160}
              className="w-full h-auto object-cover rounded"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScreenshotGallery; 