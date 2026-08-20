'use client';

import React from 'react';

interface HendersonLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showTagline?: boolean;
  className?: string;
}

export default function HendersonLogo({ size = 'md', showTagline = false, className = '' }: HendersonLogoProps) {
  const sizeMap = {
    sm: { width: 44, height: 44, textSize: '1.15rem', subSize: '0.62rem' },
    md: { width: 56, height: 56, textSize: '1.38rem', subSize: '0.72rem' },
    lg: { width: 80, height: 80, textSize: '1.75rem', subSize: '0.82rem' },
    hero: { width: 110, height: 110, textSize: '2.5rem', subSize: '0.95rem' },
  };

  const current = sizeMap[size];

  return (
    <div className={`henderson-brand-lockup ${className}`}>
      {/* Handcrafted Historic Seal Emblem */}
      <svg
        width={current.width}
        height={current.height}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="henderson-emblem-svg"
        aria-label="Henderson's Coffee & Ice Cream Authentic Emblem"
      >
        <defs>
          <radialGradient id="sealWoodGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#362318" />
            <stop offset="100%" stopColor="#140d08" />
          </radialGradient>
          <linearGradient id="goldLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fae4a0" />
            <stop offset="50%" stopColor="#c99b3e" />
            <stop offset="100%" stopColor="#875e18" />
          </linearGradient>
        </defs>

        {/* Outer Vintage Beaded Ring */}
        <circle cx="60" cy="60" r="56" stroke="url(#goldLeafGrad)" strokeWidth="2.5" fill="url(#sealWoodGlow)" />
        <circle cx="60" cy="60" r="51" stroke="url(#goldLeafGrad)" strokeWidth="1" strokeDasharray="3 3" opacity="0.85" />
        <circle cx="60" cy="60" r="46" stroke="rgba(201, 155, 62, 0.45)" strokeWidth="1" />

        {/* Heritage Flank Stars */}
        <path d="M 22 60 L 25 57 L 24 61 Z" fill="#f0c56b" />
        <path d="M 98 60 L 95 57 L 96 61 Z" fill="#f0c56b" />

        {/* Coffee Cup / Steam */}
        <path d="M 45 42 Q 43 35 48 30 Q 52 26 49 22" stroke="#d97718" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.85" />
        <path d="M 52 40 Q 55 33 51 28 Q 47 24 53 20" stroke="#f0c56b" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M 60 42 Q 58 35 63 30 Q 67 26 64 22" stroke="#d97718" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.85" />

        {/* Coffee Cup Silhouette */}
        <path d="M 40 45 L 68 45 C 68 57 59 66 54 66 C 49 66 40 57 40 45 Z" fill="#c99b3e" />
        <path d="M 68 49 C 74 49 76 56 70 60" stroke="#c99b3e" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Waffle Cone & Ice Cream Scoop */}
        <path d="M 72 40 C 72 34 78 30 84 34 C 88 38 88 44 84 48 C 80 50 74 46 72 40 Z" fill="#fdfbf7" opacity="0.95" />
        <path d="M 73 47 L 85 70 L 87 47 Z" fill="#875e18" opacity="0.9" />
        <path d="M 76 52 L 85 58 M 75 58 L 84 64" stroke="#f0c56b" strokeWidth="1" opacity="0.75" />

        {/* EST. 2018 Ribbon */}
        <rect x="28" y="74" width="64" height="16" rx="3" fill="#140d08" stroke="#c99b3e" strokeWidth="1.5" />
        <text x="60" y="86" textAnchor="middle" fill="#f0c56b" fontSize="8.5" fontFamily="var(--font-vintage-seal)" fontWeight="700" letterSpacing="2">
          EST. 2018
        </text>

        {/* Seal Dots */}
        <circle cx="50" cy="99" r="1.5" fill="#c99b3e" />
        <circle cx="60" cy="101" r="2" fill="#f0c56b" />
        <circle cx="70" cy="99" r="1.5" fill="#c99b3e" />
      </svg>

      {/* Brand Typography */}
      <div className="henderson-brand-text">
        <span className="brand-name" style={{ fontSize: current.textSize }}>
          Henderson’s
        </span>
        <span className="brand-subtext" style={{ fontSize: current.subSize }}>
          COFFEE &amp; ICE CREAM
        </span>
        {showTagline && (
          <span className="brand-tagline">Historic Main Street • Small-Batch Roastery &amp; Creamery</span>
        )}
      </div>

      <style jsx>{`
        .henderson-brand-lockup {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          user-select: none;
        }
        .henderson-emblem-svg {
          flex-shrink: 0;
          filter: drop-shadow(0 3px 12px rgba(0, 0, 0, 0.6));
          transition: transform 0.25s ease;
        }
        .henderson-brand-lockup:hover .henderson-emblem-svg {
          transform: scale(1.03);
        }
        .henderson-brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.12;
        }
        .brand-name {
          font-family: var(--font-vintage-seal);
          font-weight: 700;
          color: var(--color-cream-foam);
          letter-spacing: 0.05em;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
        }
        .brand-subtext {
          font-family: var(--font-sans);
          font-weight: 600;
          color: var(--color-gold-leaf);
          letter-spacing: 0.18em;
          margin-top: 3px;
          text-transform: uppercase;
        }
        .brand-tagline {
          font-size: 0.75rem;
          color: var(--color-beige-muted);
          letter-spacing: 0.04em;
          margin-top: 4px;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}
