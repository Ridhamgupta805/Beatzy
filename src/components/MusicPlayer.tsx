import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Maximize2, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface Track {
  id: string;
  title: string;
  artist: string;
  coverArt: string;
  audioUrl: string;
}

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Mock track for now
  const currentTrack: Track = {
    id: '1',
    title: 'Atmospheric Reverb Flow',
    artist: 'Beatzy AI Engine',
    coverArt: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const p = (audio.currentTime / audio.duration) * 100;
      setProgress(p || 0);
    };

    audio.addEventListener('timeupdate', updateProgress);
    return () => audio.removeEventListener('timeupdate', updateProgress);
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-24 bg-black/80 backdrop-blur-2xl border-t border-white/5 flex items-center px-6 lg:px-10 gap-6 lg:gap-10 z-50">
      <audio ref={audioRef} src={currentTrack.audioUrl} />
      
      {/* Song Info */}
      <div className="w-1/4 flex items-center gap-4">
        <div className="w-14 h-14 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded-lg flex-shrink-0 animate-pulse-slow shadow-lg shadow-cyan-500/20 overflow-hidden">
          <img src={currentTrack.coverArt} alt={currentTrack.title} className="w-full h-full object-cover mix-blend-overlay opacity-60" />
        </div>
        <div className="hidden sm:block overflow-hidden">
          <h4 className="text-sm font-bold truncate">{currentTrack.title}</h4>
          <p className="text-[10px] text-brand-primary font-mono uppercase tracking-widest">AI GEN • 0.8s LATENCY</p>
        </div>
      </div>

      {/* Controls & Waveform */}
      <div className="flex-1 flex flex-col items-center gap-2">
        <div className="flex items-center gap-8 mb-1">
          <button className="text-white/40 hover:text-white cursor-pointer"><SkipBack size={20} fill="currentColor" /></button>
          <button 
            onClick={togglePlay}
            className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          >
            {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" className="ml-0.5" />}
          </button>
          <button className="text-white/40 hover:text-white cursor-pointer"><SkipForward size={20} fill="currentColor" /></button>
        </div>
        
        <div className="w-full flex items-center gap-4 px-4">
          <span className="text-[10px] font-mono text-white/40 min-w-[35px]">02:14</span>
          
          {/* Waveform Visualizer Mock */}
          <div className="flex-1 h-8 flex items-center justify-center gap-[2px]">
            {[...Array(30)].map((_, i) => {
              const isActive = (i / 30) * 100 <= progress;
              return (
                <div 
                  key={i}
                  className={cn(
                    "w-1 rounded-full transition-all duration-300",
                    isActive ? "bg-brand-primary shadow-[0_0_8px_cyan]" : "bg-white/20"
                  )}
                  style={{ 
                    height: `${Math.max(20, Math.sin(i * 0.5) * 80 + 20)}%`,
                    opacity: isActive ? 1 : 0.4
                  }}
                />
              );
            })}
          </div>
          
          <span className="text-[10px] font-mono text-white/40 min-w-[35px]">03:45</span>
        </div>
      </div>

      {/* Secondary Controls */}
      <div className="hidden lg:flex w-1/4 justify-end items-center gap-6">
        <div className="flex items-center gap-3">
          <Volume2 size={18} className="text-white/40" />
          <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-white"></div>
          </div>
        </div>
        <button className="p-2 bg-white/5 rounded-lg border border-white/10 text-brand-primary hover:bg-white/10 transition-colors cursor-pointer">
          <Maximize2 size={18} />
        </button>
      </div>
    </footer>
  );
}
