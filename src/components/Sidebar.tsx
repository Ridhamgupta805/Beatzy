import React from 'react';
import { Home, Compass, Music, ShoppingBag, Radio, User, Settings, Plus, LayoutGrid } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Sidebar() {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Compass, label: 'Discover', path: '/discover' },
    { icon: LayoutGrid, label: 'Reels', path: '/reels' },
    { icon: Music, label: 'Generator', path: '/generator' },
    { icon: ShoppingBag, label: 'Marketplace', path: '/marketplace' },
    { icon: Radio, label: 'Community', path: '/community' },
  ];

  return (
    <nav className="w-[80px] h-full flex flex-col items-center py-8 border-r border-white/5 bg-black/40 backdrop-blur-xl z-20 overflow-y-auto">
      <div className="mb-12">
        <Link to="/" className="w-10 h-10 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)] group overflow-hidden">
          <span className="font-black text-xl italic text-black group-hover:scale-110 transition-transform">B</span>
        </Link>
      </div>

      <div className="flex flex-col gap-8 opacity-70">
        {menuItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "p-2.5 rounded-xl transition-all group",
                active ? "bg-brand-primary/10 text-brand-primary" : "text-white/60 hover:text-white"
              )}
              title={item.label}
            >
              <item.icon size={24} className={active ? "text-brand-primary" : "group-hover:text-white transition-colors"} strokeWidth={active ? 2.5 : 2} />
            </Link>
          );
        })}
      </div>

      <div className="mt-auto flex flex-col gap-6 items-center">
        <Link to="/settings" className="p-2.5 text-white/40 hover:text-white transition-colors" title="Settings">
          <Settings size={24} />
        </Link>
        <Link to="/profile" className="w-10 h-10 rounded-full border border-white/20 p-0.5 group overflow-hidden">
          <div className="w-full h-full bg-gradient-to-b from-gray-600 to-gray-800 rounded-full group-hover:scale-110 transition-transform"></div>
        </Link>
      </div>
    </nav>
  );
}
