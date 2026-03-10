import Hero from '@/components/layout/Hero';
import IndustryOverview from '@/components/layout/IndustryOverview';
import CategoryGrid from '@/components/layout/CategoryGrid';
import BestSellers from '@/components/layout/BestSellers';
import WholesaleSection from '@/components/layout/WholesaleSection';
import Testimonials from '@/components/layout/Testimonials';
import ProductsOverview from '@/components/layout/ProductsOverview';
import BlogPreview from '@/components/layout/BlogPreview';
import FAQPreview from '@/components/layout/FAQPreview';

export const metadata = {
  title: 'Premium Vapes & Modern Devices | Built for Performance',
  description: 'Leading supplier of premium disposable vapes, cartridges, devices, and accessories with fast delivery and trusted service.',
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bulk Vapes USA',
    url: 'https://bulkvapes.us',
    logo: 'https://bulkvapes.us/logo.png',
    sameAs: [
      'https://www.instagram.com/bulkvapesusa',
      'https://twitter.com/bulkvapesusa',
    ],
    description: 'Leading wholesale distributor for premium vapes and hardware.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
  };

  const webSiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bulk Vapes USA',
    url: 'https://bulkvapes.us',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://bulkvapes.us/products?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <main className="min-h-screen relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }}
      />
      {/* Background Mesh Gradient */}
      <div className="bg-mesh" />

      {/* Hero Section */}
      <Hero />

      {/* 1. Industry Overview */}
      <IndustryOverview />

      {/* 2. Category Grid */}
      <CategoryGrid />

      {/* 3. Featured Products / Best Sellers */}
      <BestSellers />

      {/* 4. Wholesale Section */}
      <WholesaleSection />

      {/* 5. Testimonials */}
      <Testimonials />

      {/* 6. Buy Products Overview */}
      <ProductsOverview />

      {/* 7. Blog Preview */}
      <BlogPreview />

      {/* 8. FAQ Preview */}
      <FAQPreview />

      {/* Final CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12 md:p-24 text-center relative overflow-hidden border-accent-blue/20">
            <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                READY TO EXPERIENCE <br />
                <span className="text-accent-blue">THE FUTURE?</span>
              </h2>
              <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12">
                Join thousands of businesses already scaling with our premium product ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <button className="btn-neon-blue px-12 py-5 text-lg">Start Bulk Order</button>
                 <button className="btn-neon-purple px-12 py-5 text-lg">Contact Sales</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

