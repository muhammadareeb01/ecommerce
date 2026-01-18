import { Metadata } from 'next';
import ProductClient from './ProductClient';
import { client } from '@/sanity/lib/client';
import { GET_PRODUCT_BY_SLUG_QUERY } from '@/sanity/lib/queries';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await client.fetch(GET_PRODUCT_BY_SLUG_QUERY, { slug });

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

export default async function ProductPageContainer({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await client.fetch(GET_PRODUCT_BY_SLUG_QUERY, { slug });

  return <ProductClient initialProduct={product} />;
}
