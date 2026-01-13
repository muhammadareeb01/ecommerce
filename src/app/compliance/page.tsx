import InfoPageLayout from '@/components/layout/InfoPageLayout';

export default function CompliancePage() {
  return (
    <InfoPageLayout title="Compliance & Legality" subtitle="Adhering to regulatory standards.">
        <h3>PMTA Compliance</h3>
        <p>We are committed to selling only products that are compliant with FDA Pre-Market Tobacco Product Applications (PMTA). We work closely with manufacturers to ensure all inventory meets current regulatory requirements.</p>
        
        <h3>State & Local Laws</h3>
        <p>Vaping laws vary significantly by state and municipality. We automatically restrict shipping to states/cities with flavor bans or total vape bans based on your shipping address. It is the buyer's responsibility to understand their local regulations.</p>

        <h3>PACT Act</h3>
        <p>We comply fully with the PACT Act (Prevent All Cigarette Trafficking Act). This includes:</p>
        <ul>
            <li>Registering with the ATF.</li>
            <li>Verifying customer age.</li>
            <li>Using delivery services that check ID upon delivery.</li>
            <li>Collecting and remitting all applicable excise taxes.</li>
        </ul>
    </InfoPageLayout>
  );
}
