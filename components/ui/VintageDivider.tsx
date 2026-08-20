'use client';

import React from 'react';

interface VintageDividerProps {
  symbol?: string;
  className?: string;
  align?: 'center' | 'left' | 'right';
  maxWidth?: string;
}

export default function VintageDivider({
  symbol = '✦',
  className = '',
  align = 'center',
  maxWidth = '100%',
}: VintageDividerProps) {
  const justifyMap = {
    center: 'center',
    left: 'flex-start',
    right: 'flex-end',
  };

  return (
    <div
      className={`vintage-divider-wrap ${className}`}
      style={{ justifyContent: justifyMap[align], maxWidth }}
      aria-hidden="true"
    >
      <div className="divider-line left" />
      <span className="divider-symbol">{symbol}</span>
      <div className="divider-line right" />

      <style jsx>{`
        .vintage-divider-wrap {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 18px 0;
          width: 100%;
        }

        .divider-line {
          height: 1px;
          flex-grow: 1;
          max-width: 120px;
        }

        .divider-line.left {
          background: linear-gradient(90deg, transparent 0%, var(--color-brass-primary) 100%);
          opacity: 0.6;
        }

        .divider-line.right {
          background: linear-gradient(90deg, var(--color-brass-primary) 0%, transparent 100%);
          opacity: 0.6;
        }

        .divider-symbol {
          color: var(--color-gold-leaf);
          font-size: 0.85rem;
          line-height: 1;
          filter: drop-shadow(0 0 4px var(--color-brass-glow));
          user-select: none;
        }
      `}</style>
    </div>
  );
}
