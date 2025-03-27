'use client';

import { useState, useEffect } from 'react';
import { izakayaImages, IzakayaImage, getAllTags } from '@/data/izakayaImages';
import ImageGallery from './ui/ImageGallery';

type CategoryFilter = IzakayaImage['category'] | 'all';

interface IzakayaGalleryProps {
  initialCategory?: CategoryFilter;
  title?: string;
  showFilters?: boolean;
  maxImages?: number;
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function IzakayaGallery({
  initialCategory = 'all',
  title = '居酒屋ギャラリー',
  showFilters = true,
  maxImages,
  columns = 3,
  className = '',
}: IzakayaGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>(initialCategory);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredImages, setFilteredImages] = useState<IzakayaImage[]>(izakayaImages);
  const [isLoading, setIsLoading] = useState(true);
  
  const categories: { value: CategoryFilter; label: string }[] = [
    { value: 'all', label: 'すべて' },
    { value: 'interior', label: '内装' },
    { value: 'food', label: '料理' },
    { value: 'drink', label: 'ドリンク' },
    { value: 'atmosphere', label: '雰囲気' },
  ];
  
  const tags = getAllTags();
  
  // カテゴリーが 'all' かどうかをチェックする関数
  const isAllCategory = (category: CategoryFilter): boolean => category === 'all';

  // カテゴリとタグの変更に基づいて画像をフィルタリング
  useEffect(() => {
    setIsLoading(true);
    
    let filtered = [...izakayaImages];
    
    // カテゴリでフィルタリング
    if (!isAllCategory(selectedCategory)) {
      filtered = filtered.filter(image => image.category === selectedCategory);
    }
    
    // タグでフィルタリング
    if (selectedTag) {
      filtered = filtered.filter(image => image.tags.includes(selectedTag));
    }
    
    // 最大画像数に制限
    if (maxImages && filtered.length > maxImages) {
      filtered = filtered.slice(0, maxImages);
    }
    
    // 読み込み中の状態を模擬（実際のAPIであれば不要）
    setTimeout(() => {
      setFilteredImages(filtered);
      setIsLoading(false);
    }, 500);
  }, [selectedCategory, selectedTag, maxImages]);
  
  const handleCategoryChange = (category: CategoryFilter) => {
    setSelectedCategory(category);
    setSelectedTag(null); // カテゴリ変更時にタグ選択をリセット
  };
  
  const handleTagClick = (tag: string) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };
  
  return (
    <div className={`space-y-6 ${className}`}>
      {title && <h2 className="text-2xl font-bold">{title}</h2>}
      
      {showFilters && (
        <div className="space-y-4">
          {/* カテゴリフィルター */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => handleCategoryChange(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                aria-pressed={selectedCategory === category.value}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* タグフィルター */}
          {!isAllCategory(selectedCategory) && (
            <div className="flex flex-wrap gap-2">
              {tags
                .filter(tag => {
                  // 選択されたカテゴリに関連するタグのみを表示
                  if (isAllCategory(selectedCategory)) return true;
                  return izakayaImages
                    .filter(img => img.category === selectedCategory)
                    .some(img => img.tags.includes(tag));
                })
                .map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`px-3 py-1 rounded-full text-xs border transition-colors ${
                      selectedTag === tag
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-gray-300 hover:border-gray-400 text-gray-600'
                    }`}
                    aria-pressed={selectedTag === tag}
                  >
                    #{tag}
                  </button>
                ))}
            </div>
          )}
        </div>
      )}
      
      {/* ギャラリー */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-gray-200 rounded-md h-60 animate-pulse"></div>
          ))}
        </div>
      ) : filteredImages.length > 0 ? (
        <ImageGallery
          images={filteredImages.map(img => ({
            src: img.src,
            alt: img.alt,
            width: img.width,
            height: img.height,
          }))}
          columns={columns}
          rounded="md"
          hover="zoom"
        />
      ) : (
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-gray-500">該当する画像がありません</p>
        </div>
      )}
    </div>
  );
} 