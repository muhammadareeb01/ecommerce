import { client } from '@/sanity/lib/client';
import { GET_CATEGORY_PAGE_DATA_QUERY, GET_ALL_CATEGORIES_QUERY } from '@/sanity/lib/queries';
import CategoryPageClient from '@/components/category/CategoryPageClient';
import { Metadata } from 'next';
import Link from 'next/link';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const HERO_BG_ID = "category_hero_bg.png";

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await client.fetch(GET_CATEGORY_PAGE_DATA_QUERY, { slug });

  if (category) {
    return {
      title: category.metaTitle || `${category.title} Wholesale | Bulk Vapes USA`,
      description: category.metaDescription || category.description || 'Buy wholesale vapes in bulk.',
    };
  }

  return {
    title: 'Category Not Found | Bulk Vapes USA'
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const [category, allCategories] = await Promise.all([
    client.fetch(GET_CATEGORY_PAGE_DATA_QUERY, { slug }),
    client.fetch(GET_ALL_CATEGORIES_QUERY)
  ]);

  if (!category) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] p-4 text-center">
            <h1 className="text-4xl font-black text-white mb-4 italic tracking-tighter">Category Not Found</h1>
            <p className="text-white/50 mb-8 max-w-md">The category you are looking for does not exist or has been moved.</p>
            <Link href="/categories" className="btn-neon-blue">
                View All Categories
            </Link>
        </div>
    );
  }

  // Find the actual hero image path - the ID I generated has a timestamp
  // I'll just use the constant for now as I know its name
  const heroImageUrl = `/${HERO_BG_ID}`;

  return (
    <CategoryPageClient 
        category={category} 
        otherCategories={allCategories}
        heroImageUrl={heroImageUrl}
    />
  );
}
