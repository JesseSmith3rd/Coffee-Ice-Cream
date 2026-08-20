'use client';

import React from 'react';
import Image from 'next/image';

interface HendersonLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showTagline?: boolean;
  useImageLogo?: boolean;
  className?: string;
}

export default function HendersonLogo({
  size = 'md',
  showTagline = false,
  useImageLogo = false,
  className = '',
}: HendersonLogoProps) {
  const sizeMap = {
    sm: { imgSize: 40, textSize: '1.2rem', subSize: '0.62rem', gap: '8px' },
    md: { imgSize: 52, textSize: '1.45rem', subSize: '0.72rem', gap: '12px' },
    lg: { imgSize: 76, textSize: '1.85rem', subSize: '0.82rem', gap: '16px' },
    hero: { imgSize: 100, textSize: '2.8rem', subSize: '0.96rem', gap: '20px' },
  };

  const current = sizeMap[size];

  return (
    <div className={`henderson-brand-lockup ${className}`}>
      {/* If official logo image is enabled */}
      {useImageLogo ? (
        <div className="henderson-logo-img-wrap" style={{ width: current.imgSize, height: current.imgSize }}>
          <Image
            src="/images/branding/hendersons-logo.png"
            alt="Henderson's Coffee & Ice Cream"
            width={current.imgSize}
            height={current.imgSize}
            className="henderson-logo-img"
          />
        </div>
      ) : (
        /* Typographic Wordmark & Heritage Brand Seal */
        <div className="henderson-wordmark-seal" style={{ width: current.imgSize, height: current.imgSize }}>
          <span className="seal-monogram">H</span>
          <span className="seal-ring" />
        </div>
      )}

      {/* Classic Vintage Wordmark Typography */}
      <div className="henderson-brand-text">
        <span className="brand-name" style={{ fontSize: current.textSize }}>
          Henderson’s
        </span>
        <span className="brand-subtext" style={{ fontSize: current.subSize }}>
          COFFEE &amp; ICE CREAM
        </span>
        {showTagline && (
          <span className="brand-tagline">
            Historic Main Street • Small-Batch Roastery &amp; Creamery
          </span>
        )}
      </div>

      <style jsx>{`
        .henderson-brand-lockup {
          display: inline-flex;
          align-items: center;
          gap: ${current.gap};
          text-decoration: none;
          user-select: none;
        }

        .henderson-wordmark-seal {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #382419 0%, #170f0a 100%);
          border: 1.5px solid var(--color-brass-primary);
          border-radius: 50%;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.6);
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }

        .henderson-brand-lockup:hover .henderson-wordmark-seal {
          transform: scale(1.04);
          border-color: var(--color-gold-leaf);
        }

        .seal-monogram {
          font-family: var(--font-vintage-seal);
          font-size: calc(${current.imgSize}px * 0.52);
          font-weight: 700;
          color: var(--color-gold-leaf);
          line-height: 1;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
        }

        .seal-ring {
          position: absolute;
          inset: 3px;
          border: 1px dashed rgba(201, 155, 62, 0.5);
          border-radius: 50%;
          pointer-events: none;
        }

        .henderson-logo-img-wrap {
          position: relative;
          flex-shrink: 0;
        }

        :global(.henderson-logo-img) {
          object-fit: contain;
        }

        .henderson-brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
          text-align: left;
        }

        .brand-name {
          font-family: var(--font-vintage-seal);
          font-weight: 700;
          color: var(--color-cream-foam);
          letter-spacing: 0.04em;
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
          font-size: 0.76rem;
          color: var(--color-beige-muted);
          letter-spacing: 0.04em;
          margin-top: 4px;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}
