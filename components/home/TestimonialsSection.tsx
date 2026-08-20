'use client';

import React from 'react';
import { REVIEWS } from '@/data/storeInfo';
import VintageDivider from '../ui/VintageDivider';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-pre-title">Community Love</span>
          <h2 className="section-title">Words From Our Neighbors</h2>
          <VintageDivider symbol="★" maxWidth="240px" />
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {REVIEWS.map((rev) => (
            <div key={rev.id} className="review-card vintage-card">
              <Quote size={26} className="quote-icon" />
              <div className="stars-row" aria-label={`${rev.rating} out of 5 stars`}>
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#f0c56b" color="#f0c56b" />
                ))}
              </div>
              <p className="review-text">&ldquo;{rev.quote}&rdquo;</p>
              <div className="author-row">
                <span className="author-name">{rev.author}</span>
                <span className="author-neighborhood">{rev.neighborhood}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          background: var(--color-espresso-base);
          position: relative;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .review-card {
          padding: 32px 26px;
          background: var(--color-walnut-surface);
          border: 1px solid var(--border-card);
          display: flex;
          flex-direction: column;
          position: relative;
        }

        :global(.quote-icon) {
          color: rgba(201, 155, 62, 0.4);
          margin-bottom: 12px;
        }

        .stars-row {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
        }

        .review-text {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--color-cream-foam);
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .author-row {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border-hairline);
          padding-top: 12px;
        }

        .author-name {
          font-family: var(--font-sans);
          font-weight: 600;
          color: var(--color-gold-leaf);
          font-size: 0.96rem;
        }

        .author-neighborhood {
          font-size: 0.8rem;
          color: var(--color-beige-muted);
        }

        @media (max-width: 960px) {
          .reviews-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
