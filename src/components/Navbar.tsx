'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        {/* ロゴ */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/GastronomeJourney_logo.png" 
            alt="GastronomeJourney Logo" 
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-xl font-bold text-primary">GastronomeJourney</span>
        </Link>

        {/* デスクトップナビゲーション */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/features" className="text-text hover:text-primary transition-colors">
            機能紹介
          </Link>
          <Link href="/usage" className="text-text hover:text-primary transition-colors">
            使い方
          </Link>
          <Link href="/faq" className="text-text hover:text-primary transition-colors">
            よくある質問
          </Link>
          <Link href="/gallery" className="text-text hover:text-primary transition-colors">
            ギャラリー
          </Link>
          <Link href="/contact" className="text-text hover:text-primary transition-colors">
            お問い合わせ
          </Link>
          <Link href="/download" className="btn-primary">
            ダウンロード
          </Link>
        </div>

        {/* モバイルメニューボタン */}
        <button
          type="button"
          className="md:hidden text-text focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow-md">
          <div className="flex flex-col space-y-4 py-4">
            <Link
              href="/features"
              className="text-text hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              機能紹介
            </Link>
            <Link
              href="/usage"
              className="text-text hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              使い方
            </Link>
            <Link
              href="/faq"
              className="text-text hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              よくある質問
            </Link>
            <Link
              href="/gallery"
              className="text-text hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ギャラリー
            </Link>
            <Link
              href="/contact"
              className="text-text hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </Link>
            <Link
              href="/download"
              className="btn-primary inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              ダウンロード
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 