import React from 'react';
import { LayoutGrid, Play, Heart, MessageCircle, Share2, Music, User, Plus } from 'lucide-react';
import { motion } from 'motion/react';

const REELS = [
  { id: '1', video: 'https://images.unsplash.com/photo-1514525253361-bee8d48700df?w=800&auto=format', artist: 'Hologram Kid', title: 'Future Bass Loop', likes: '12K', comments: '1.2K' },
  { id: '2', video: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=800&auto=format', artist: 'Neon Pulse', title: 'Synth Masterclass', likes: '8.5K', comments: '450' },
  { id: '3', video: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?w=800&auto=format', artist: 'Beatzy AI', title: 'Mood Generator', likes: '2.1M', comments: '50K' },
];

export default function Reels() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide py-12 px-4 lg:px-0">
      <div className="max-w-md mx-auto space-y-12 pb-32">
        <header className="px-4">
          <h2 className="text-3xl font-display font-bold flex items-center gap-3 neon-text-secondary">
             <LayoutGrid size={28} /> Beat Reels
          </h2>
          <p className="text-white/40 text-sm mt-2">Discover the sound of the future in 15 seconds.</p>
        </header>

        {REELS.map((reel) => (
          <div key={reel.id} className="relative aspect-[9/16] w-full rounded-[2.5rem] overflow-hidden snap-center group border border-white/10 shadow-2xl">
            <img src={reel.video} className="w-full h-full object-cover" alt="Reel" />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            
            {/* Controls Left */}
            <div className="absolute bottom-8 left-6 right-20 z-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full border border-brand-primary p-0.5 bg-black">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&auto=format" className="w-full h-full rounded-full object-cover" alt="Avatar" />
                </div>
                <div>
                   <h4 className="font-bold text-sm">@{reel.artist}</h4>
                   <p className="text-xs text-white/60">Pro Artist • Beatzy VIP</p>
                </div>
                <button className="ml-2 px-4 py-1.5 bg-brand-primary text-black text-[10px] font-bold rounded-full hover:scale-105 transition-all">Follow</button>
              </div>
              <h3 className="text-lg font-bold mb-2 line-clamp-2">{reel.title}</h3>
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <Music size={12} className="animate-spin-slow" />
                 <span>Original Sound - Beatzy AI Engine</span>
              </div>
            </div>

            {/* Actions Right */}
            <div className="absolute bottom-10 right-6 z-20 flex flex-col gap-6 items-center">
               <div className="flex flex-col items-center gap-1 group/action cursor-pointer">
                 <div className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 group-hover/action:scale-110 transition-all">
                    <Heart size={24} className="group-hover/action:text-brand-secondary transition-colors" />
                 </div>
                 <span className="text-[10px] font-bold">{reel.likes}</span>
               </div>
               
               <div className="flex flex-col items-center gap-1 group/action cursor-pointer">
                 <div className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 group-hover/action:scale-110 transition-all">
                    <MessageCircle size={24} />
                 </div>
                 <span className="text-[10px] font-bold">{reel.comments}</span>
               </div>

               <div className="flex flex-col items-center gap-1 group/action cursor-pointer">
                 <div className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 group-hover/action:scale-110 transition-all">
                    <Share2 size={24} />
                 </div>
                 <span className="text-[10px] font-bold">Share</span>
               </div>

               <div className="w-12 h-12 rounded-xl bg-brand-primary/20 border border-brand-primary/40 flex items-center justify-center animate-bounce-slow cursor-pointer">
                 <Plus size={24} className="text-brand-primary" />
               </div>
            </div>

            {/* Play/Pause indicator center */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <Play size={64} fill="white" className="text-white drop-shadow-2xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
