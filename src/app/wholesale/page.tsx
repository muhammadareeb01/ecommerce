import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { GET_WHOLESALE_PAGE_DATA_QUERY } from '@/sanity/lib/queries';
import WholesaleClient from '@/components/wholesale/WholesaleClient';

export const metadata: Metadata = {
  title: 'Wholesale & Bulk Supply | Premium Quality Vapes B2B',
  description: 'Join our wholesale program for the best tiered pricing on bulk vapes, hardware, and premium liquids. Reliable supply chain solutions for retailers worldwide.',
};

export const dynamic = 'force-dynamic';

export default async function WholesalePage() {
  const data = await client.fetch(GET_WHOLESALE_PAGE_DATA_QUERY);

  return (
    <WholesaleClient data={data} />
  );
}
