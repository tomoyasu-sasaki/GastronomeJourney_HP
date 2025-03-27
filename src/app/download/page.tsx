import { Metadata } from 'next';
import Image from 'next/image';
import DownloadButton from '@/components/DownloadButton';
import FeatureCard from '@/components/FeatureCard';
import ScreenshotGallery from '@/components/ScreenshotGallery';
import Container from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'アプリをダウンロード | ガストロノームジャーニー',
  description: '料理愛好家のためのグルメアプリ、ガストロノームジャーニーをダウンロードして美味しい冒険を始めましょう。',
};

// 実際のスクリーンショットデータ
const screenshots = [
  {
    src: '/images/search_page.png',
    alt: '検索画面',
    width: 375,
    height: 812,
  },
  {
    src: '/images/search_filter_daialog.png',
    alt: '検索フィルター画面',
    width: 375,
    height: 812,
  },
  {
    src: '/images/izakay_detail_page.png',
    alt: '居酒屋詳細画面',
    width: 375,
    height: 812,
  },
  {
    src: '/images/book_mark_page.png',
    alt: 'ブックマーク画面',
    width: 375,
    height: 812,
  },
  {
    src: '/images/profile_page.png',
    alt: 'プロフィール画面',
    width: 375,
    height: 812,
  },
];

// アプリの機能データ
const features = [
  {
    title: 'レストラン検索',
    description: '場所、料理タイプ、価格帯などの条件で簡単にレストランを検索できます。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: 'bg-blue-100/50 text-blue-700',
  },
  {
    title: 'リアルタイムレビュー',
    description: 'ユーザーからのリアルタイムなレビューと評価を確認できます。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    color: 'bg-yellow-100/50 text-yellow-700',
  },
  {
    title: '美しい写真ギャラリー',
    description: 'レストランやメニューの高品質な写真で、実際の雰囲気を事前にチェックできます。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'bg-green-100/50 text-green-700',
  },
  {
    title: 'お気に入り機能',
    description: '好きなレストランを保存して、後で簡単にアクセスできます。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: 'bg-red-100/50 text-red-700',
  },
  {
    title: '地図表示',
    description: 'レストランの位置を地図上で確認し、簡単に目的地までナビゲーションできます。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    color: 'bg-indigo-100/50 text-indigo-700',
  },
  {
    title: '予約管理',
    description: 'アプリ内で簡単に予約を行い、予約履歴を管理できます。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'bg-purple-100/50 text-purple-700',
  },
];

export default function DownloadPage() {
  return (
    <main className="pt-16 pb-20">
      <section className="py-16 bg-gradient-to-r from-primary/10 to-background-light overflow-hidden relative">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative z-10 bg-white/80 md:bg-transparent p-6 md:p-0 rounded-lg md:rounded-none">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                ガストロノームジャーニーで<br />
                美味しい冒険を始めよう
              </h1>
              <p className="text-lg mb-8 text-foreground/80">
                地元のグルメスポットを発見し、お気に入りの料理を共有し、美食家コミュニティに参加しましょう。あなたの次のおいしい発見が待っています。
              </p>
              <div className="flex flex-wrap gap-4">
                <DownloadButton platform="ios" />
                <DownloadButton platform="android" />
              </div>
            </div>
            
            {/* モバイル表示用のスマホ画像 */}
            <div className="block md:hidden mt-8 relative h-[400px]">
              <div className="absolute left-1/2 -translate-x-1/2 w-[280px] h-[580px] border-8 border-white rounded-[40px] shadow-xl overflow-hidden">
                <Image
                  src="/images/search_page.png"
                  alt="ガストロノームジャーニー検索画面"
                  width={375}
                  height={812}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* デスクトップ表示用のスマホ画像 */}
            <div className="hidden md:block relative h-[600px]">
              <div className="absolute -rotate-6 -left-5 top-5 w-[280px] h-[580px] border-8 border-white rounded-[40px] shadow-xl overflow-hidden z-0">
                <Image
                  src="/images/search_page.png"
                  alt="ガストロノームジャーニー検索画面"
                  width={375}
                  height={812}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute rotate-6 left-40 top-10 w-[280px] h-[580px] border-8 border-white rounded-[40px] shadow-xl overflow-hidden z-0">
                <Image
                  src="/images/izakay_detail_page.png"
                  alt="ガストロノームジャーニー居酒屋詳細画面"
                  width={375}
                  height={812}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-2">アプリの機能</h2>
          <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
            ガストロノームジャーニーアプリには、グルメ体験を向上させるための様々な機能が揃っています
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                color={feature.color}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-background-light">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-2">アプリスクリーンショット</h2>
          <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
            シンプルで使いやすいインターフェースで、簡単に美味しい体験を探しましょう
          </p>
          <ScreenshotGallery screenshots={screenshots} />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">今すぐダウンロード</h2>
            <p className="text-lg mb-8 text-foreground/80">
              美味しい冒険はあなたを待っています。今すぐダウンロードして、グルメ体験を始めましょう。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <DownloadButton platform="ios" />
              <DownloadButton platform="android" />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
} 