'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import HendersonLogo from '../branding/HendersonLogo';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { STORE_INFO } from '@/data/storeInfo';
import { MapPin, Clock, Menu, X, ShoppingBag, Flame } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Handcrafted Menu', href: '#menu' },
    { name: 'Coffee & Creamery', href: '#offerings' },
    { name: 'The Atmosphere', href: '#atmosphere' },
    { name: 'Our Heritage', href: '#story' },
    { name: 'Hours & Location', href: '#location' },
  ];

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Heritage Announcement Ribbon */}
      <div className="announcement-bar">
        <div className="container announcement-inner">
          <div className="announcement-text">
            <Badge variant="caramel" size="sm" icon={<Flame size={12} />}>
              Fresh Roasted Daily
            </Badge>
            <span className="announcement-message">{STORE_INFO.announcement}</span>
          </div>
          <div className="announcement-contact">
            <span className="info-item">
              <MapPin size={13} className="info-icon" />
              <span>{STORE_INFO.address.street}, {STORE_INFO.address.city}</span>
            </span>
            <span className="info-item">
              <Clock size={13} className="info-icon" />
              <span>Open Daily 6:30 AM</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="navbar-container">
        <div className="container navbar-inner">
          {/* Brand Logo */}
          <Link href="/" className="logo-link">
            <HendersonLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="header-actions">
            <Button href="#menu" variant="brass" size="sm" className="order-cta-btn">
              <ShoppingBag size={15} />
              <span>Order Ahead</span>
            </Button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-inner">
            <nav className="mobile-nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mobile-drawer-footer">
              <Button
                href="#menu"
                variant="amber"
                size="md"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Ahead for Pickup
              </Button>
              <div className="mobile-store-details">
                <p className="address">{STORE_INFO.address.fullAddress}</p>
                <p className="phone">{STORE_INFO.phone}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: var(--transition-tactile);
          background: rgba(22, 14, 10, 0.82);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-gold);
        }
        .site-header.scrolled {
          background: rgba(14, 9, 6, 0.96);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.7);
          border-bottom-color: var(--color-brass-primary);
        }

        .announcement-bar {
          background: linear-gradient(90deg, #3d140e 0%, #1e120b 50%, #3d140e 100%);
          border-bottom: 1px solid rgba(201, 155, 62, 0.2);
          padding: 6px 0;
          font-size: 0.8rem;
          color: var(--color-cream-soft);
        }
        .announcement-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .announcement-text {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .announcement-message {
          color: var(--color-cream-foam);
          font-weight: 500;
        }
        .announcement-contact {
          display: flex;
          align-items: center;
          gap: 20px;
          color: var(--color-beige-muted);
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        :global(.info-icon) {
          color: var(--color-gold-leaf);
        }

        .navbar-container {
          padding: 12px 0;
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo-link {
          text-decoration: none;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav-link {
          font-family: var(--font-sans);
          font-size: 0.94rem;
          font-weight: 500;
          color: var(--color-beige-body);
          text-decoration: none;
          letter-spacing: 0.02em;
          position: relative;
          padding: 6px 0;
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: var(--color-gold-leaf);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-brass-primary);
          transition: width 0.25s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .mobile-toggle-btn {
          display: none;
          background: transparent;
          border: 1px solid var(--border-gold);
          color: var(--color-cream-foam);
          padding: 6px;
          border-radius: var(--radius-sm);
          cursor: pointer;
        }

        .mobile-drawer {
          display: none;
        }

        @media (max-width: 960px) {
          .announcement-contact {
            display: none;
          }
          .desktop-nav {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mobile-drawer {
            display: block;
            background: rgba(18, 11, 7, 0.98);
            border-bottom: 1px solid var(--border-gold);
            padding: 24px 20px;
          }
          .mobile-nav-links {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 24px;
          }
          .mobile-nav-link {
            font-size: 1.15rem;
            color: var(--color-cream-foam);
            text-decoration: none;
            font-family: var(--font-vintage-seal);
            padding-bottom: 8px;
            border-bottom: 1px solid rgba(201, 155, 62, 0.15);
          }
          .mobile-store-details {
            margin-top: 16px;
            text-align: center;
            font-size: 0.85rem;
            color: var(--color-beige-muted);
          }
        }
      `}</style>
    </header>
  );
}
