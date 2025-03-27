'use client';

import AnimatedElement from './animations/AnimatedElement';
import StaggeredContainer from './animations/StaggeredContainer';
import AnimatedButton from './ui/AnimatedButton';

const Hero = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-background via-background-light to-background relative overflow-hidden">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        {/* テキストコンテンツ */}
        <StaggeredContainer className="z-10" staggerDelay={0.15}>
          <AnimatedElement type="slideRight" duration={0.6} delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              あなたの<span className="text-primary">居酒屋体験</span>を<br />記録・共有するアプリ
            </h1>
          </AnimatedElement>
          
          <AnimatedElement type="slideRight" duration={0.6} delay={0.3}>
            <p className="text-lg mb-8 text-text max-w-lg">
              GastronomeJourneyで、お気に入りの居酒屋を記録し、友達と共有しましょう。あなただけの居酒屋マップを作りましょう。
            </p>
          </AnimatedElement>
          
          <div className="flex flex-wrap gap-4">
            <AnimatedButton 
              href="/download" 
              size="lg"
              variant="primary"
              icon={
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                  />
                </svg>
              }
            >
              アプリをダウンロード
            </AnimatedButton>
            
            <AnimatedButton 
              href="/features" 
              size="lg"
              variant="outline"
              icon={
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              }
            >
              機能を見る
            </AnimatedButton>
          </div>
        </StaggeredContainer>

        {/* イメージ領域 */}
        <AnimatedElement type="zoomIn" duration={0.8} delay={0.5} className="relative h-[400px] sm:h-[500px] flex justify-center items-center">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[80%] h-[80%] rounded-3xl bg-primary/10 animate-pulse" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[300px] h-[500px] p-4">
            {/* ここでアプリのモックアップ画像を表示します */}
            <div className="w-full h-full bg-white rounded-3xl shadow-xl border-8 border-black overflow-hidden">
              <div className="w-full h-6 bg-black rounded-t-xl mb-2"></div>
              <div className="p-2 h-full flex flex-col gap-2">
                <div className="w-full h-40 bg-primary/20 rounded-lg"></div>
                <div className="w-3/4 h-8 bg-gray-200 rounded-lg"></div>
                <div className="w-full h-6 bg-gray-200 rounded-lg"></div>
                <div className="w-full h-6 bg-gray-200 rounded-lg"></div>
                <div className="flex gap-2 mt-auto">
                  <div className="w-1/3 h-10 bg-primary/40 rounded-lg"></div>
                  <div className="w-1/3 h-10 bg-secondary/40 rounded-lg"></div>
                  <div className="w-1/3 h-10 bg-accent/40 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>

      {/* 装飾的な背景要素 */}
      <AnimatedElement 
        type="slideLeft" 
        duration={1.2} 
        delay={0.2} 
        className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right"
      >
        <div />
      </AnimatedElement>
    </section>
  );
};

export default Hero; 