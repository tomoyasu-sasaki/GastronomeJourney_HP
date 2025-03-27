import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AppPreview from '@/components/AppPreview';
import CTA from '@/components/CTA';
import Container from '@/components/ui/container';
import IzakayaGallery from '@/components/IzakayaGallery';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AppPreview />
      
      {/* 居酒屋ギャラリーセクション */}
      <section className="py-16 bg-background-light">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">日本全国の居酒屋を探索</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              美味しい料理、心地よい雰囲気、魅力的なドリンク。あなたの理想の居酒屋体験を見つけましょう。
            </p>
          </div>
          
          <IzakayaGallery 
            initialCategory="all"
            title=""
            maxImages={6}
            columns={3}
            showFilters={false}
          />
          
          <div className="mt-10 text-center">
            <a 
              href="/download" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full font-medium transition-transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              今すぐアプリをダウンロード
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </a>
          </div>
        </Container>
      </section>
      
      <CTA />
    </>
  );
}
