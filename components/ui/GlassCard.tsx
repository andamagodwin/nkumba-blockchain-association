import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'yellow' | 'none';
}

export const GlassCard = ({ children, className = '', glowColor = 'none' }: GlassCardProps) => {
  const glowStyles = {
    blue: 'border-nkumba-blue/30 shadow-[0_0_20px_rgba(29,62,147,0.15)] hover:shadow-[0_0_30px_rgba(29,62,147,0.3)] transition-all duration-500',
    yellow: 'border-nkumba-yellow/30 shadow-[0_0_20px_rgba(242,237,0,0.1)] hover:shadow-[0_0_30px_rgba(242,237,0,0.2)] transition-all duration-500',
    none: 'border-white/10'
  };

  return (
    <div className={`glass p-6 ${glowStyles[glowColor]} ${className}`}>
      {children}
    </div>
  );
};
