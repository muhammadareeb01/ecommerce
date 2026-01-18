import { Metadata } from 'next';
import FAQClient from './FAQClient';
import { client } from '@/sanity/lib/client';
import { GET_ALL_FAQS_QUERY } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Wholesale FAQs | Bulk Vapes USA',
  description: 'Frequently asked questions about buying bulk vapes, shipping times, and wholesale ordering process.',
};

export const dynamic = 'force-dynamic';

export default async function FAQPage() {
  const faqs = await client.fetch(GET_ALL_FAQS_QUERY);

  return <FAQClient initialFaqs={faqs} />;
}
