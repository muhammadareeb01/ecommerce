'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const posts = [
  {
    title: 'The Future of Disposable Hardware',
    excerpt: 'How ceramic heating elements are changing the wholesale market landscape.',
    date: 'March 15, 2026',
  },
  {
    title: 'Crypto Payments in E-commerce',
    excerpt: 'Why wholesale buyers are shifting to Bitcoin and USDT for faster fulfillment.',
    date: 'March 12, 2026',
  },
  {
    title: 'Optimizing Store Inventory',
    excerpt: 'Strategies for retailers to manage high-turnover vape products effectively.',
    date: 'March 10, 2026',
  },
];

export default function BlogPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-black text-white mb-4">Latest Insights</h2>
            <p className="text-white/40">Stay updated with industry trends and business news.</p>
          </div>
          <Link href="/blog" className="btn-neon-blue !py-3 !px-6 text-sm">
            Visit Blog
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card glass-card-hover p-8 group cursor-pointer h-full flex flex-col"
            >
              <div className="text-xs font-bold text-accent-blue/60 uppercase tracking-widest mb-4">
                {post.date}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-blue transition-colors">
                {post.title}
              </h3>
              <p className="text-white/40 leading-relaxed mb-8 flex-grow">
                {post.excerpt}
              </p>
              
              <Link href="/blog" className="inline-flex items-center gap-2 text-white font-bold group/link">
                <span className="relative">
                  Read More
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-blue transition-all duration-300 group-hover/link:w-full" />
                </span>
                <ArrowUpRight size={16} className="text-accent-blue transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
