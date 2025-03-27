import ContactForm from '@/components/ContactForm';
import CTA from '@/components/CTA';

export default function ContactPage() {
  return (
    <div className="py-12 bg-background-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">お問い合わせ</h1>
          <p className="text-lg max-w-3xl mx-auto">
            GastronomeJourneyに関するご質問、ご意見、お問い合わせはこちらのフォームからお気軽にご連絡ください。
            通常2営業日以内にご返信いたします。
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">メール</h3>
              <p className="text-text mb-2">support@gastronomejourney.com</p>
              <p className="text-sm text-gray-500">平日9:00-18:00対応</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">電話</h3>
              <p className="text-text mb-2">03-1234-5678</p>
              <p className="text-sm text-gray-500">平日10:00-17:00対応</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">よくある質問</h3>
              <p className="text-text mb-2">よくある質問はFAQページをご覧ください</p>
              <a href="/faq" className="text-primary hover:underline">
                FAQを見る
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20">
        <CTA />
      </div>
    </div>
  );
} 