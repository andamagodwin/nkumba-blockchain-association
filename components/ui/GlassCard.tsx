import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'yellow' | 'none';
}

export const GlassCard = ({ children, className = '', glowColor = 'none' }: GlassCardProps) => {
  const glowStyles = {
    blue: 'border-nkumba-blue/30 shadow-[0_0_20px_rgba(54,145,173,0.15)] hover:shadow-[0_0_30px_rgba(54,145,173,0.3)] transition-all duration-500',
    yellow: 'border-nkumba-yellow/30 shadow-[0_0_20px_rgba(252,238,35,0.1)] hover:shadow-[0_0_30px_rgba(252,238,35,0.2)] transition-all duration-500',
    none: 'border-white/10'
  };

  return (
    <div className={`glass p-6 ${glowStyles[glowColor]} ${className}`}>
      {children}
    </div>
  );
};
