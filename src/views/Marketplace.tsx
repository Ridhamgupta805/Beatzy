import React from 'react';
import { ShoppingBag, Search, Filter, Play, Download, ExternalLink, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

const BEATS = [
  { id: '1', title: 'Midnight Trap', producer: 'BeatMaker Pro', price: 29.99, genre: 'Trap', bpm: 140, image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&auto=format' },
  { id: '2', title: 'Emotional Guitar', producer: 'SoulKeys', price: 34.99, genre: 'Lo-Fi', bpm: 90, image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=400&auto=format' },
  { id: '3', title: 'Club Destroyer', producer: 'RaveGod', price: 49.99, genre: 'Techno', bpm: 128, image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400&h=400&auto=format' },
  { id: '4', title: 'Drill Sergeant', producer: 'UK Vibes', price: 39.99, genre: 'Drill', bpm: 144, image: 'https://images.unsplash.com/photo-1516280440614-37939bbdd4f1?w=400&h=400&auto=format' },
  { id: '5', title: 'Sunshine Soul', producer: 'GrooveMaster', price: 24.99, genre: 'Soul', bpm: 105, image: 'https://images.unsplash.com/photo-1514525253361-bee8d48700df?w=400&h=400&auto=format' },
  { id: '6', title: 'Bass Heavy', producer: 'DubstepKing', price: 44.99, genre: 'Dubstep', bpm: 140, image: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?w=400&h=400&auto=format' },
];

export default function Marketplace() {
  return (
    <div className="py-8 px-6 lg:px-10 pb-32">
      <header className="mb-12">
        <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 neon-text-primary">Beat Marketplace</h2>
        <p className="text-white/40 lg:text-lg max-w-2xl">Buy professional beats, vocal packs, and loops directly from world-class producers. Instant licensing & high-quality wav files.</p>
      </header>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
          <input 
            type="text" 
            placeholder="Search for beats, producers, or genres..." 
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-primary/50 transition-all"
          />
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all cursor-pointer">
            <Filter size={20} /> Filters
          </button>
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-4">
             <button className="text-xs font-bold text-white/40 hover:text-white transition-colors uppercase tracking-widest px-2 cursor-pointer">Free</button>
             <button className="text-xs font-bold text-brand-primary uppercase tracking-widest px-2 cursor-pointer">Premium</button>
          </div>
        </div>
      </div>

      {/* Featured Packs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2 relative h-64 rounded-3xl overflow-hidden group cursor-pointer border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/40 to-transparent z-10" />
          <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1000&auto=format" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" alt="Featured Pack" />
          <div className="absolute inset-0 z-20 p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-display font-bold mb-2 uppercase italic tracking-tighter">Cyber-Drill Pack vol.1</h3>
            <p className="text-white/70 mb-6 max-w-sm">50+ custom loops, 20 construction kits. Standard license included.</p>
            <button className="w-fit bg-brand-secondary text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(255,0,229,0.3)] transition-all">
              <Download size={18} /> Download Trial
            </button>
          </div>
        </div>
        <div className="glass rounded-3xl p-8 border-brand-primary/20 flex flex-col justify-center">
          <h4 className="text-xl font-display font-bold mb-4 flex items-center gap-2 uppercase tracking-tight">
            <DollarSign className="text-brand-primary" /> Top Producer of the week
          </h4>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white/5 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&auto=format" alt="Producer" />
            </div>
            <div>
              <p className="font-bold text-lg">BeatMaker Pro</p>
              <p className="text-xs text-white/40 uppercase tracking-widest">1,240 Sales</p>
            </div>
          </div>
          <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wider cursor-pointer">
            View Shop
          </button>
        </div>
      </div>

      {/* Beats Grid */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-display font-bold uppercase italic tracking-tight">Recent Listings</h3>
          <div className="flex gap-4">
             <button className="text-sm font-bold text-white/40 hover:text-white transition-colors">Popular</button>
             <button className="text-sm font-bold text-brand-primary underline underline-offset-4 font-display">Newest</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {BEATS.map((beat, i) => (
            <motion.div 
              key={beat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-4 border border-white/5 bg-white/5 group-hover:neon-border transition-all duration-300">
                <img src={beat.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={beat.title} />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                   <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform cursor-pointer">
                      <Play size={32} fill="black" className="text-black ml-1" />
                   </button>
                </div>
                <div className="absolute top-4 right-4 h-10 w-10 glass rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <ShoppingBag size={18} className="text-brand-primary" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 glass px-4 py-2 rounded-xl flex items-center justify-between gap-2 translate-y-4 group-hover:translate-y-0 transition-transform">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">{beat.bpm} BPM</span>
                   <span className="text-xs font-bold text-brand-primary">${beat.price}</span>
                </div>
              </div>
              <div className="px-2">
                <div className="flex items-center justify-between gap-4 mb-1">
                  <h4 className="font-bold truncate group-hover:text-brand-primary transition-colors">{beat.title}</h4>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-white/40 truncate">by {beat.producer}</p>
                  <button className="text-white/40 hover:text-white transition-colors cursor-pointer">
                    <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
