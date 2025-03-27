/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['images.unsplash.com'], // Unsplashドメインを明示的に許可
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
    ],
  },
  // サーバーコンポーネントでのCSS Modulesのサポート
  transpilePackages: [],
  // 開発環境での高速リフレッシュを有効化
  reactStrictMode: true,
  // パフォーマンス測定のためのメトリクスを収集
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

export default nextConfig; 