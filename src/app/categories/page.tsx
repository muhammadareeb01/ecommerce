import { Metadata } from 'next';
import CategoriesClient from './CategoriesClient';
import { client } from '@/sanity/lib/client';
import { GET_ALL_PRODUCTS_QUERY, GET_ALL_CATEGORIES_QUERY, GET_CATEGORIES_PAGE_CONTENT_QUERY } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Wholesale Vape Categories | Bulk Disposable Vapes USA',
  description: 'Browse our wholesale vape categories: Nicotine Vapes, THC Vapes, THCA, and Vape Cartridges. Buy in bulk with wholesale pricing and fast USA shipping.',
};

export const dynamic = 'force-dynamic';

export default async function CategoriesPage() {
  const products = await client.fetch(GET_ALL_PRODUCTS_QUERY);
  const categories = await client.fetch(GET_ALL_CATEGORIES_QUERY);
  const pageContent = await client.fetch(GET_CATEGORIES_PAGE_CONTENT_QUERY);

  // Map Sanity data to match component expectations if needed
  // Assuming the query returns the structure we want, but let's ensure 'id' is present if used
  const mappedProducts = products.map((p: any) => ({
    ...p,
    id: p._id, // Map _id to id for compatibility
  }));

  const mappedCategories = categories.map((c: any) => ({
    id: c._id,
    name: c.title,
    slug: c.slug,
    description: c.description
  }));

  return (
    <CategoriesClient 
      initialProducts={mappedProducts} 
      initialCategories={mappedCategories} 
      pageContent={pageContent}
    />
  );
}
