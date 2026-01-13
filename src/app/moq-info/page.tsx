import InfoPageLayout from '@/components/layout/InfoPageLayout';

export default function MoqPage() {
  return (
    <InfoPageLayout title="MOQ Information" subtitle="Minimum Order Quantities explained.">
        <h3>General MOQ</h3>
        <p>To maintain our wholesale pricing structure, we require a minimum total order value of <strong>$500.00 USD</strong>. Orders below this threshold cannot be processed through our wholesale portal.</p>
        
        <h3>Product Specific MOQs</h3>
        <p>Some products have specific quantity requirements:</p>
        <ul>
            <li><strong>Disposable Vapes:</strong> Sold in display boxes (typically 10 units per box). Minimum 5 boxes per order.</li>
            <li><strong>E-Liquids:</strong> Minimum 20 bottles (can mix flavors).</li>
            <li><strong>Hardware:</strong> Minimum 5 kits.</li>
        </ul>

        <h3>Sample Orders</h3>
        <p>We understand the need to test products. Sample orders below the MOQ can be arranged by contacting your account manager directly. These are subject to retail pricing.</p>
    </InfoPageLayout>
  );
}
