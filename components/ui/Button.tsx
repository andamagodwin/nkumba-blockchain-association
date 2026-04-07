'use client';

import React from 'react';
import Link from 'next/link';
import { useLenis } from 'lenis/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const Button = ({ variant = 'primary', children, className = '', href, onClick, ...props }: ButtonProps) => {
  const lenis = useLenis();
  const baseStyles = "px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 cursor-pointer";
  
  const variants = {
    primary: "bg-nkumba-blue text-white hover:bg-nkumba-blue/90 border-glow-blue shadow-lg shadow-nkumba-blue/20",
    outline: "border-2 border-nkumba-blue text-nkumba-blue hover:bg-nkumba-blue/10",
    ghost: "text-foreground hover:bg-white/10"
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (href === '#') {
        lenis?.scrollTo(0, { duration: 1.5 });
      } else if (targetElement) {
        lenis?.scrollTo(targetElement, { 
          duration: 1.5,
          offset: -80,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    }
    
    // Call the original onClick if it was provided
    if (onClick) {
      onClick(e as React.MouseEvent<HTMLButtonElement>);
    }
  };

  if (href) {
    return (
      <Link href={href} onClick={handleClick as any} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={handleClick as React.MouseEventHandler<HTMLButtonElement>}
      {...props}
    >
      {children}
    </button>
  );
};
