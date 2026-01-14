import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Bulk Vapes USA',
  description: 'Read our terms and conditions for wholesale orders and usage.',
};

export default function TermsPage() {
  return (
    <div className="bg-[#eff6e0] min-h-screen py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#aec3b0]/50 text-[#01161e]">
        <h1 className="text-4xl font-black mb-8 text-[#124559]">Terms and Conditions</h1>
        
        <div className="space-y-6 text-[#598392] leading-relaxed">
            <p><strong>Last Updated: January 2026</strong></p>
            
            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">1. Introduction</h2>
                <p>Welcome to Bulk Vapes USA. By accessing our website and placing wholesale orders, you agree to be bound by these Terms and Conditions.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">2. Wholesale Requirements</h2>
                <p>We sell strictly B2B (Business to Business). You must be of legal age (21+) and possess a valid tobacco resale license where required by your local jurisdiction.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">3. Minimum Order Quantity (MOQ)</h2>
                <p>Our minimum order value is $500. Orders below this amount may be cancelled or subject to a surcharge. Unit minimums apply per SKU.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">4. Payment Terms</h2>
                <p>We accept Bank Wire, ACH, and Cryptocurrency (BTC, ETH, USDT). Crypto payments receive a 10% discount. Orders are processed only after funds have cleared.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">5. Shipping & Risk of Loss</h2>
                <p>All shipments are FOB Origin. Risk of loss passes to the buyer upon tender to the carrier. We are not responsible for packages seized by customs or local authorities due to non-compliance.</p>
            </section>

             <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">6. Compliance</h2>
                <p>Buyer is solely responsible for compliance with all local, state, and federal laws regarding the sale and distribution of vaping products.</p>
            </section>
        </div>
      </div>
    </div>
  );
}
