import { Metadata } from 'next';
import ProductsClient from './ProductsClient';
import { client } from '@/sanity/lib/client';
import { GET_ALL_PRODUCTS_QUERY } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'All Vape Products | Wholesale & Bulk | Bulk Vapes USA',
  description: 'Browse our complete catalog of disposable vapes, cartridges, and hardware. Wholesale pricing available for all products.',
};

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const products = await client.fetch(GET_ALL_PRODUCTS_QUERY);

  // Map Sanity data to match component expectations if needed
  const mappedProducts = products.map((p: any) => ({
    ...p,
    id: p._id, // Map _id to id for compatibility
  }));

  return <ProductsClient initialProducts={mappedProducts} />;
}

