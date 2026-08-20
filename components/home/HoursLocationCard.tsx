'use client';

import React, { useMemo } from 'react';
import { STORE_INFO, STORE_HOURS } from '@/data/storeInfo';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import VintageDivider from '../ui/VintageDivider';
import { Clock, MapPin, Navigation, Phone, Mail, Car, Sparkles } from 'lucide-react';

export default function HoursLocationCard() {
  const currentDayName = useMemo(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  }, []);

  return (
    <section id="location" className="hours-location-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pre-title">Gather With Us</span>
          <h2 className="section-title">Hours &amp; Main Street Location</h2>
          <VintageDivider symbol="✦" maxWidth="260px" />
          <p className="section-subtitle">
            Located right in the historic downtown core with comfortable indoor walnut booth seating and pet-friendly outdoor sidewalk bistro tables.
          </p>
        </div>

        {/* Dual Info Grid */}
        <div className="location-grid">
          {/* Hours Card */}
          <div className="hours-box vintage-card">
            <div className="box-header">
              <div className="box-icon-wrap">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="box-title">Weekly Schedule</h3>
                <div className="live-status-chip">
                  <span className="status-dot pulsing" />
                  <span>Open Today • Welcoming Community</span>
                </div>
              </div>
            </div>

            <div className="hours-table">
              {STORE_HOURS.map((item) => {
                const isToday = item.day === currentDayName;
                return (
                  <div key={item.day} className={`hours-row ${isToday ? 'today-highlight' : ''}`}>
                    <span className="day-name">
                      {item.day} {isToday && (
                        <Badge variant="caramel" size="sm">
                          Today
                        </Badge>
                      )}
                    </span>
                    <span className="time-range">{item.open} – {item.close}</span>
                  </div>
                );
              })}
            </div>

            <div className="early-bird-note">
              <Sparkles size={16} className="note-icon" />
              <span>Early commuter espresso window opens at 6:30 AM weekdays!</span>
            </div>
          </div>

          {/* Location & Contact Card */}
          <div className="contact-box vintage-card">
            <div className="box-header">
              <div className="box-icon-wrap">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="box-title">Main Street Shop</h3>
                <span className="box-subtitle">Historic Downtown District</span>
              </div>
            </div>

            <div className="address-block">
              <p className="street-line">{STORE_INFO.address.street}</p>
              <p className="city-line">{STORE_INFO.address.city}, {STORE_INFO.address.state} {STORE_INFO.address.zip}</p>
            </div>

            <div className="parking-info">
              <Car size={18} className="parking-icon" />
              <div>
                <strong style={{ color: 'var(--color-cream-foam)' }}>Easy Parking:</strong> Free 2-hour street parking right outside the storefront &amp; free municipal lot behind the brick building.
              </div>
            </div>

            <div className="contact-list">
              <div className="contact-row">
                <Phone size={16} className="contact-icon" />
                <span>{STORE_INFO.phone}</span>
              </div>
              <div className="contact-row">
                <Mail size={16} className="contact-icon" />
                <span>{STORE_INFO.email}</span>
              </div>
            </div>

            <div className="location-actions">
              <Button
                href={`https://maps.google.com/?q=${STORE_INFO.address.mapQuery}`}
                variant="amber"
                size="md"
                external={true}
                className="w-full"
              >
                <Navigation size={16} />
                <span>Get Driving &amp; Walking Directions</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hours-location-section {
          background: var(--color-espresso-dark);
          position: relative;
        }

        .location-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .hours-box, .contact-box {
          padding: 36px 32px;
          background: var(--color-walnut-surface);
          border: 1px solid var(--border-card);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .box-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-hairline);
        }

        .box-icon-wrap {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-sm);
          background: rgba(201, 155, 62, 0.14);
          border: 1px solid var(--color-brass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-gold-leaf);
        }

        .box-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-cream-foam);
          font-family: var(--font-serif);
        }

        .box-subtitle {
          font-size: 0.86rem;
          color: var(--color-beige-muted);
        }

        .live-status-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          color: var(--color-caramel-light);
          margin-top: 4px;
          font-weight: 600;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          display: inline-block;
        }

        .status-dot.pulsing {
          box-shadow: 0 0 8px #22c55e;
          animation: pulseDot 2s infinite;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.3); }
        }

        .hours-table {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
        }

        .hours-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.94rem;
          border-bottom: 1px dashed var(--border-hairline);
        }

        .hours-row.today-highlight {
          background: rgba(217, 119, 24, 0.12);
          border: 1px solid var(--border-amber);
        }

        .day-name {
          color: var(--color-beige-body);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .time-range {
          color: var(--color-gold-leaf);
          font-weight: 600;
        }

        .early-bird-note {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--color-beige-body);
          background: rgba(217, 119, 24, 0.08);
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-amber);
        }

        :global(.note-icon) {
          color: var(--color-caramel-light);
          flex-shrink: 0;
        }

        .address-block {
          margin-bottom: 20px;
        }

        .street-line {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-cream-foam);
          font-family: var(--font-serif);
          margin-bottom: 4px;
        }

        .city-line {
          font-size: 0.98rem;
          color: var(--color-beige-body);
        }

        .parking-info {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          background: var(--color-espresso-base);
          border: 1px solid var(--border-hairline);
          padding: 14px 16px;
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          color: var(--color-beige-body);
          margin-bottom: 20px;
          line-height: 1.5;
        }

        :global(.parking-icon) {
          color: var(--color-gold-leaf);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--color-beige-body);
          font-size: 0.94rem;
        }

        :global(.contact-icon) {
          color: var(--color-gold-leaf);
        }

        .location-actions {
          margin-top: auto;
        }

        @media (max-width: 860px) {
          .location-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
