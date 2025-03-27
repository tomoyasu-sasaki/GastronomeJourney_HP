import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function FAQPage() {
  return (
    <div className="py-12 bg-background-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">よくあるご質問</h1>
          <p className="text-lg max-w-3xl mx-auto">
            GastronomeJourneyについてよくある質問と回答をまとめました。
            ここで解決しない場合は、お気軽にお問い合わせください。
          </p>
        </div>
      </div>
      
      <FAQ />
      <CTA />
    </div>
  );
} 