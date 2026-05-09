import React from 'react';
import { Home, Compass, User, Search, Music, LayoutGrid } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function MobileNav() {
  const location = useLocation();

  const items = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: LayoutGrid, path: '/reels', label: 'Reels' },
    { icon: Music, path: '/generator', label: 'Create' },
    { icon: Compass, path: '/discover', label: 'Discover' },
    { icon: User, path: '/profile', label: 'Profile' },
  ];

  return (
    <div className="lg:hidden fixed bottom-24 left-4 right-4 h-16 glass rounded-2xl border border-white/10 z-50 flex items-center justify-around px-2 mb-2">
      {items.map((item) => {
        const active = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all",
              active ? "text-brand-primary" : "text-white/40"
            )}
          >
            <item.icon size={active ? 24 : 20} />
            <span className={cn("text-[8px] mt-1 uppercase font-bold tracking-widest", active ? "block" : "hidden")}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
