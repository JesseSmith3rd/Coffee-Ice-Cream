'use client';

import React from 'react';
import HendersonLogo from '../branding/HendersonLogo';
import Badge from '../ui/Badge';
import { STORE_INFO, STORE_HOURS } from '@/data/storeInfo';
import { MapPin, Phone, Mail, Clock, Coffee, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top-accent" />
      <div className="container footer-content">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <HendersonLogo size="lg" showTagline={true} />
            <p className="footer-bio">
              Handcrafting moments of warmth in the heart of our historic neighborhood. Where the rich aroma of fresh-roasted beans meets handcrafted Southern creamery tradition.
            </p>
            <div className="footer-social-badges">
              <Badge variant="gold" size="sm">#HendersonsCoffee</Badge>
              <Badge variant="caramel" size="sm">#HistoricMainStreet</Badge>
            </div>
          </div>

          {/* Quick Hours Col */}
          <div className="footer-col">
            <h4 className="footer-heading">
              <Clock size={16} className="heading-icon" />
              <span>Gathering Hours</span>
            </h4>
            <ul className="hours-list">
              {STORE_HOURS.map((item) => (
                <li key={item.day} className="hours-item">
                  <span className="day">{item.day}</span>
                  <span className="time">{item.open} – {item.close}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit & Contact Col */}
          <div className="footer-col">
            <h4 className="footer-heading">
              <MapPin size={16} className="heading-icon" />
              <span>Visit Our Shop</span>
            </h4>
            <address className="footer-address">
              <p className="address-line">{STORE_INFO.address.street}</p>
              <p className="address-line">{STORE_INFO.address.city}, {STORE_INFO.address.state} {STORE_INFO.address.zip}</p>
              <a
                href={`https://maps.google.com/?q=${STORE_INFO.address.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="directions-link"
              >
                Get Directions &rarr;
              </a>
            </address>

            <div className="footer-contact-items">
              <div className="contact-item">
                <Phone size={14} className="contact-icon" />
                <span>{STORE_INFO.phone}</span>
              </div>
              <div className="contact-item">
                <Mail size={14} className="contact-icon" />
                <span>{STORE_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Offerings & Community */}
          <div className="footer-col">
            <h4 className="footer-heading">
              <Coffee size={16} className="heading-icon" />
              <span>What We Craft</span>
            </h4>
            <ul className="footer-links">
              <li><a href="#menu">Historic Blend Espresso</a></li>
              <li><a href="#menu">Single-Origin Slow Pour-Overs</a></li>
              <li><a href="#menu">Small-Batch Artisan Ice Cream</a></li>
              <li><a href="#menu">Signature Espresso Affogatos</a></li>
              <li><a href="#menu">Fresh Morning Bakery &amp; Brioche</a></li>
              <li><a href="#atmosphere">Walnut Community Tables</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} {STORE_INFO.name}. All Rights Reserved. Crafted with Southern pride for our local community.
          </p>
          <div className="footer-sub-links">
            <span>Locally Owned &amp; Operated</span>
            <span className="sep">•</span>
            <span>Est. {STORE_INFO.establishedYear}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background: var(--color-charcoal);
          border-top: 1px solid var(--border-gold);
          position: relative;
          color: var(--color-beige-muted);
          padding-top: 64px;
          padding-bottom: 32px;
        }
        .footer-top-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--color-caramel-primary), var(--color-brass-primary), var(--color-brick-accent), transparent);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 50px;
        }
        .brand-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-bio {
          font-size: 0.9rem;
          line-height: 1.65;
          color: var(--color-beige-body);
        }
        .footer-social-badges {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .footer-heading {
          font-family: var(--font-vintage-seal);
          font-size: 1.05rem;
          color: var(--color-cream-foam);
          letter-spacing: 0.05em;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid var(--border-gold);
          padding-bottom: 8px;
        }
        :global(.heading-icon) {
          color: var(--color-gold-leaf);
        }

        .hours-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.86rem;
        }
        .hours-item {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px dashed var(--border-hairline);
          padding-bottom: 4px;
        }
        .day {
          color: var(--color-beige-body);
          font-weight: 500;
        }
        .time {
          color: var(--color-gold-leaf);
        }

        .footer-address {
          font-style: normal;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 16px;
        }
        .address-line {
          color: var(--color-beige-body);
          margin-bottom: 2px;
        }
        .directions-link {
          display: inline-block;
          margin-top: 6px;
          font-size: 0.84rem;
          color: var(--color-gold-leaf);
          text-decoration: none;
          font-weight: 600;
        }
        .directions-link:hover {
          text-decoration: underline;
        }

        .footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.86rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--color-beige-body);
        }
        :global(.contact-icon) {
          color: var(--color-gold-leaf);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
          font-size: 0.88rem;
        }
        .footer-links a {
          color: var(--color-beige-body);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-links a:hover {
          color: var(--color-gold-leaf);
          padding-left: 4px;
        }

        .footer-bottom {
          border-top: 1px solid var(--border-hairline);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.82rem;
          flex-wrap: wrap;
          gap: 12px;
        }
        .copyright {
          margin: 0;
          color: var(--color-beige-muted);
        }
        .footer-sub-links {
          display: flex;
          gap: 8px;
          align-items: center;
          color: var(--color-beige-subtle);
        }
        .sep {
          color: var(--color-caramel-primary);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
