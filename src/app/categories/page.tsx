import { Section } from '@/components/ui/Section';
import ProductCard from '@/components/ui/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/data/mockData';
import Image from 'next/image';

export default function CategoriesPage() {
  return (
    <div className="pt-8 min-h-screen bg-[#eff6e0]">
      <Section className="bg-[#eff6e0]">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#01161e] mb-4">Our Catalog</h1>
            <p className="text-[#598392] max-w-2xl mx-auto font-medium">
                Browse our complete selection of wholesale vaping products.
            </p>
        </div>

        {/* Category Filter Pills (Visual only for now) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {CATEGORIES.map(cat => (
                <button key={cat.id} className="px-6 py-2 rounded-full border border-[#aec3b0] hover:bg-[#124559] hover:text-[#eff6e0] transition-colors bg-[#eff6e0] font-bold text-[#124559] hover:border-[#124559]">
                    {cat.name}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4">
            {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            {/* Duplicate for fullness effect */}
            {PRODUCTS.map((product) => (
                <ProductCard key={`${product.id}-dup`} product={{...product, id: `${product.id}-dup`}} />
            ))}
        </div>
      </Section>
    </div>
  );
}
