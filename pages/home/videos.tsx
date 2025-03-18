import React from "react";

const YouTubeVideoPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl p-6">
        <h1 className="text-4xl font-bold text-center text-green-500 mb-8">
        Gallery
        </h1>
        <h2 className="text-2xl font-bold text-center text-[#102F5C] mb-2">Ramadan 2025 Campaign</h2>
        <h2 className="text-2xl font-bold text-center text-[#102F5C] mb-6">#ATA’UKA_ALLAMANI</h2>
        <div className="relative overflow-hidden rounded-lg aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/PTVJZIikQJg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideoPage;