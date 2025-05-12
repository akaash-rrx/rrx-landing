import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-gray-700">
                RRX Research Inc. ("we," "us," or "our") provides market research services and analysis tooling (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Last updated:</strong> May 11, 2025
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <h3 className="text-xl font-medium mb-2">1.1 Personal Data You Provide</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Account Registration:</strong> name, email address, password, profile picture.</li>
                <li><strong>Contact Forms &amp; Emails:</strong> name, email, phone number, message content.</li>
                <li><strong>Purchases &amp; Billing:</strong> billing address, payment information (processed by third party).</li>
              </ul>
              <h3 className="text-xl font-medium mt-4 mb-2">1.2 Information Collected Automatically</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Usage Data:</strong> pages visited, time spent, clicks, referring URLs, device/browser type, IP address, city-level geolocation.</li>
                <li><strong>Cookies & Tracking:</strong> session cookies, persistent cookies, web beacons, local storage.</li>
              </ul>
              <h3 className="text-xl font-medium mt-4 mb-2">1.3 Information from Third Parties</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Social Login:</strong> public profile info when you sign in via Google, Facebook, etc.</li>
                <li><strong>Analytics & Advertising:</strong> data from Google Analytics, Facebook Pixel, etc.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>To provide and improve our Service.</li>
                <li>To communicate account notices, updates, and if you opt in, marketing.</li>
                <li>To process transactions and prevent fraud.</li>
                <li>To personalize content and recommendations.</li>
                <li>To analyze usage trends and monitor performance.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Service Providers:</strong> payment processors, hosting providers, analytics, email-delivery services.</li>
                <li><strong>Business Transfers:</strong> in connection with a merger, acquisition, or sale of assets.</li>
                <li><strong>Legal Requirements:</strong> to comply with court orders, law enforcement, or to protect our rights.</li>
                <li><strong>With Your Consent:</strong> when you authorize further sharing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Your Rights &amp; Choices</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access, correct, update, or delete your personal data.</li>
                <li>Restrict or object to processing.</li>
                <li>Withdraw consent at any time.</li>
                <li>Opt-out of marketing communications.</li>
                <li>Request a portable copy of your data.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please email us at <a href="mailto:contact@rrxresearch.com" className="text-blue-600">contact@rrxresearch.com</a>.
              </p>
            </section>
{/* 
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. California Privacy Rights (CCPA)</h2>
              <p className="text-gray-700 mb-4">
                If you are a California resident, the California Consumer Privacy Act ("CCPA") provides additional rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Right to Know & Access:</strong> Request details about categories and specific pieces of personal data collected about you.</li>
                <li><strong>Right to Delete:</strong> Request deletion of the personal information we have collected.</li>
                <li><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise any CCPA right (including deletion requests), email <a href="mailto:privacy@rrxresearch.com" className="text-blue-600">privacy@rrxresearch.com</a> with "CCPA Request" in the subject line.
              </p>
            </section> */}

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures to secure your data in transit (TLS/SSL) and at rest, limit access to authorized personnel, and regularly review security practices. However, no method of transmission or storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Children’s Privacy</h2>
              <p className="text-gray-700">
                Our Service is not directed to children under 16. We do not knowingly collect personal data from minors. If you believe we have collected information from a child under 16, please contact us so we can delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will post the revised policy here with a new "Last updated" date and notify you by email or site banner if required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
              <p className="text-gray-700">
                For general inquiries: <a href="mailto:contact@rrxresearch.com" className="text-blue-600">contact@rrxresearch.com</a><br />
                For CCPA requests: <a href="mailto:privacy@rrxresearch.com" className="text-blue-600">privacy@rrxresearch.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
