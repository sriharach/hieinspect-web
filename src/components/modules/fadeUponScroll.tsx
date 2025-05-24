'use client';

// libs
import React, { useRef, useEffect, useState, ReactNode } from 'react';
import clsx from 'clsx';

interface FadeUpOnScrollProps {
  children: ReactNode;
  className?: string;
}

const FadeUpOnScroll: React.FC<FadeUpOnScrollProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element); // Only animate once
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={clsx('transition-all duration-700 ease-out transform', className, {
        'opacity-100 translate-y-0': visible,
        'opacity-0 translate-y-10': !visible,
      })}
    >
      {children}
    </div>
  );
};

export default FadeUpOnScroll;
