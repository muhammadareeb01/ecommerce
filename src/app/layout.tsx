import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppChat from '@/components/ui/WhatsAppChat';
import { ReduxProvider } from '@/components/providers/ReduxProvider';
import { ToastContainer } from 'react-toastify';
import { client } from '@/sanity/lib/client';
import { GET_SETTINGS_QUERY } from '@/sanity/lib/queries';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://bulkvapes.us'),
  title: {
    default: 'Bulk Vapes USA | Premium Wholesale Vape Distributor',
    template: '%s | Bulk Vapes USA'
  },
  description: 'America\'s leading wholesale distributor for premium disposable vapes, cartridges, and e-liquids. Secure crypto payments and fast discreet shipping.',
  keywords: ['bulk vapes', 'wholesale vapes', 'disposable vapes bulk', 'vape distributor usa', 'buy vapes with crypto'],
  authors: [{ name: 'VapeFlow USA' }],
  creator: 'VapeFlow USA',
  publisher: 'VapeFlow USA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bulkvapes.us',
    siteName: 'Bulk Vapes USA',
    title: 'Bulk Vapes USA | Premium Wholesale Vape Distributor',
    description: 'Leading supplier of high-performance disposable vapes and hardware. Wholesale margins starting at low MOQs.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bulk Vapes USA Wholesale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bulk Vapes USA | Premium Wholesale Vape Distributor',
    description: 'Leading supplier of high-performance disposable vapes and hardware.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await client.fetch(GET_SETTINGS_QUERY);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
            <Header logoUrl={settings?.logoUrl} />
            <main className="min-h-screen">
            {children}
            </main>
            <Footer />
            <ToastContainer />
            <WhatsAppChat />
        </ReduxProvider>
      </body>
    </html>
  );
}
