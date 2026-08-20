import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: "Henderson’s Coffee & Ice Cream | Historic Neighborhood Gathering Place",
  description: "Locally owned coffeehouse and small-batch creamery in a warm historic setting with 100-year-old exposed brick, warm amber lighting, artisan espresso, handcrafted ice cream, and genuine hospitality.",
  keywords: ["Henderson's Coffee", "Ice Cream", "Espresso", "Historic Coffeehouse", "Artisan Coffee", "Neighborhood Gathering Place", "Mableton GA", "Mableton Coffee Shop"],
  openGraph: {
    title: "Henderson’s Coffee & Ice Cream | Historic Neighborhood Gathering Place",
    description: "Handcrafted specialty coffee, small-batch churned ice cream, and cozy historic atmosphere.",
    url: "https://hendersonscoffee.com",
    siteName: "Henderson's Coffee & Ice Cream",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: '#140e0a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
