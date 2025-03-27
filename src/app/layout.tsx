import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButtonWrapper from "@/components/ui/ScrollToTopButtonWrapper";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    template: '%s | ガストロノームジャーニー',
    default: 'ガストロノームジャーニー | 居酒屋探索アプリ',
  },
  description: "あなたの居酒屋体験を記録し、最高のグルメスポットを発見するアプリ。お気に入りの居酒屋を見つけて、美味しい冒険に出かけましょう。",
  keywords: [
    "ガストロノームジャーニー", 
    "居酒屋アプリ", 
    "グルメアプリ", 
    "飲食店検索", 
    "レストラン検索", 
    "食べログ", 
    "口コミ", 
    "レビュー",
    "居酒屋検索",
    "美食",
  ],
  authors: [{ name: "ガストロノームジャーニー開発チーム" }],
  creator: "ガストロノームジャーニー",
  publisher: "ガストロノームジャーニー",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gastronomejourney.com'),
  alternates: {
    canonical: '/',
    languages: {
      'ja-JP': '/',
    },
  },
  openGraph: {
    title: 'ガストロノームジャーニー | 居酒屋探索アプリ',
    description: 'あなたの居酒屋体験を記録し、最高のグルメスポットを発見するアプリ。お気に入りの居酒屋を見つけて、美味しい冒険に出かけましょう。',
    url: 'https://gastronomejourney.com',
    siteName: 'ガストロノームジャーニー',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ガストロノームジャーニー',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ガストロノームジャーニー | 居酒屋探索アプリ',
    description: 'あなたの居酒屋体験を記録し、最高のグルメスポットを発見するアプリ。',
    images: ['/images/twitter-image.jpg'],
    creator: '@gastronomeapp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  category: 'food',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} ${poppins.variable}`}>
      <body className="font-noto-sans min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
        <ScrollToTopButtonWrapper />
      </body>
    </html>
  );
}
