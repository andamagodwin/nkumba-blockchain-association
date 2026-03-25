import React from 'react';
import { Button } from './Button';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass w-full max-w-7xl px-8 py-4 flex items-center justify-between border-white/5 bg-slate-900/40">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-gradient-nkumba flex items-center justify-center border border-white/20">
            <span className="text-xl font-bold text-white">N</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
            <span className="text-nkumba-blue">Nkumba</span> Blockchain <span className="text-nkumba-yellow">Club</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-slate-300 hover:text-nkumba-blue transition-colors">About</a>
          <a href="#learning" className="text-sm font-medium text-slate-300 hover:text-nkumba-blue transition-colors">Learning</a>
          <a href="#sessions" className="text-sm font-medium text-slate-300 hover:text-nkumba-blue transition-colors">Sessions</a>
        </div>

        <div>
          <Button variant="primary" className="py-2 text-sm">
            Join Now
          </Button>
        </div>
      </div>
    </nav>
  );
};
