import React from 'react';
import { Play, TrendingUp, Music, Sparkles, Plus, Heart, Share2, Search } from 'lucide-react';
import { motion } from 'motion/react';

const TOP_TRACKS = [
  { id: '1', title: 'Future Bass 303', artist: 'Hologram Kid', cover: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400&h=400&auto=format', genre: 'Electronic' },
  { id: '2', title: 'Cyber City', artist: 'Neon Pulse', cover: 'https://images.unsplash.com/photo-1514525253361-bee8d48700df?w=400&h=400&auto=format', genre: 'Synthwave' },
  { id: '3', title: 'Drift Away', artist: 'AI Voyager', cover: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?w=400&h=400&auto=format', genre: 'Lo-Fi' },
  { id: '4', title: 'Rage Mode', artist: 'Brutal Beats', cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&auto=format', genre: 'Trap' },
];

const NEW_ARTISTS = [
  { name: 'X-Gen', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&auto=format' },
  { name: 'Luna AI', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&auto=format' },
  { name: 'Pulse', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format' },
];

export default function Home() {
  return (
    <div className="flex flex-col h-full relative">
      {/* Top Header */}
      <header className="h-20 flex items-center justify-between px-10 border-b border-white/5 sticky top-0 bg-black/40 backdrop-blur-md z-30">
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-5 py-2 w-[400px] focus-within:border-brand-primary/50 transition-all">
          <Search size={18} className="text-white/30" />
          <input 
            type="text" 
            placeholder="Search for beats, artists, or prompt AI..." 
            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-white/30"
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-widest rounded">Pro Mode</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 text-white/60 text-[10px] font-bold uppercase tracking-widest rounded">2.4k Credits</span>
          </div>
        </div>
      </header>

      <div className="py-8 px-6 lg:px-10 pb-32">
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl lg:text-6xl font-display font-bold tracking-tight mb-2">Listen & <br /> <span className="neon-text-primary">Discover</span></h2>
          <p className="text-white/40 text-lg">Curated AI beats and underground masterpieces.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all cursor-pointer">
            <TrendingUp size={20} className="text-brand-primary" /> Trending
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-brand-primary text-black rounded-2xl font-bold hover:scale-105 transition-all cursor-pointer">
            <Plus size={20} /> Create Mix
          </button>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="mb-12 relative h-64 lg:h-80 rounded-[2.5rem] overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/40 to-brand-secondary/40 mix-blend-overlay z-10" />
        <img 
          src="https://images.unsplash.com/photo-1514525253361-bee8d48700df?w=1600&auto=format" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" 
          alt="Featured" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20 p-8 flex flex-col justify-end">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-1 bg-brand-primary text-black text-[10px] font-bold rounded uppercase tracking-widest animate-pulse">Featured Mix</span>
          </div>
          <h3 className="text-4xl lg:text-5xl font-display font-bold mb-2">Midnight Run AI</h3>
          <p className="text-white/70 max-w-lg mb-6">Experience the first ever fully AI-generated synthwave album, mastered in real-time by Beatzy Engine.</p>
          <div className="flex items-center gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-white/90">
              <Play size={20} fill="black" /> Play Now
            </button>
            <button className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-all">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Top Tracks Grid */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-display font-bold flex items-center gap-3">
            <TrendingUp className="text-brand-primary" /> Trending Now
          </h3>
          <button className="text-brand-primary text-sm font-bold hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOP_TRACKS.map((track, i) => (
            <motion.div 
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-4 border border-white/5 bg-white/5">
                <img src={track.cover} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={track.title} />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play size={32} fill="black" className="text-black ml-1" />
                   </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-black/60 backdrop-blur-md text-[10px] font-bold rounded-lg border border-white/10 uppercase tracking-widest">{track.genre}</span>
                </div>
              </div>
              <h4 className="font-bold mb-1 truncate group-hover:text-brand-primary transition-colors">{track.title}</h4>
              <p className="text-xs text-white/50 truncate">{track.artist}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* New Artists */}
      <section className="mb-16">
        <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
          <Sparkles className="text-brand-secondary" /> Rising Artists
        </h3>
        <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
          {NEW_ARTISTS.map((artist) => (
            <div key={artist.name} className="flex flex-col items-center gap-3 flex-shrink-0 cursor-pointer group">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-white/5 group-hover:border-brand-primary transition-all p-1">
                <img src={artist.avatar} className="w-full h-full object-cover rounded-full" alt={artist.name} />
              </div>
              <p className="font-bold text-sm group-hover:text-brand-primary transition-colors">{artist.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick AI Mix */}
      <section className="glass rounded-[2rem] p-10 border-brand-primary/20">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h3 className="text-3xl font-display font-bold mb-4">Start your <span className="neon-text-secondary">AI Journey</span></h3>
            <p className="text-white/60 mb-8 max-w-md">Our recommendation engine uses your mood and history to generate a live, evolving playlist just for you.</p>
            <div className="flex items-center gap-4">
              <button className="bg-brand-secondary text-white px-8 py-3 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(255,0,229,0.3)] transition-all">Start AI Mix</button>
            </div>
          </div>
          <div className="w-full max-w-sm aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10 relative">
             {/* Simple visualization mock */}
             <div className="absolute inset-0 flex items-center justify-around px-8">
               {[...Array(12)].map((_, i) => (
                 <motion.div 
                   key={i}
                   animate={{ height: ['20%', '80%', '20%'] }}
                   transition={{ repeat: Infinity, duration: 1 + Math.random(), ease: 'easeInOut', delay: i * 0.1 }}
                   className="w-1 bg-brand-primary rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                 />
               ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  );
}
