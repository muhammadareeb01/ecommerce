import ProductCard from '@/components/ui/ProductCard';
import Link from 'next/link';
import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { GET_CATEGORY_PAGE_DATA_QUERY } from '@/sanity/lib/queries';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

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
  const category = await client.fetch(GET_CATEGORY_PAGE_DATA_QUERY, { slug });

  if (!category) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#eff6e0] p-4 text-center">
            <h1 className="text-4xl font-black text-[#01161e] mb-4">Category Not Found</h1>
            <p className="text-[#598392] mb-8">The category you are looking for does not exist.</p>
            <Link href="/categories" className="px-8 py-3 bg-[#124559] text-[#eff6e0] font-bold rounded-xl hover:bg-[#01161e]">
                View All Categories
            </Link>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#eff6e0] py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Category Header Section - Left Aligned */}
        <div className="max-w-5xl mb-20 relative">
            {/* Decorative Background for Header */}
            <div className="absolute top-0 right-0 -z-10 w-[40rem] h-[40rem] bg-gradient-to-br from-[#124559]/5 via-[#aec3b0]/10 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none translate-x-1/3 -translate-y-1/4"></div>

            <div className="flex flex-col items-start text-left animate-in slide-in-from-bottom-4 duration-700 fade-in">
                <span className="inline-block py-2 px-4 rounded-lg bg-[#124559]/10 text-[#124559] text-xs font-black uppercase tracking-widest mb-6 border border-[#124559]/20">
                    Wholesale Collection
                </span>
                
                <h1 className="text-4xl md:text-6xl font-black text-[#01161e] mb-6 leading-[1.1] tracking-tight max-w-4xl">
                    {category.pageHeading || category.title}
                </h1>
                
                {category.pageSubheading && (
                    <h2 className="text-2xl font-bold text-[#598392] mb-6">
                        {category.pageSubheading}
                    </h2>
                )}

                <div className="text-lg md:text-xl text-[#598392] leading-relaxed mb-10 whitespace-pre-line font-medium max-w-3xl border-l-4 border-[#aec3b0] pl-6">
                    {category.pageContent || category.description}
                </div>
                
                <div className="flex flex-wrap gap-4">
                    <Link href="/cart" className="inline-flex items-center px-10 py-4 bg-[#124559] text-[#eff6e0] font-bold text-lg rounded-2xl hover:bg-[#01161e] transition-all shadow-xl hover:-translate-y-1 group">
                        <span>{category.ctaText || 'Request Bulk Pricing'}</span>
                        <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                    <Link href="/contact" className="inline-flex items-center px-10 py-4 bg-white text-[#124559] font-bold text-lg rounded-2xl border-2 border-[#aec3b0]/30 hover:border-[#124559] hover:bg-[#eff6e0] transition-all">
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>

        {/* Product Grid */}
        {category.products && category.products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.products.map((product: any) => (
                    <ProductCard key={product._id} product={{...product, id: product._id}} />
                ))}
            </div>
        ) : (
            <div className="text-center py-20">
                 <h3 className="text-2xl font-bold text-[#01161e] mb-2">Coming Soon</h3>
                 <p className="text-[#598392]">{category.title} are being restocked.</p>
            </div>
        )}

      </div>
    </div>
  );
}
