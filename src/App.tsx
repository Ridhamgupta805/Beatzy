/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Components
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';
import MobileNav from './components/MobileNav';
import AIAssistant from './components/AIAssistant';

// Views
import Home from './views/Home';
import Generator from './views/Generator';
import Marketplace from './views/Marketplace';
import Reels from './views/Reels';

function AppContent() {
  const { user, loading, login } = useAuth();

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-black gap-4">
        <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-brand-primary animate-[shimmer_2s_infinite]" style={{ width: '40%' }} />
        </div>
        <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40">Initializing Beatzy</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center bg-black p-6">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-brand-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18V5L21 3V16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="6" cy="18" r="3" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="18" cy="16" r="3" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-4xl font-display font-bold mb-4 neon-text-primary uppercase tracking-tighter">Beatzy</h1>
          <p className="text-white/50 mb-8 font-light leading-relaxed">The AI-powered creator ecosystem for the future of music. Stream, generate, and monetize in one place.</p>
          <button 
            onClick={login}
            className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-white/90 transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
            Sign in with Google
          </button>
          <p className="mt-8 text-[10px] text-white/30 uppercase tracking-widest font-bold">Secure connection via Firebase Auth</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-black overflow-hidden font-sans relative">
      {/* Background Atmospheric Glows */}
      <div className="glow-purple"></div>
      <div className="glow-cyan"></div>
      
      <Sidebar />
      <main className="flex-1 overflow-y-auto relative scroll-smooth selection:bg-brand-primary selection:text-black z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Home />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/community" element={<div className="p-10"><h2 className="text-3xl font-display font-bold">Community Live Rooms</h2><p className="text-white/40 mt-4 italic">Feature coming soon in Phase 2...</p></div>} />
          <Route path="/profile" element={<div className="p-10"><h2 className="text-3xl font-display font-bold">Artist Profile</h2><p className="text-white/40 mt-4 italic">Feature coming soon in Phase 2...</p></div>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <MusicPlayer />
      <MobileNav />
      <AIAssistant />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

