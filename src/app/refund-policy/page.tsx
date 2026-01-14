import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | Bulk Vapes USA',
  description: 'Our policies on returns, refunds, and damaged items.',
};

export default function RefundPage() {
  return (
    <div className="bg-[#eff6e0] min-h-screen py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#aec3b0]/50 text-[#01161e]">
        <h1 className="text-4xl font-black mb-8 text-[#124559]">Refund & Return Policy</h1>
        
        <div className="space-y-6 text-[#598392] leading-relaxed">
            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">All Sales Final</h2>
                <p>Due to the nature of consumable vape products, <strong>all sales are final</strong>. We do not accept returns for flavor preference or unsold inventory.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">Damaged on Arrival (DOA)</h2>
                <p>If you receive damaged or defective items, you must report it within <strong>48 hours</strong> of delivery. Please provide photos of the damaged packaging and products.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">Refund Process</h2>
                <p>Approved claims will receive store credit or a replacement in the next order. Cash refunds are generally not issued for wholesale transactions.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">Order Cancellations</h2>
                <p>Orders can only be cancelled before they have been processed for shipping. A restocking fee of 15% may apply for cancelled large orders.</p>
            </section>
        </div>
      </div>
    </div>
  );
}
