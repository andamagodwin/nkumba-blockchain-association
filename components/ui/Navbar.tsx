'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ArrowRight } from 'iconsax-react';
import { HiBars3BottomRight, HiXMark } from 'react-icons/hi2';
import { Button } from './Button';

export type NavItem = {
  label: string;
  href: string;
};

export interface NavbarProps {
  logo?: string;
  items: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  logo = '/nkumba-logo.jpeg',
  items,
  ctaLabel = 'Join Now',
  ctaHref = '#join'
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMenuOpen(false);
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (href === '#') {
        lenis?.scrollTo(0, { duration: 1.5 });
      } else if (targetElement) {
        lenis?.scrollTo(targetElement, { 
          duration: 1.5,
          offset: -80, // Accounts for navbar height
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(menuRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        ease: 'power3.out'
      });
    } else {
      document.body.style.overflow = 'unset';
      gsap.to(menuRef.current, {
        autoAlpha: 0,
        y: -20,
        duration: 0.3,
        ease: 'power3.in'
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-3 px-4 md:px-12 flex justify-center items-center ${
          isScrolled ? 'pt-2' : 'pt-4'
        }`}
      >
        <div 
          className={`relative flex items-center justify-between w-full max-w-5xl px-4 md:px-6 py-2 rounded-full transition-all duration-500 ${
            isScrolled 
              ? 'bg-slate-950/80 backdrop-blur-xl shadow-2xl' 
              : 'bg-white/[0.01] backdrop-blur-[2px]'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 md:w-9 md:h-9 overflow-hidden rounded-lg border border-white/10 group-hover:border-nkumba-yellow/50 transition-colors duration-300">
              <img src={logo} alt="Nkumba Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] md:text-sm font-bold tracking-tight text-white leading-tight">
                Nkumba University
              </span>
              <span className="text-[8px] md:text-[9px] font-medium tracking-[0.2em] text-nkumba-yellow uppercase">
                Blockchain Association
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[13px] font-medium text-white/90 hover:text-nkumba-yellow transition-colors duration-300 tracking-wide capitalize"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <Link href={ctaHref} className="hidden sm:block">
              <button 
                onClick={(e) => handleNavClick(e as any, ctaHref)}
                className="text-[11px] font-bold uppercase tracking-wider py-2 px-5 rounded-full bg-nkumba-yellow text-slate-950 hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_15px_rgba(242,237,0,0.15)] cursor-pointer"
              >
                {ctaLabel}
              </button>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:text-nkumba-yellow transition-all duration-300 active:scale-90"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <HiXMark size="32" /> : <HiBars3BottomRight size="32" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-[90] md:hidden bg-slate-950/98 backdrop-blur-2xl invisible opacity-0 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 p-12">
          {items.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="group flex items-center gap-4 text-2xl font-bold text-white hover:text-nkumba-yellow transition-all duration-300 tracking-tight"
            >
              <span className="text-[10px] font-mono text-nkumba-yellow opacity-50 group-hover:opacity-100 transition-opacity">
                0{index + 1}
              </span>
              {item.label}
            </Link>
          ))}
          <div className="h-px w-16 bg-white/10 my-6" />
          <Link 
            href={ctaHref}
            onClick={(e) => handleNavClick(e, ctaHref)}
            className="flex items-center gap-3 text-lg font-bold text-nkumba-yellow hover:scale-110 transition-all duration-300 bg-nkumba-yellow/10 px-8 py-3 rounded-full border border-nkumba-yellow/20"
          >
            {ctaLabel} <ArrowRight size="20" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
