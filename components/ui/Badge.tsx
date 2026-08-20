'use client';

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'caramel' | 'brick' | 'walnut' | 'cream';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  variant = 'gold',
  size = 'sm',
  icon,
  className = '',
}: BadgeProps) {
  return (
    <span className={`vintage-badge badge-${variant} badge-${size} ${className}`}>
      {icon && <span className="badge-icon">{icon}</span>}
      <span className="badge-text">{children}</span>

      <style jsx>{`
        .vintage-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-radius: var(--radius-full);
          font-family: var(--font-sans);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          line-height: 1;
          white-space: nowrap;
        }

        .badge-sm {
          font-size: 0.7rem;
          padding: 4px 10px;
        }

        .badge-md {
          font-size: 0.8rem;
          padding: 6px 14px;
        }

        .badge-gold {
          background: rgba(201, 155, 62, 0.12);
          color: var(--color-gold-leaf);
          border: 1px solid var(--color-brass-border);
        }

        .badge-caramel {
          background: rgba(217, 119, 24, 0.14);
          color: var(--color-amber-glow);
          border: 1px solid rgba(217, 119, 24, 0.35);
        }

        .badge-brick {
          background: rgba(135, 49, 35, 0.2);
          color: #fca5a5;
          border: 1px solid rgba(184, 71, 52, 0.4);
        }

        .badge-walnut {
          background: var(--color-walnut-surface);
          color: var(--color-beige-body);
          border: 1px solid var(--border-hairline);
        }

        .badge-cream {
          background: var(--color-cream-soft);
          color: var(--color-espresso-dark);
          border: 1px solid var(--color-gold-leaf);
        }

        .badge-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </span>
  );
}
