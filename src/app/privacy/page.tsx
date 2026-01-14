import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Bulk Vapes USA',
  description: 'How we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#eff6e0] min-h-screen py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#aec3b0]/50 text-[#01161e]">
        <h1 className="text-4xl font-black mb-8 text-[#124559]">Privacy Policy</h1>
        
        <div className="space-y-6 text-[#598392] leading-relaxed">
            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">Data Collection</h2>
                <p>We collect information necessary to process your wholesale orders, including name, business address, email, and tax ID information. We do not sell your personal data to third parties.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">Payment Security</h2>
                <p>We do not store full credit card numbers or crypto wallet private keys. All transactions are securely processed through encrypted channels.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">Cookies</h2>
                <p>We use cookies to improve your browsing experience and remember your cart contents. You may disable cookies in your browser settings, but some site features may not function correctly.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[#01161e] mb-2">Age Verification</h2>
                <p>We may use third-party services to verify the age and identity of our customers to ensure compliance with federal regulations.</p>
            </section>
        </div>
      </div>
    </div>
  );
}
