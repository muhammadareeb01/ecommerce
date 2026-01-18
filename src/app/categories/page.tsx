import { Metadata } from 'next';
import CategoriesClient from './CategoriesClient';
import { client } from '@/sanity/lib/client';
import { GET_CATEGORIES_WITH_PRODUCTS_QUERY, GET_CATEGORIES_PAGE_CONTENT_QUERY } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Wholesale Vape Categories | Bulk Disposable Vapes USA',
  description: 'Browse our wholesale vape categories: Nicotine Vapes, THC Vapes, THCA, and Vape Cartridges. Buy in bulk with wholesale pricing and fast USA shipping.',
};

export const dynamic = 'force-dynamic';

export default async function CategoriesPage() {
  const categoriesWithProducts = await client.fetch(GET_CATEGORIES_WITH_PRODUCTS_QUERY);
  const pageContent = await client.fetch(GET_CATEGORIES_PAGE_CONTENT_QUERY);

  return (
    <CategoriesClient 
      categoriesWithProducts={categoriesWithProducts}
      pageContent={pageContent}
    />
  );
}
