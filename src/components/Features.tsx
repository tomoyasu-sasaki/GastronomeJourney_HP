'use client';

import AnimatedElement from './animations/AnimatedElement';
import StaggeredContainer from './animations/StaggeredContainer';

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" />
        </svg>
      ),
      title: '居酒屋情報の記録',
      description: 'お気に入りの居酒屋情報をアプリに保存できます。料理の写真や価格、評価などを詳細に記録できます。',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 22C6.49 22 2 17.51 2 12C2 6.49 6.49 2 12 2C17.51 2 22 6.04 22 11C22 14.31 19.31 17 16 17H14.23C13.32 17 12.23 17.73 12.23 19.5C12.23 20.34 12 21.06 11.56 21.56C11.22 21.81 11 22 10.78 22H12ZM15 11C15.55 11 16 10.55 16 10C16 9.45 15.55 9 15 9C14.45 9 14 9.45 14 10C14 10.55 14.45 11 15 11ZM9 11C9.55 11 10 10.55 10 10C10 9.45 9.55 9 9 9C8.45 9 8 9.45 8 10C8 10.55 8.45 11 9 11ZM12 14C13.68 14 15.04 12.9 15.21 11.5C13.29 11.27 10.7 11.28 8.79 11.5C8.97 12.91 10.32 14 12 14Z" />
        </svg>
      ),
      title: '公開/非公開設定',
      description: '記録した居酒屋情報を公開するか非公開にするか選べます。友達だけに共有することも可能です。',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" />
        </svg>
      ),
      title: '気になるリスト',
      description: '行ってみたい居酒屋を「気になるリスト」に追加して管理できます。リストに基づいて検索や並べ替えも可能です。',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.5L20.5 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" />
        </svg>
      ),
      title: '検索・フィルタリング',
      description: 'エリアや料理ジャンル、予算など様々な条件で居酒屋を検索できます。あなた好みのお店を素早く見つけられます。',
    },
  ];

  return (
    <section className="py-16 bg-background-light">
      <div className="container-custom">
        <AnimatedElement type="fadeIn" duration={0.8} delay={0.1} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">主な機能</h2>
          <p className="text-lg text-text max-w-3xl mx-auto">
            GastronomeJourneyを使えば、あなたの居酒屋体験を簡単に記録し、友達と共有できます。
            主な機能をご紹介します。
          </p>
        </AnimatedElement>

        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 hover:translate-y-[-5px] hover:bg-primary/5 transition-all"
            >
              <div className="mb-4">
                <AnimatedElement type="zoomIn" duration={0.5} delay={0.1}>
                  {feature.icon}
                </AnimatedElement>
              </div>
              <AnimatedElement type="slideUp" duration={0.5} delay={0.2}>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              </AnimatedElement>
              <AnimatedElement type="slideUp" duration={0.5} delay={0.3}>
                <p className="text-text">{feature.description}</p>
              </AnimatedElement>
            </div>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
};

export default Features; 