import { PRODUCTS } from '@/data/mockData';
import { Metadata } from 'next';
import ProductClient from './ProductClient';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = params;
  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found | Bulk Vapes USA',
      description: 'The product you are looking for does not exist.'
    };
  }

  return {
    title: `Buy ${product.name} in Bulk USA | Wholesale Vape Supplier`,
    description: `Buy ${product.name} in bulk at competitive wholesale pricing. Ideal for resellers, smoke shops, and distributors across the USA.`,
  };
}

export default function ProductPageContainer() {
  return <ProductClient />;
}
