import InfoPageLayout from '@/components/layout/InfoPageLayout';

export default function PrivacyPage() {
  return (
    <InfoPageLayout title="Privacy Policy" subtitle="Your privacy is critically important to us.">
        <h3>1. Information We Collect</h3>
        <p>We collect information you provide directly to us, such as when you create an account, place an order, or subscribe to our newsletter. This includes name, email, shipping address, and payment information.</p>
        
        <h3>2. How We Use Your Information</h3>
        <p>We use the information we collect to process your orders, communicate with you, screening for potential risk or fraud, and improve our services.</p>

        <h3>3. Sharing of Information</h3>
        <p>We do not sell your personal data. We may share your information with third-party service providers (like payment processors and shipping partners) to fulfill your orders.</p>

        <h3>4. Security</h3>
        <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>

        <h3>5. Cookies</h3>
        <p>We use cookies to improve your experience on our site. By using our site, you consent to our use of cookies.</p>
    </InfoPageLayout>
  );
}
