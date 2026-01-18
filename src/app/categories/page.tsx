import { Metadata } from 'next';
import CategoriesClient from './CategoriesClient';

export const metadata: Metadata = {
  title: 'Wholesale Vape Categories | Bulk Disposable Vapes USA',
  description: 'Browse our wholesale vape categories: Nicotine Vapes, THC Vapes, THCA, and Vape Cartridges. Buy in bulk with wholesale pricing and fast USA shipping.',
};

export default function CategoriesPage() {
  return <CategoriesClient />;
}
