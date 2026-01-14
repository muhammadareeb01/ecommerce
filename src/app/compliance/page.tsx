import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compliance & Legality | Bulk Vapes USA',
  description: 'Information regarding PACT Act, Taxes, and Regulatory Compliance.',
};

export default function CompliancePage() {
  return (
    <div className="bg-[#eff6e0] min-h-screen py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#aec3b0]/50 text-[#01161e]">
        <h1 className="text-4xl font-black mb-8 text-[#124559]">Compliance & Legality</h1>
        
        <div className="space-y-6 text-[#598392] leading-relaxed">
            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">PACT Act Compliance</h2>
                <p>We comply with all Prevent All Cigarette Trafficking (PACT) Act regulations. This includes registering with the ATF and submitting monthly reports to state tax administrators.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">Tax Responsibilities</h2>
                <p>As a wholesale distributor, we do not collect excise tax on B2B transactions where the buyer holds a valid license. The buyer is responsible for reporting and paying all applicable state and local excise taxes unless otherwise specified.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">FDA Regulations</h2>
                <p>We only distribute products that comply with FDA PMTA (Premarket Tobacco Product Application) guidelines or are currently under enforcement discretion.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">Shipping Restrictions</h2>
                <p>We do not ship to states or localities where the sale of flavored vaping products is prohibited by law. It is the buyer's responsibility to know their local regulations.</p>
            </section>
        </div>
      </div>
    </div>
  );
}
