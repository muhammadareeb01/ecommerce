import InfoPageLayout from '@/components/layout/InfoPageLayout';

export default function AgePolicyPage() {
  return (
    <InfoPageLayout title="Age Restriction Notice" subtitle="Strict enforcement of 21+ policy.">
        <h3>21+ Only Policy</h3>
        <p>In accordance with Federal and State laws, we strictly prohibit the sale of vaping products to anyone under the age of 21. By entering this site, you certify that you are 21 years of age or older.</p>
        
        <h3>Age Verification</h3>
        <p>We utilize third-party age verification systems to validate your identity and age at checkout. Failure to provide accurate information will result in order cancellation.</p>

        <h3>Adult Signature Required</h3>
        <p>All shipments containing vaping products require an Adult Signature (21+) upon delivery. Packages cannot be left at the door or in a mailbox.</p>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-8">
            <p className="font-bold text-red-700 m-0">WARNING: Selling or providing tobacco products to a minor is a serious offense and is punishable by law.</p>
        </div>
    </InfoPageLayout>
  );
}
