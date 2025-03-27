interface DownloadButtonProps {
  platform: 'ios' | 'android';
  className?: string;
}

const DownloadButton = ({ platform, className = '' }: DownloadButtonProps) => {
  const appStoreLink = 'https://apps.apple.com/app/gastronome-journey/id123456789';
  const playStoreLink = 'https://play.google.com/store/apps/details?id=com.gastronomejourney';
  
  return (
    <a
      href={platform === 'ios' ? appStoreLink : playStoreLink}
      className={`inline-flex items-center px-5 py-3 bg-black text-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-0.5 ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={platform === 'ios' ? 'iOSアプリをダウンロード' : 'Androidアプリをダウンロード'}
      role="button"
    >
      {platform === 'ios' ? (
        <>
          <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M16.3161 11.9656C16.3161 9.06667 18.6818 7.9339 18.7813 7.87805C17.5291 6.06159 15.5935 5.78776 14.907 5.75984C13.1674 5.58594 11.4837 6.79122 10.6002 6.79122C9.69898 6.79122 8.33411 5.77778 6.86016 5.81364C4.96784 5.84951 3.20051 6.9463 2.23521 8.60813C0.24234 11.9835 1.7342 17.0212 3.64446 19.8482C4.59182 21.2369 5.71645 22.8071 7.1904 22.75C8.63639 22.6929 9.16823 21.824 10.8881 21.824C12.59 21.824 13.0859 22.75 14.602 22.715C16.1541 22.6929 17.133 21.2907 18.0445 19.8841C19.134 18.2581 19.5761 16.662 19.5941 16.5898C19.5582 16.5718 16.3519 15.3486 16.3161 11.9656Z" />
            <path d="M13.7136 4.03513C14.4927 3.07889 15.0246 1.79149 14.88 0.5C13.7674 0.553799 12.4025 1.27552 11.5967 2.21379C10.8714 3.0316 10.2319 4.36681 10.3943 5.6184C11.6356 5.70218 12.9165 4.9824 13.7136 4.03513Z" />
          </svg>
          <div>
            <div className="text-xs">App Storeからダウンロード</div>
            <div className="text-lg font-semibold leading-tight">App Store</div>
          </div>
        </>
      ) : (
        <>
          <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.5234 12.0195L6.0416 19.2383C5.94124 19.3047 5.82124 19.3359 5.7026 19.3359C5.58397 19.3359 5.46397 19.3047 5.36244 19.2383C5.16281 19.1094 5.0416 18.8945 5.0416 18.6602V4.22266C5.0416 3.98828 5.16281 3.77344 5.36244 3.64453C5.56089 3.51562 5.8166 3.51562 6.0416 3.64453L17.5234 10.8633C17.7214 10.9906 17.8428 11.2055 17.8428 11.4414C17.8428 11.6774 17.7214 11.8922 17.5234 12.0195Z" />
          </svg>
          <div>
            <div className="text-xs">Google Playで手に入れよう</div>
            <div className="text-lg font-semibold leading-tight">Google Play</div>
          </div>
        </>
      )}
    </a>
  );
};

export default DownloadButton; 