import InfoPageLayout from '@/components/layout/InfoPageLayout';

export default function ShippingPage() {
  return (
    <InfoPageLayout title="Shipping Information" subtitle="Fast, reliable delivery for your business.">
        <h3>Processing Time</h3>
        <p>Orders placed before 2:00 PM EST Monday-Friday typically ship the same day. Orders placed after cut-off or on weekends will ship the next business day.</p>
        
        <h3>Shipping Methods</h3>
        <p>We work with a network of private regional carriers to ensure PACT Act compliance. Standard ground shipping typically takes 3-7 business days depending on your location.</p>

        <h3>Shipping Costs</h3>
        <p>Shipping costs are calculated at checkout based on the weight of your order and the destination. We offer free shipping on wholesale orders over $3,000.</p>

        <h3>Restrictions</h3>
        <p>We cannot ship to PO Boxes. All shipments require a physical address and an adult signature (21+) upon delivery.</p>
    </InfoPageLayout>
  );
}
