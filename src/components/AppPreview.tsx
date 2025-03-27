'use client';

import { useState } from 'react';

const AppPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const screens = [
    {
      title: 'お気に入りの居酒屋を記録',
      description: '訪れた居酒屋の情報を写真付きで記録できます。',
      color: 'bg-primary/10',
    },
    {
      title: '詳細な情報を管理',
      description: 'メニュー、価格、場所など詳細情報を管理できます。',
      color: 'bg-secondary/10',
    },
    {
      title: '友達と共有',
      description: 'お気に入りの居酒屋を友達と共有できます。',
      color: 'bg-accent/10',
    },
    {
      title: '気になるリストを作成',
      description: '行きたい居酒屋をリストアップしておけます。',
      color: 'bg-primary/10',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">アプリの使い方</h2>
          <p className="text-lg text-text max-w-2xl mx-auto">
            シンプルで使いやすいインターフェースで、あなたの居酒屋体験を記録・管理できます。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* スマホフレーム */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-[280px] h-[580px]">
              <div className="absolute inset-0 bg-black rounded-[40px] p-3">
                <div className="h-full w-full bg-white rounded-[32px] overflow-hidden relative">
                  {/* スクリーン */}
                  <div className="h-full w-full flex flex-col">
                    {/* ステータスバー */}
                    <div className="h-8 bg-gray-100 flex justify-between items-center px-4">
                      <div className="text-xs">9:41</div>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 rounded-full bg-primary/70"></div>
                        <div className="w-4 h-4 rounded-full bg-primary/70"></div>
                        <div className="w-4 h-4 rounded-full bg-primary/70"></div>
                      </div>
                    </div>
                    
                    {/* コンテンツエリア */}
                    <div className="flex-grow p-4 flex flex-col">
                      <div className={`flex-grow rounded-xl p-4 ${screens[activeIndex].color} transition-colors duration-500`}>
                        <div className="text-xl font-bold mb-2 text-text-dark">{screens[activeIndex].title}</div>
                        <div className="h-[280px] bg-white rounded-lg mb-4 flex items-center justify-center text-gray-300">
                          スクリーンショット
                        </div>
                        <p className="text-sm text-text">{screens[activeIndex].description}</p>
                      </div>
                    </div>
                    
                    {/* ナビゲーションバー */}
                    <div className="h-16 bg-white border-t border-gray-200 flex justify-around items-center px-4">
                      {[0, 1, 2, 3].map(index => (
                        <button
                          key={index}
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${activeIndex === index ? 'bg-primary text-white' : 'bg-gray-100'}`}
                          onClick={() => setActiveIndex(index)}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* スクリーン説明 */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-8">
              {screens.map((screen, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-white shadow-md border-l-4 border-primary'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <h3 className="text-xl font-bold mb-2">{screen.title}</h3>
                  <p className="text-text">{screen.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview; 