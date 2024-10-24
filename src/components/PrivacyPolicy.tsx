const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-[#F9E7DA] min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#E4AA81]">
              1. Introduction
            </h2>
            <p className="leading-relaxed">
              At Kiki Beauty, we take your privacy seriously. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or make a purchase.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#E4AA81]">
              2. Information We Collect
            </h2>
            <div className="space-y-2">
              <p className="leading-relaxed">
                We collect information that you provide directly to us,
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information</li>
                <li>Billing and shipping address</li>
                <li>Payment information</li>
                <li>Email address</li>
                <li>Phone number</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#E4AA81]">
              3. How We Use Your Information
            </h2>
            <div className="space-y-2">
              <p className="leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process your orders and payments</li>
                <li>Communicate with you about your orders</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#E4AA81]">
              4. Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have any questions about our Privacy Policy, please contact
              us at:
              <br />
              <a
                href="mailto:privacy@kikibeauty.com"
                className="text-[#E4AA81] hover:underline"
              >
                privacy@kikibeauty.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
