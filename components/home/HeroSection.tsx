'use client';

import React from 'react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import HendersonLogo from '../branding/HendersonLogo';
import VintageDivider from '../ui/VintageDivider';
import { STORE_INFO } from '@/data/storeInfo';
import { Coffee, MapPin, Flame, IceCream, Clock, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg-texture" />
      <div className="hero-amber-lantern" />
      <div className="hero-brick-ambient" />

      <div className="container hero-container">
        {/* Heritage Ribbon Badge */}
        <div className="hero-badge-container">
          <Badge variant="gold" size="md" icon={<Sparkles size={14} />}>
            Historic Main Street Roastery &amp; Creamery
          </Badge>
        </div>

        {/* Central Henderson Emblem */}
        <div className="hero-seal-wrapper">
          <HendersonLogo size="hero" />
        </div>

        {/* Main Editorial Headline */}
        <h1 className="hero-title">
          Where Historic Warmth Meets <br />
          <span className="hero-caramel-text">Artisan Coffee &amp; Churned Ice Cream</span>
        </h1>

        <VintageDivider symbol="✦" maxWidth="240px" />

        {/* Subtitle / Narrative */}
        <p className="hero-description">
          Step off Main Street into our century-old brick sanctuary. Bask in the warm amber glow of vintage lighting, savor freshly pulled espresso, and enjoy slow-churned heirloom ice cream crafted for true Southern hospitality.
        </p>

        {/* Action Buttons */}
        <div className="hero-cta-group">
          <Button href="#menu" variant="amber" size="lg">
            <Coffee size={18} />
            <span>Explore Handcrafted Menu</span>
          </Button>
          <Button href="#location" variant="outline" size="lg">
            <MapPin size={18} />
            <span>Visit Our Main St. Shop</span>
          </Button>
        </div>

        {/* 3 Pillars Quick Bar */}
        <div className="hero-pillars-grid">
          <div className="pillar-item">
            <div className="pillar-icon-box">
              <Flame size={20} />
            </div>
            <div className="pillar-text">
              <h4>Small-Batch Roasting</h4>
              <p>Specialty origin beans roasted in-house</p>
            </div>
          </div>

          <div className="pillar-item">
            <div className="pillar-icon-box">
              <IceCream size={20} />
            </div>
            <div className="pillar-text">
              <h4>Heirloom Creamery</h4>
              <p>Hand-dipped churned Southern flavors</p>
            </div>
          </div>

          <div className="pillar-item">
            <div className="pillar-icon-box">
              <Clock size={20} />
            </div>
            <div className="pillar-text">
              <h4>Open 7 Days a Week</h4>
              <p>Morning espresso from 6:30 AM daily</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 94vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: calc(var(--header-height) + 64px);
          padding-bottom: 84px;
          overflow: hidden;
          background: linear-gradient(180deg, var(--color-charcoal) 0%, var(--color-espresso-dark) 100%);
        }

        .hero-bg-texture {
          position: absolute;
          inset: 0;
          opacity: 0.12;
          background-image: radial-gradient(var(--color-caramel-primary) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        .hero-amber-lantern {
          position: absolute;
          width: 580px;
          height: 580px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(217, 119, 24, 0.16) 0%, transparent 65%);
          filter: blur(50px);
          top: 15%;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }

        .hero-brick-ambient {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(135, 49, 35, 0.14) 0%, transparent 65%);
          filter: blur(60px);
          bottom: 5%;
          left: 8%;
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 960px;
        }

        .hero-badge-container {
          margin-bottom: 24px;
        }

        .hero-seal-wrapper {
          margin-bottom: 24px;
          transition: transform 0.3s ease;
        }
        .hero-seal-wrapper:hover {
          transform: scale(1.02);
        }

        .hero-title {
          font-size: clamp(2.3rem, 5.2vw, 3.8rem);
          font-weight: 700;
          color: var(--color-cream-foam);
          line-height: 1.15;
          margin-bottom: 12px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        }

        .hero-caramel-text {
          background: linear-gradient(180deg, #fae4a0 0%, #e38624 50%, #c46912 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-style: italic;
        }

        .hero-description {
          font-size: clamp(1.05rem, 2.1vw, 1.22rem);
          line-height: 1.7;
          color: var(--color-beige-body);
          max-width: 780px;
          margin-bottom: 36px;
        }

        .hero-cta-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 56px;
        }

        .hero-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          width: 100%;
          border-top: 1px solid var(--border-hairline);
          padding-top: 36px;
        }

        .pillar-item {
          display: flex;
          align-items: center;
          gap: 14px;
          text-align: left;
          background: var(--color-walnut-surface);
          border: 1px solid var(--border-card);
          padding: 16px 20px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-subtle);
          transition: var(--transition-tactile);
        }
        .pillar-item:hover {
          border-color: var(--border-gold);
          transform: translateY(-2px);
        }

        .pillar-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background: rgba(201, 155, 62, 0.15);
          color: var(--color-gold-leaf);
          border: 1px solid var(--color-brass-border);
          flex-shrink: 0;
        }

        .pillar-text h4 {
          font-family: var(--font-vintage-seal);
          font-size: 0.92rem;
          color: var(--color-cream-foam);
          letter-spacing: 0.04em;
          margin-bottom: 2px;
        }

        .pillar-text p {
          font-size: 0.82rem;
          color: var(--color-beige-muted);
          line-height: 1.4;
          margin: 0;
        }

        @media (max-width: 860px) {
          .hero-pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
