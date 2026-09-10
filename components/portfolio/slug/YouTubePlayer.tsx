"use client";

import React from "react";
import Boderyelow from "@/components/ui/boder-yelow";

interface YouTubePlayerProps {
  url: string;
}

export default function YouTubePlayer({ url }: YouTubePlayerProps) {
  // Hàm xử lý lấy ID video từ nhiều định dạng link YouTube khác nhau
  const getYouTubeID = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeID(url);

  if (!videoId) return <div className="text-center py-10 text-gray-400">Video không khả dụng</div>;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <Boderyelow>
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </Boderyelow>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400 italic font-medium">
          * Video minh họa thực tế dự án từ kênh YouTube chính thức
        </p>
      </div>
    </div>
  );
}