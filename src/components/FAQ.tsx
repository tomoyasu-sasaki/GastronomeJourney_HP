'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-5 px-4 text-left font-bold focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg">{question}</span>
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-5 px-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-text">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: 'GastronomeJourneyは無料で使えますか？',
      answer: 'はい、基本機能は無料でご利用いただけます。一部のプレミアム機能は有料ですが、居酒屋情報の記録・管理などの主要機能は無料です。',
    },
    {
      question: '記録した居酒屋情報は誰でも見られるのですか？',
      answer: 'いいえ、プライバシー設定で公開範囲を自由に設定できます。全体公開、友達のみ公開、完全非公開から選べます。投稿ごとに設定を変更することも可能です。',
    },
    {
      question: 'オフラインでも使えますか？',
      answer: 'はい、基本的な記録機能はオフラインでもご利用いただけます。ただし、共有機能やマップ表示などの一部機能はインターネット接続が必要です。',
    },
    {
      question: '写真はどのくらい保存できますか？',
      answer: '無料プランでは1店舗あたり最大10枚まで保存できます。プレミアムプランにアップグレードすると、無制限に写真を保存できるようになります。',
    },
    {
      question: 'アカウントの削除方法は？',
      answer: 'アプリ内の設定画面から「アカウント削除」を選択して操作を進めると、アカウントを完全に削除できます。削除すると、すべてのデータが完全に消去されます。',
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">よくある質問</h2>
          <p className="text-lg text-text">GastronomeJourneyに関する一般的な質問と回答です。</p>
        </div>

        <div className="bg-background-light rounded-lg p-2 sm:p-6">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleItem(index)}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg mb-4">お探しの質問が見つかりませんか？</p>
          <a href="/contact" className="btn-primary">
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 