'use client';

import React from 'react';
import Button from '../ui/Button';
import VintageDivider from '../ui/VintageDivider';
import { STORE_INFO } from '@/data/storeInfo';
import { History, Users, Award } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="story" className="story-section section-padding">
      <div className="container">
        <div className="story-grid">
          {/* Left Text / Narrative */}
          <div className="story-narrative">
            <span className="section-pre-title">Our Heritage &amp; Roots</span>
            <h2 className="story-title">
              Preserving History, One Cup &amp; One Scoop at a Time
            </h2>
            <VintageDivider symbol="✦" align="left" maxWidth="200px" />

            <p className="narrative-p">
              In 2018, when the historic 142 Main Street storefront became available, our family saw beyond decades of forgotten plaster to the magnificent red brick masonry laid by hand over a century ago.
            </p>

            <p className="narrative-p">
              We painstakingly restored the original brick, hung warm incandescent filament fixtures, and crafted solid walnut tables from regional timber. Our dream was to build a timeless haven where Southern hospitality greets everyone with open arms.
            </p>

            <p className="narrative-p">
              Today, Henderson’s is where early commuters find their steady double espresso, where families gather for after-school ice cream waffle cones, and where our community gathers for quiet reflection and shared laughter.
            </p>

            {/* Value Pillars */}
            <div className="story-stats-grid">
              <div className="story-stat-card">
                <History size={22} className="stat-icon" />
                <span className="stat-value">1910s</span>
                <span className="stat-label">Historic Masonry</span>
              </div>
              <div className="story-stat-card">
                <Award size={22} className="stat-icon" />
                <span className="stat-value">100%</span>
                <span className="stat-label">Artisan Roast</span>
              </div>
              <div className="story-stat-card">
                <Users size={22} className="stat-icon" />
                <span className="stat-value">7 Days</span>
                <span className="stat-label">Community Warmth</span>
              </div>
            </div>

            <div className="story-cta-row">
              <Button href="#location" variant="brass" size="md">
                Plan Your Visit to Main St.
              </Button>
            </div>
          </div>

          {/* Right Visual Frame / Seal Artwork */}
          <div className="story-visual-frame">
            <div className="frame-outer">
              <div className="frame-inner">
                <div className="frame-badge">Historic Main Street</div>
                <div className="frame-centerpiece">
                  <span className="seal-established">ESTABLISHED</span>
                  <span className="seal-year">{STORE_INFO.establishedYear}</span>
                  <span className="seal-location">HENDERSONVILLE, NC</span>
                  <div className="seal-tagline-box">
                    <span>&ldquo;A Warm Neighborhood Gathering Place for All&rdquo;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .story-section {
          background: var(--color-espresso-base);
          position: relative;
          overflow: hidden;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .story-title {
          font-size: clamp(2rem, 3.6vw, 2.8rem);
          font-weight: 700;
          color: var(--color-cream-foam);
          line-height: 1.2;
        }

        .narrative-p {
          font-size: 1.02rem;
          line-height: 1.75;
          color: var(--color-beige-body);
          margin-bottom: 18px;
        }

        .story-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin: 32px 0;
        }

        .story-stat-card {
          background: var(--color-walnut-surface);
          border: 1px solid var(--border-card);
          padding: 18px 14px;
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: var(--shadow-subtle);
        }

        :global(.stat-icon) {
          color: var(--color-gold-leaf);
          margin-bottom: 6px;
        }

        .stat-value {
          font-family: var(--font-vintage-seal);
          font-size: 1.28rem;
          font-weight: 700;
          color: var(--color-cream-foam);
        }

        .stat-label {
          font-size: 0.78rem;
          color: var(--color-beige-muted);
          margin-top: 2px;
        }

        .story-cta-row {
          margin-top: 24px;
        }

        .story-visual-frame {
          display: flex;
          justify-content: center;
        }

        .frame-outer {
          width: 100%;
          max-width: 420px;
          aspect-ratio: 4/5;
          background: linear-gradient(145deg, #382419 0%, #170f0a 100%);
          border: 2px solid var(--color-brass-primary);
          border-radius: var(--radius-lg);
          padding: 16px;
          box-shadow: var(--shadow-elevated), var(--shadow-gold-rim);
          position: relative;
        }

        .frame-inner {
          width: 100%;
          height: 100%;
          border: 1px dashed rgba(201, 155, 62, 0.45);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          background: radial-gradient(circle at center, #26160e 0%, #120b07 100%);
          padding: 30px 24px;
          text-align: center;
        }

        .frame-badge {
          position: absolute;
          top: -14px;
          background: var(--color-brick-primary);
          color: var(--color-cream-foam);
          font-family: var(--font-vintage-seal);
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 4px 16px;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-gold-leaf);
          box-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }

        .frame-centerpiece {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .seal-established {
          font-family: var(--font-sans);
          font-size: 0.78rem;
          letter-spacing: 0.25em;
          color: var(--color-caramel-light);
          font-weight: 600;
        }

        .seal-year {
          font-family: var(--font-vintage-seal);
          font-size: 3.6rem;
          font-weight: 800;
          color: var(--color-gold-leaf);
          line-height: 1.1;
          margin: 6px 0;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
        }

        .seal-location {
          font-family: var(--font-sans);
          font-size: 0.84rem;
          letter-spacing: 0.16em;
          color: var(--color-cream-foam);
          font-weight: 600;
          margin-bottom: 22px;
        }

        .seal-tagline-box {
          border-top: 1px solid var(--border-gold);
          border-bottom: 1px solid var(--border-gold);
          padding: 12px 18px;
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--color-beige-body);
          font-size: 0.96rem;
        }

        @media (max-width: 960px) {
          .story-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
