import { PRODUCTS, CATEGORIES } from '@/data/mockData';
import ProductCard from '@/components/ui/ProductCard';
import Link from 'next/link';
import { Metadata } from 'next';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

const SEO_CONTENT: Record<string, {
    title: string;
    description: string;
    h1: string;
    content: string;
    cta: string;
}> = {
    'nicotine-vapes': {
        title: 'Bulk Nicotine Vapes Wholesale USA | Disposable Nicotine Vapes in Bulk',
        description: 'Buy bulk nicotine vapes at wholesale prices. Disposable nicotine vapes in bulk with fast USA shipping & crypto discounts.',
        h1: 'Bulk Nicotine Vapes Wholesale – Disposable Nicotine Vapes in Bulk',
        content: `Looking to buy nicotine vapes in bulk? BulkVapes.us supplies disposable nicotine vapes wholesale for retailers and distributors across the USA. Our bulk nicotine vapes are available in multiple flavors, strengths, and formats, making it easy to meet your customers’ demand.\n\nWhether you need cheap bulk nicotine vapes or premium disposable nicotine devices, we offer flexible bulk ordering and competitive pricing.`,
        cta: 'Request Wholesale Nicotine Vape Pricing'
    },
    'thc-vapes': {
        title: 'Disposable THC Vape Pens Bulk USA | Wholesale THC Vapes & Carts',
        description: 'Buy disposable THC vape pens in bulk at wholesale prices. THC vapes, carts & cartridges with fast USA shipping and crypto payment discounts.',
        h1: 'Disposable THC Vape Pens in Bulk – Wholesale THC Vapes USA',
        content: `We offer disposable THC vape pens in bulk, including THC vapes, THC carts, and bulk THC cartridges. Our products are sourced to meet compliance standards and are ideal for wholesale distribution.\n\nImportant Notice: All THC products are age-restricted (21+) and subject to state regulations.`,
        cta: 'Order THC Vapes in Bulk'
    },
    'thca-vapes': {
        title: 'Bulk THCA Disposable Vapes USA | Wholesale THCA Vape Pens & Carts',
        description: 'Shop bulk THCA disposable vapes and cartridges at wholesale prices. Legal hemp-derived THCA vapes with fast USA shipping & crypto discounts.',
        h1: 'Bulk THCA Disposable Vapes & Carts Wholesale',
        content: `BulkVapes.us supplies THCA disposable vapes in bulk for wholesalers looking for legal hemp-derived alternatives. Choose from THCA vape pens, cartridges, and disposables at wholesale pricing.`,
        cta: 'Get THCA Bulk Pricing'
    }
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = params;
  const seo = SEO_CONTENT[slug];
  const category = CATEGORIES.find(c => c.slug === slug);

  if (seo) {
    return {
      title: seo.title,
      description: seo.description
    };
  }

  if (category) {
    return {
      title: `${category.name} Wholesale | Bulk Vapes USA`,
      description: category.description
    };
  }

  return {
    title: 'Category Not Found | Bulk Vapes USA'
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  const category = CATEGORIES.find(c => c.slug === slug);
  const products = PRODUCTS.filter(p => p.category === slug);
  const seo = SEO_CONTENT[slug];

  if (!category) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#eff6e0] p-4 text-center">
            <h1 className="text-4xl font-black text-[#01161e] mb-4">Category Not Found</h1>
            <p className="text-[#598392] mb-8">The category you are looking for does not exist.</p>
            <Link href="/products" className="px-8 py-3 bg-[#124559] text-[#eff6e0] font-bold rounded-xl hover:bg-[#01161e]">
                View All Products
            </Link>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#eff6e0] py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Category Header Section */}
        {/* Category Header Section - Left Aligned */}
        <div className="max-w-5xl mb-20 relative">
            {/* Decorative Background for Header */}
            <div className="absolute top-0 right-0 -z-10 w-[40rem] h-[40rem] bg-gradient-to-br from-[#124559]/5 via-[#aec3b0]/10 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none translate-x-1/3 -translate-y-1/4"></div>

            <div className="flex flex-col items-start text-left animate-in slide-in-from-bottom-4 duration-700 fade-in">
                <span className="inline-block py-2 px-4 rounded-lg bg-[#124559]/10 text-[#124559] text-xs font-black uppercase tracking-widest mb-6 border border-[#124559]/20">
                    Wholesale Collection
                </span>
                
                <h1 className="text-4xl md:text-6xl font-black text-[#01161e] mb-8 leading-[1.1] tracking-tight max-w-4xl">
                    {seo ? seo.h1 : category.name}
                </h1>
                
                <div className="text-lg md:text-xl text-[#598392] leading-relaxed mb-10 whitespace-pre-line font-medium max-w-3xl border-l-4 border-[#aec3b0] pl-6">
                    {seo ? seo.content : category.description}
                </div>
                
                <div className="flex flex-wrap gap-4">
                    <Link href="/cart" className="inline-flex items-center px-10 py-4 bg-[#124559] text-[#eff6e0] font-bold text-lg rounded-2xl hover:bg-[#01161e] transition-all shadow-xl hover:-translate-y-1 group">
                        <span>{seo ? seo.cta : 'Request Bulk Pricing'}</span>
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
        {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        ) : (
            <div className="text-center py-20">
                 <h3 className="text-2xl font-bold text-[#01161e] mb-2">Coming Soon</h3>
                 <p className="text-[#598392]">{category.name} are being restocked.</p>
            </div>
        )}

      </div>
    </div>
  );
}
