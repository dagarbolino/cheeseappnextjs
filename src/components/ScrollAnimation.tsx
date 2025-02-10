"use client";

import { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-up';
  delay?: number;
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const baseClasses = "opacity-0 transition-all duration-1000";
  const animationClasses = {
    'fade-up': 'translate-y-10',
    'fade-left': '-translate-x-10',
    'fade-right': 'translate-x-10',
    'scale-up': 'scale-95',
  };

  const animateClasses = {
    'fade-up': 'opacity-100 translate-y-0',
    'fade-left': 'opacity-100 translate-x-0',
    'fade-right': 'opacity-100 translate-x-0',
    'scale-up': 'opacity-100 scale-100',
  };

  return (
    <div
      ref={elementRef}
      className={`${baseClasses} ${animationClasses[animation]} [&.animate]:${animateClasses[animation]} ${className}`}
    >
      {children}
    </div>
  );
} 