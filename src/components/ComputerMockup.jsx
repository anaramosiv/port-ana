import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

export const ComputerMockup = ({ videoUrl, imageUrl }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="bg-gray-900 p-4 rounded-t-2xl shadow-2xl relative">
        {/* Browser Controls */}
        <div className="flex gap-1.5 mb-3 px-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
        </div>

        {/* Screen Content */}
        <div className="aspect-video bg-black rounded-lg overflow-hidden relative group">
          {videoUrl ? (
            <>
              <video
                ref={videoRef}
                src={videoUrl}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                autoPlay
                muted
                playsInline
              />
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pausar vídeo' : 'Reproducir vídeo'}
                className="absolute inset-0 flex items-center justify-center w-full h-full cursor-pointer"
              >
                <div className="w-16 h-16 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300">
                  {isPlaying
                    ? <Pause className="fill-current" size={32} />
                    : <Play className="fill-current ml-1" size={32} />
                  }
                </div>
              </button>
            </>
          ) : (
            <img
              src={imageUrl}
              alt="Project Preview"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          )}
        </div>
      </div>

      {/* Stand Base */}
      <div className="h-6 bg-gray-800 w-1/3 mx-auto rounded-b-xl shadow-lg"></div>
      <div className="h-2 bg-gray-900 w-1/2 mx-auto rounded-b-xl opacity-50"></div>

      {/* Decorative Glow */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};