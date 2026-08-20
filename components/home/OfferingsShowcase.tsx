'use client';

import React, { useState } from 'react';
import { MENU_ITEMS } from '@/data/menu';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import VintageDivider from '../ui/VintageDivider';
import { Coffee, IceCream, Cookie, Sparkles, Star } from 'lucide-react';

export default function OfferingsShowcase() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Full Selection', icon: Sparkles },
    { id: 'espresso', label: 'Espresso & Coffee', icon: Coffee },
    { id: 'ice-cream', label: 'Hand-Dipped Ice Cream', icon: IceCream },
    { id: 'specialty', label: 'Signature Affogatos', icon: Star },
    { id: 'bakery', label: 'Morning Bakery', icon: Cookie },
  ];

  const filteredItems = activeTab === 'all' 
    ? MENU_ITEMS 
    : activeTab === 'espresso'
    ? MENU_ITEMS.filter(i => i.category === 'espresso' || i.category === 'coffee')
    : MENU_ITEMS.filter(i => i.category === activeTab);

  return (
    <section id="menu" className="offerings-section section-padding">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <span className="section-pre-title">Handcrafted Menu</span>
          <h2 className="section-title">Artisan Coffee, Cones &amp; Confections</h2>
          <VintageDivider symbol="☕" maxWidth="260px" />
          <p className="section-subtitle">
            Every batch of beans is roasted for balance and complexity, and every scoop of ice cream is crafted from fresh local cream. Pure, wholesome ingredients prepared with Southern pride.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs" role="tablist" aria-label="Menu Categories">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(cat.id)}
                className={`category-tab-btn ${isActive ? 'active' : ''}`}
              >
                <Icon size={15} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-item-card vintage-card">
              <div className="item-header">
                <div className="item-title-group">
                  <h3 className="item-name">{item.name}</h3>
                  {item.originOrRoast && (
                    <span className="item-origin">{item.originOrRoast}</span>
                  )}
                </div>
                <span className="item-price">{item.price}</span>
              </div>

              <p className="item-description">{item.description}</p>

              {/* Flavor Notes Chips */}
              {item.flavorNotes && item.flavorNotes.length > 0 && (
                <div className="flavor-notes-row">
                  <span className="notes-label">Tasting Notes:</span>
                  <div className="notes-tags">
                    {item.flavorNotes.map((note) => (
                      <span key={note} className="note-chip">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer with Badges & Action */}
              <div className="item-card-footer">
                <div className="dietary-tags">
                  {item.dietary?.map((tag) => (
                    <Badge key={tag} variant="walnut" size="sm">
                      {tag}
                    </Badge>
                  ))}
                  {item.featured && (
                    <Badge variant="caramel" size="sm">
                      House Favorite
                    </Badge>
                  )}
                </div>

                <Button variant="outline" size="sm" className="item-order-btn">
                  Add to Order
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="menu-note-box">
          <p>
            ✨ Custom catering, espresso bars for weddings, or seasonal ice cream flight boards?{' '}
            <a href="#location" className="note-link">Speak with our baristas</a> or contact us directly.
          </p>
        </div>
      </div>

      <style jsx>{`
        .offerings-section {
          background: var(--color-espresso-dark);
          position: relative;
        }

        .category-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 44px;
        }

        .category-tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--color-walnut-surface);
          color: var(--color-beige-body);
          border: 1px solid var(--border-card);
          padding: 10px 22px;
          border-radius: var(--radius-full);
          font-family: var(--font-sans);
          font-size: 0.92rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-tactile);
        }

        .category-tab-btn:hover {
          color: var(--color-gold-leaf);
          border-color: var(--border-gold);
          background: var(--color-walnut-hover);
        }

        .category-tab-btn.active {
          background: var(--color-caramel-primary);
          color: #0e0906;
          font-weight: 700;
          border-color: var(--color-amber-glow);
          box-shadow: 0 4px 16px rgba(217, 119, 24, 0.4);
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .menu-item-card {
          padding: 26px 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: var(--color-walnut-surface);
          border: 1px solid var(--border-card);
          position: relative;
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 12px;
        }

        .item-name {
          font-size: 1.28rem;
          color: var(--color-cream-foam);
          font-family: var(--font-serif);
          font-weight: 700;
          line-height: 1.25;
        }

        .item-origin {
          display: block;
          font-size: 0.78rem;
          color: var(--color-gold-leaf);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 4px;
        }

        .item-price {
          font-family: var(--font-vintage-seal);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--color-gold-leaf);
          flex-shrink: 0;
        }

        .item-description {
          font-size: 0.94rem;
          line-height: 1.65;
          color: var(--color-beige-body);
          margin-bottom: 16px;
        }

        .flavor-notes-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .notes-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-beige-muted);
          font-weight: 600;
        }

        .notes-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .note-chip {
          font-size: 0.75rem;
          background: rgba(201, 155, 62, 0.1);
          color: var(--color-gold-leaf);
          border: 1px solid var(--color-brass-border);
          padding: 2px 9px;
          border-radius: 4px;
        }

        .item-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border-hairline);
          padding-top: 16px;
          margin-top: auto;
          flex-wrap: wrap;
          gap: 12px;
        }

        .dietary-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .menu-note-box {
          text-align: center;
          padding: 22px;
          background: var(--color-walnut-surface);
          border: 1px dashed var(--color-brass-border);
          border-radius: var(--radius-md);
          font-size: 0.95rem;
          color: var(--color-beige-body);
        }

        .note-link {
          color: var(--color-gold-leaf);
          text-decoration: underline;
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .menu-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
