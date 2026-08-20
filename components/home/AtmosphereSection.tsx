'use client';

import React from 'react';
import { ATMOSPHERE_HIGHLIGHTS } from '@/data/storeInfo';
import VintageDivider from '../ui/VintageDivider';
import { Building2, Lamp, Armchair, HeartHandshake } from 'lucide-react';

export default function AtmosphereSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 size={26} />,
    Lamp: <Lamp size={26} />,
    Armchair: <Armchair size={26} />,
    HeartHandshake: <HeartHandshake size={26} />,
  };

  return (
    <section id="atmosphere" className="atmosphere-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pre-title">The Physical Space</span>
          <h2 className="section-title">An Authentic Historic Sanctuary</h2>
          <VintageDivider symbol="✦" maxWidth="260px" />
          <p className="section-subtitle">
            Not a sterile corporate template, but a preserved piece of Southern history. Built with 100-year-old exposed brick, soft filament amber lighting, handcrafted walnut tables, and deep dark brown leather seating.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="atmosphere-grid">
          {ATMOSPHERE_HIGHLIGHTS.map((item, index) => (
            <div key={item.id} className="atmosphere-card vintage-card">
              <div className="card-top">
                <div className="card-icon-container">
                  {iconMap[item.iconName]}
                </div>
                <span className="card-index">0{index + 1}</span>
              </div>
              <span className="card-subtitle">{item.subtitle}</span>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <div className="card-bottom-bar" />
            </div>
          ))}
        </div>

        {/* Historic Atmosphere Callout Quote */}
        <div className="atmosphere-callout">
          <div className="callout-inner">
            <span className="callout-label">Historic Preservation &amp; Community Soul</span>
            <blockquote className="callout-quote">
              &ldquo;We preserved every original brick and timber beam so that the moment you walk through our doors, you feel the comfort of a true neighborhood gathering place.&rdquo;
            </blockquote>
            <cite className="callout-author">— The Henderson Family, Proprietors</cite>
          </div>
        </div>
      </div>

      <style jsx>{`
        .atmosphere-section {
          position: relative;
          background: var(--color-espresso-base);
          border-top: 1px solid var(--border-card);
          border-bottom: 1px solid var(--border-card);
        }

        .atmosphere-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }

        .atmosphere-card {
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          background: var(--color-walnut-surface);
          border: 1px solid var(--border-card);
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .card-icon-container {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-sm);
          background: rgba(201, 155, 62, 0.12);
          border: 1px solid var(--color-brass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-gold-leaf);
        }

        .card-index {
          font-family: var(--font-vintage-seal);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-beige-subtle);
          opacity: 0.5;
        }

        .card-subtitle {
          font-family: var(--font-sans);
          font-size: 0.76rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--color-caramel-light);
          margin-bottom: 8px;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-cream-foam);
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .card-description {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--color-beige-body);
          margin-bottom: 16px;
        }

        .card-bottom-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--color-brick-primary), var(--color-caramel-primary));
          opacity: 0.5;
          transition: opacity 0.25s ease;
        }

        .atmosphere-card:hover .card-bottom-bar {
          opacity: 1;
        }

        .atmosphere-callout {
          background: linear-gradient(145deg, #301712 0%, var(--color-walnut-surface) 100%);
          border: 1px solid var(--color-brass-border);
          border-radius: var(--radius-md);
          padding: 42px 32px;
          text-align: center;
          position: relative;
          box-shadow: var(--shadow-card);
        }

        .callout-label {
          font-family: var(--font-vintage-seal);
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--color-gold-leaf);
          display: block;
          margin-bottom: 14px;
        }

        .callout-quote {
          font-family: var(--font-serif);
          font-size: clamp(1.2rem, 2.5vw, 1.55rem);
          font-style: italic;
          color: var(--color-cream-foam);
          line-height: 1.55;
          max-width: 820px;
          margin: 0 auto 16px;
        }

        .callout-author {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--color-beige-body);
          letter-spacing: 0.05em;
          font-style: normal;
        }

        @media (max-width: 1024px) {
          .atmosphere-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .atmosphere-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
