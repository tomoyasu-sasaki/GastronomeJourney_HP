// 居酒屋イメージギャラリー用の画像データ

export interface IzakayaImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: 'interior' | 'food' | 'drink' | 'atmosphere';
  tags: string[];
}

// Unsplashから提供される高品質な画像のデータ
export const izakayaImages: IzakayaImage[] = [
  // 内装・雰囲気 カテゴリの画像
  {
    id: 'interior-1',
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
    alt: '伝統的な日本の居酒屋の内装',
    width: 1200,
    height: 800,
    category: 'interior',
    tags: ['伝統的', '木造', '提灯', '夜']
  },
  {
    id: 'interior-2',
    src: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760',
    alt: 'モダンな居酒屋のカウンター席',
    width: 1200,
    height: 800,
    category: 'interior',
    tags: ['モダン', 'カウンター', 'バー', '照明']
  },
  {
    id: 'interior-3',
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
    alt: '活気ある居酒屋の店内風景',
    width: 1200,
    height: 800,
    category: 'interior',
    tags: ['賑やか', '大衆', '活気', 'レトロ']
  },
  
  // 料理カテゴリの画像
  {
    id: 'food-1',
    src: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    alt: '新鮮な刺身の盛り合わせ',
    width: 1200,
    height: 800,
    category: 'food',
    tags: ['刺身', '海鮮', '和食', '盛り合わせ']
  },
  
  // ドリンクカテゴリの画像
  {
    id: 'drink-1',
    src: 'https://images.unsplash.com/photo-1514361892635-6b07e31e75f9',
    alt: '日本酒の冷酒と徳利',
    width: 1200,
    height: 800,
    category: 'drink',
    tags: ['日本酒', '冷酒', '徳利', '盃']
  },
  {
    id: 'drink-2',
    src: 'https://images.unsplash.com/photo-1584225064785-c62a8b43d148',
    alt: 'ビールジョッキで乾杯',
    width: 1200,
    height: 800,
    category: 'drink',
    tags: ['ビール', '生ビール', '乾杯', 'ジョッキ']
  },
  {
    id: 'drink-3',
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187',
    alt: '日本のウイスキーとロックグラス',
    width: 1200,
    height: 800,
    category: 'drink',
    tags: ['ウイスキー', 'バーボン', 'ロック', 'バー']
  },
  
  // 雰囲気カテゴリの画像
  {
    id: 'atmosphere-1',
    src: 'https://images.unsplash.com/photo-1569096651661-820d0de8b4ab',
    alt: '提灯が灯る路地裏の居酒屋街',
    width: 1200,
    height: 800,
    category: 'atmosphere',
    tags: ['提灯', '夜', '路地裏', '街並み']
  },
  {
    id: 'atmosphere-2',
    src: 'https://images.unsplash.com/photo-1515668236457-83c3b8764839',
    alt: '友人同士の楽しい居酒屋での時間',
    width: 1200,
    height: 800,
    category: 'atmosphere',
    tags: ['友人', '乾杯', '会話', '笑顔']
  },
  {
    id: 'atmosphere-3',
    src: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c',
    alt: '仕事帰りのサラリーマンで賑わう店内',
    width: 1200,
    height: 800,
    category: 'atmosphere',
    tags: ['サラリーマン', '仕事帰り', '賑わい', '夜']
  }
];

// カテゴリ別に画像を取得するユーティリティ関数
export const getImagesByCategory = (category: IzakayaImage['category']): IzakayaImage[] => {
  return izakayaImages.filter(image => image.category === category);
};

// タグで画像を検索するユーティリティ関数
export const getImagesByTag = (tag: string): IzakayaImage[] => {
  return izakayaImages.filter(image => image.tags.includes(tag));
};

// すべての利用可能なタグのリストを取得するユーティリティ関数
export const getAllTags = (): string[] => {
  const tagsSet = new Set<string>();
  
  izakayaImages.forEach(image => {
    image.tags.forEach(tag => tagsSet.add(tag));
  });
  
  return Array.from(tagsSet);
}; 