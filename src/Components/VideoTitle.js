const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-transparent" />

      <div className="relative z-10 h-full flex items-center">
        <div className="pl-6 md:pl-24 lg:pl-32 max-w-2xl transform -translate-y-12">
          <h1 className="text-white text-4xl md:text-7xl font-extrabold mb-4 leading-tight">{title}</h1>
          <p className="text-sm md:text-lg text-gray-200 mb-6 max-w-xl">{overview}</p>
          <div className="flex items-center space-x-4">
            <button className="bg-white text-black px-6 py-3 rounded-md font-semibold">▶︎ Play</button>
            <button className="bg-gray-700 bg-opacity-60 text-white px-6 py-3 rounded-md font-semibold">ⓘ More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;