import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Age Restriction Policy | Bulk Vapes USA',
  description: 'Strict age verification policy for all wholesale partners.',
};

export default function AgePolicyPage() {
  return (
    <div className="bg-[#eff6e0] min-h-screen py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#aec3b0]/50 text-[#01161e]">
        <h1 className="text-4xl font-black mb-8 text-[#124559]">Age Restriction Policy</h1>
        
        <div className="space-y-6 text-[#598392] leading-relaxed">
             <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl mb-6">
                <p className="text-red-700 font-bold">
                    WARNING: These products contain nicotine. Nicotine is an addictive chemical.
                </p>
             </div>

            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">21+ Only</h2>
                <p>Bulk Vapes USA strictly prohibits the sale of vaping products to minors. You must be at least <strong>21 years of age</strong> to browse this site and purchase products.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">Verification Required</h2>
                <p>We reserve the right to request government-issued photo ID and business licenses to verify the age and legal status of our wholesale partners before fulfilling any orders.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">Refusal of Service</h2>
                <p>Attempts to purchase products by minors or on behalf of minors will result in immediate cancellation of the order and blacklisting from our platform.</p>
            </section>
        </div>
      </div>
    </div>
  );
}
