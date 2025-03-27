import { Metadata } from 'next';
import Container from '@/components/ui/container';
import IzakayaGallery from '@/components/IzakayaGallery';

export const metadata: Metadata = {
  title: '居酒屋ギャラリー | ガストロノームジャーニー',
  description: '日本全国の魅力的な居酒屋の写真ギャラリー。内装、料理、ドリンク、雰囲気など、様々な観点から居酒屋の魅力を写真でご紹介します。',
};

export default function GalleryPage() {
  return (
    <main className="py-16">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">居酒屋フォトギャラリー</h1>
          <p className="text-lg text-foreground/70">
            日本全国の魅力的な居酒屋の写真をお楽しみください。カテゴリやタグでフィルタリングして、あなたの好みの居酒屋を探索しましょう。
          </p>
        </div>
        
        <IzakayaGallery
          initialCategory="all"
          title=""
          showFilters={true}
          columns={3}
        />
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">あなただけの居酒屋体験を始めましょう</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            ガストロノームジャーニーアプリを使えば、これらの素晴らしい居酒屋をすぐに見つけることができます。
            レビューを読んだり、お気に入りに保存したり、あなたの思い出を記録しましょう。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/download" 
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              アプリをダウンロード
            </a>
            <a 
              href="/features" 
              className="px-6 py-3 bg-white border border-gray-300 text-foreground rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              アプリの機能を見る
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
} 