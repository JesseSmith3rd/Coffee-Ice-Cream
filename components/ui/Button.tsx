'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'amber' | 'brass' | 'outline' | 'ghost' | 'brick';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  external?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'amber',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  external = false,
}: ButtonProps) {
  const baseClass = `vintage-btn btn-${variant} btn-${size} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}
