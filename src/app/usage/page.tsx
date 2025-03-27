import AppPreview from '@/components/AppPreview';
import CTA from '@/components/CTA';

export default function UsagePage() {
  const steps = [
    {
      id: 1,
      title: 'アプリをダウンロード',
      description: 'App StoreまたはGoogle Playからアプリをダウンロードして、アカウントを作成します。',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 15h7v2H7v-2zm0-4h10v2H7v-2zm0-4h10v2H7V7zm12-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 0 0-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.03.26.04.4.04h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: '居酒屋情報を記録',
      description: '訪れた居酒屋の情報を写真付きで記録します。店名、場所、価格帯、感想などを入力します。',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: '共有設定を選択',
      description: '記録した情報を公開するか非公開にするか、友達だけに共有するかを選択します。',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: '検索と発見',
      description: '他のユーザーが公開している居酒屋情報を検索したり、気になるリストに追加して後で訪問することもできます。',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="pb-12 bg-background-light">
      <div className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">GastronomeJourneyの使い方</h1>
            <p className="text-lg max-w-3xl mx-auto">
              シンプルな4ステップで、あなたの居酒屋体験を記録・共有できます。
              初めての方にもわかりやすい使い方をご紹介します。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-background-light rounded-lg p-6 relative"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {step.id}
                </div>
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <AppPreview />
      
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">活用のヒント</h2>
            <p className="text-lg text-text max-w-2xl mx-auto">
              GastronomeJourneyをより便利に使うためのヒントをご紹介します。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background-light p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">タグを活用しよう</h3>
              <p>店舗情報にタグをつけることで、後から検索しやすくなります。「コスパ良し」「女子会向け」など、独自のタグで管理しましょう。</p>
            </div>
            <div className="bg-background-light p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">思い出のメモを残そう</h3>
              <p>訪れた日付や一緒に行った人、特別なイベントなど、居酒屋との思い出をメモに残しておくと、後から振り返るのが楽しくなります。</p>
            </div>
            <div className="bg-background-light p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">コレクションを作ろう</h3>
              <p>「行きつけのお店」「特別な日用」など、用途別にコレクションを作成すると、状況に応じたお店選びがしやすくなります。</p>
            </div>
          </div>
        </div>
      </div>
      
      <CTA />
    </div>
  );
} 