import InfoPageLayout from '@/components/layout/InfoPageLayout';

export default function RefundPage() {
  return (
    <InfoPageLayout title="Refund & Return Policy" subtitle="Our commitment to quality assurance.">
        <h3>Returns</h3>
        <p>Due to the nature of our products (consumable goods), we generally do not accept returns on open or used items. Returns are only accepted for unopened products within 14 days of delivery, subject to a 15% restocking fee.</p>
        
        <h3>Defective Products (DOA)</h3>
        <p>If you receive a defective product (Dead On Arrival), please contact us within 72 hours of receiving your shipment. We may require photo or video proof of the defect. Verified DOA items will be credited to your account or replaced in your next order.</p>

        <h3>Shipping Damages</h3>
        <p>Please inspect your package immediately upon delivery. If items are damaged during transit, please photograph the package and contents and contact us immediately so we can file a claim with the carrier.</p>

        <h3>Refunds</h3>
        <p>Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, a credit will automatically be applied to your account or original method of payment.</p>
    </InfoPageLayout>
  );
}
