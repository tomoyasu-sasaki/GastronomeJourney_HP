const CTA = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          今すぐGastronomeJourneyを始めよう
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
          居酒屋体験を記録し、友達と共有する。新しい発見がきっと待っています。
          今すぐアプリをダウンロードして、あなたの味の旅を始めましょう。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-full flex items-center transition-colors"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.6004 12.5996L15.0004 14.3996L12.0004 11.3996L9.0004 14.3996L6.4004 12.5996C3.7004 14.3996 3.0004 17.9996 3.0004 17.9996V19.9996H21.0004V17.9996C21.0004 17.9996 20.3004 14.3996 17.6004 12.5996Z" />
              <path d="M9.00039 9.59961L7.20039 7.79961L9.00039 5.99961H15.0004L16.8004 7.79961L15.0004 9.59961H9.00039Z" />
              <path d="M18.0004 10.3996L16.2004 8.59961L18.0004 6.79961C19.0004 5.79961 21.0004 5.99961 21.0004 5.99961V3.99961H3.0004V5.99961C3.0004 5.99961 5.0004 5.79961 6.0004 6.79961L7.8004 8.59961L6.0004 10.3996C4.0004 12.3996 3.0004 16.9996 3.0004 16.9996H21.0004C21.0004 16.9996 20.0004 12.3996 18.0004 10.3996Z" />
            </svg>
            App Store
          </a>
          <a
            href="#"
            className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-full flex items-center transition-colors"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.5 12.6646C3.5 10.1271 3.5 8.85839 4.00265 7.69758C4.44651 6.67606 5.17606 5.94651 6.19758 5.50265C7.35839 5 8.62708 5 11.1646 5H12.8354C15.3729 5 16.6416 5 17.8024 5.50265C18.8239 5.94651 19.5535 6.67606 19.9974 7.69758C20.5 8.85839 20.5 10.1271 20.5 12.6646V13.3354C20.5 15.8729 20.5 17.1416 19.9974 18.3024C19.5535 19.3239 18.8239 20.0535 17.8024 20.4974C16.6416 21 15.3729 21 12.8354 21H11.1646C8.62708 21 7.35839 21 6.19758 20.4974C5.17606 20.0535 4.44651 19.3239 4.00265 18.3024C3.5 17.1416 3.5 15.8729 3.5 13.3354V12.6646Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M7.25 8.5C7.25 8.08579 7.58579 7.75 8 7.75H16C16.4142 7.75 16.75 8.08579 16.75 8.5C16.75 8.91421 16.4142 9.25 16 9.25H8C7.58579 9.25 7.25 8.91421 7.25 8.5Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M7.25 15.5C7.25 15.0858 7.58579 14.75 8 14.75H13C13.4142 14.75 13.75 15.0858 13.75 15.5C13.75 15.9142 13.4142 16.25 13 16.25H8C7.58579 16.25 7.25 15.9142 7.25 15.5Z" />
            </svg>
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA; 