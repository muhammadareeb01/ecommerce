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
  title: 'Bulk Vapes USA | Premium Vape Distributor',
  description: 'Leading distributor of disposable vapes, e-liquids, and pods.',
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
            <Footer logoUrl={settings?.logoUrl} />
            <ToastContainer />
            <WhatsAppChat />
        </ReduxProvider>
      </body>
    </html>
  );
}
