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
                At RRX Research, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our research services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Register on our website</li>
                <li>Participate in our research studies</li>
                <li>Sign up for our newsletter</li>
                <li>Request information or assistance</li>
                <li>Complete a form or survey</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                The information we collect may be used in the following ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>To personalize your experience and deliver the type of content most relevant to you</li>
                <li>To improve our website and services</li>
                <li>To process transactions and deliver requested services</li>
                <li>To send periodic emails regarding your order or other products and services</li>
                <li>To conduct research and analyze results</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-gray-700">
                We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights and are required to keep the information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Disclosure</h2>
              <p className="text-gray-700">
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at privacy@rrxresearch.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                RRX Research reserves the right to change this Privacy Policy at any time. We will notify you of significant changes by posting the new Privacy Policy on this page with an updated revision date.
              </p>
              <p className="text-gray-700 mt-4">
                Last Updated: May 12, 2025
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