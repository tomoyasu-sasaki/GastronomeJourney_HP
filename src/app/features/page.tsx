import Features from '@/components/Features';
import CTA from '@/components/CTA';

export default function FeaturesPage() {
  return (
    <div className="py-12 bg-background-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">GastronomeJourneyの機能</h1>
          <p className="text-lg max-w-3xl mx-auto">
            GastronomeJourneyは、あなたの居酒屋体験を記録し、共有するための機能が満載です。
            ここでは主な機能について詳しくご紹介します。
          </p>
        </div>
      </div>
      
      <Features />
      
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">居酒屋情報の記録・管理</h2>
              <p className="text-lg mb-4">
                GastronomeJourneyでは、訪れた居酒屋の情報を詳細に記録できます。
                店名、場所、価格帯はもちろん、注文した料理の写真や感想も残せます。
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span>料理の写真と説明を記録</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span>価格帯や評価を5段階で保存</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span>お店の雰囲気や特徴をタグで管理</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 h-[400px] flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <svg className="w-20 h-20 mx-auto mb-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h7V2H4c-1.1 0-2 .9-2 2v7h2V4zm6 9l-4 5h12l-3-4-2.03 2.71L10 13zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5zM20 2h-7v2h7v7h2V4c0-1.1-.9-2-2-2zm0 18h-7v2h7c1.1 0 2-.9 2-2v-7h-2v7zM4 13H2v7c0 1.1.9 2 2 2h7v-2H4v-7z" />
                </svg>
                <p>スクリーンショット</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-background-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-100 rounded-lg p-8 h-[400px] flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <svg className="w-20 h-20 mx-auto mb-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                </svg>
                <p>スクリーンショット</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">公開/非公開設定</h2>
              <p className="text-lg mb-4">
                記録した居酒屋情報を公開するか非公開にするか選べます。友達だけに共有したり、完全に非公開にしたりすることも可能です。
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span>全体公開、友達のみ、非公開から選択可能</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span>特定の友達だけに共有することも可能</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span>投稿ごとに公開範囲を設定できる</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <CTA />
    </div>
  );
} 