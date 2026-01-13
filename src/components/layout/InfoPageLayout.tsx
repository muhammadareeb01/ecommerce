import { ReactNode } from 'react';

interface InfoPageLayoutProps {
    title: string;
    subtitle?: string;
    children: ReactNode;
}

export default function InfoPageLayout({ title, subtitle, children }: InfoPageLayoutProps) {
  return (
    <div className="bg-[#eff6e0] min-h-screen">
      <div className="bg-[#01161e] text-[#eff6e0] py-16 md:py-24 rounded-b-[4rem] shadow-xl mb-12 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">{title}</h1>
            {subtitle && (
                <p className="text-[#598392] text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
         </div>
      </div>

      <div className="w-[90%] max-w-[1800px] mx-auto pb-24">
         {/* Removed the 'box' styles: border, shadow, rounded corners */}
         {/* Updated to prose-xl for larger text and removed max-width constraint on prose to fill the 90% container */}
         <div className="prose prose-xl prose-headings:font-black prose-headings:text-[#01161e] prose-headings:border-b prose-headings:border-[#aec3b0] prose-headings:pb-4 prose-headings:mt-16 prose-headings:mb-8 prose-p:text-[#598392] prose-p:leading-relaxed prose-li:text-[#598392] prose-strong:text-[#124559] max-w-none">
                {children}
         </div>
      </div>
    </div>
  );
}
