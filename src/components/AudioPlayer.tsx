
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Volume1, VolumeX } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const getArtist = () => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();

    if (day === 6) {
      if (hour < 11) return "Mikuki ya Maneno";
      if (hour < 14) return "Swahilipot Aroma";
      return "Vibes and music";
    } else {
      if (hour < 10) return "The Breakfast Club";
      if (hour < 11) return "Kick-off";
      if (hour < 14) return "Swahilipot Cafe";
      if (hour < 19) return "Swahilipot Drive";
      return "Vibes and music";
    }
  };

  const [stationInfo, setStationInfo] = useState({
    title: "Swahilipot FM",
    artist: `Now Playing: ${getArtist()}`,
  });
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressIntervalRef = useRef<number | null>(null);

  // Initialize audio
  useEffect(() => {
    const audio = new Audio('https://swahilipotfm.out.airtime.pro/swahilipotfm_a?_ga=2.140975346.1118176404.1720613685-1678527295.1702105127');
    audioRef.current = audio;
    audio.volume = volume / 100;
    
    // Set up event listeners
    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration);
    });
    
    return () => {
      if (progressIntervalRef.current) {
        window.clearInterval(progressIntervalRef.current);
      }
      audio.pause();
      audio.src = '';
      audio.remove();
    };
  }, []);

  // Handle play/pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      if (progressIntervalRef.current) {
        window.clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    } else {
      audioRef.current.play();
      progressIntervalRef.current = window.setInterval(() => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
          setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100 || 0);
        }
      }, 1000);
    }
    
    setIsPlaying(!isPlaying);
  };

  // Handle volume change
  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  // Format time (seconds to MM:SS)
  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Get volume icon based on level
  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX className="h-5 w-5" />;
    if (volume < 50) return <Volume1 className="h-5 w-5" />;
    return <Volume2 className="h-5 w-5" />;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 glass border-t border-gray-200 shadow-lg z-40 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center py-3 md:py-4 gap-4">
          {/* Station Info and Cover */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="truncate">
              <h4 className="font-medium text-sm truncate">{stationInfo.title}</h4>
              <div className="flex items-center">
                <div className="nowplaying-animation mr-2 h-3">
                  <span className="mx-[1px]"></span>
                  <span className="mx-[1px]"></span>
                  <span className="mx-[1px]"></span>
                </div>
                <p className="text-xs text-gray-600 truncate">{stationInfo.artist}</p>
              </div>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center gap-2 md:gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="hidden md:flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-gray-200"
                    onClick={() => {}}
                    aria-label="Previous"
                  >
                    <SkipBack className="h-5 w-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Previous station</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2295e2] text-white transition-transform hover:scale-105"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>{isPlaying ? "Pause" : "Play"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="hidden md:flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-gray-200"
                    onClick={() => {}}
                    aria-label="Next"
                  >
                    <SkipForward className="h-5 w-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Next station</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          {/* Volume Control */}
          <div className="hidden md:flex items-center gap-2 ml-4 w-36">
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-gray-200"
              onClick={() => handleVolumeChange([volume === 0 ? 80 : 0])}
              aria-label="Toggle mute"
            >
              {getVolumeIcon()}
            </button>
            <Slider
              value={[volume]}
              min={0}
              max={100}
              step={1}
              onValueChange={handleVolumeChange}
              className="w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
