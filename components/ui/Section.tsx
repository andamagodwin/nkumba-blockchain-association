import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export const Section = ({ children, id, className = '', containerClassName = '' }: SectionProps) => {
  return (
    <section id={id} className={`py-20 px-6 sm:px-12 relative z-10 ${className}`}>
      <div className={`max-w-7xl mx-auto ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};
