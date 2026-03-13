import React from 'react';
import { Zap } from 'lucide-react';

export const GlassCard = ({ children, className = "", hover = true }) => (
  <div className={`
    relative overflow-hidden
    bg-slate-900/40 backdrop-blur-md 
    border border-white/10 
    rounded-2xl
    ${hover ? 'hover:bg-slate-800/60 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-1 transition-all duration-500' : ''}
    ${className}
  `}>
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    {children}
  </div>
);

export const Chip = ({ text }) => (
  <div className="px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-300 text-sm font-medium flex items-center gap-2 hover:bg-cyan-900/50 hover:border-cyan-500/50 transition-colors cursor-default">
    <Zap size={14} className="text-cyan-400" />
    {text}
  </div>
);
