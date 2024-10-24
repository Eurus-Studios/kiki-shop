const TermsConditions = () => {
  return (
    <div className="bg-black text-[#F9E7DA] min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Terms & Conditions
        </h1>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#E4AA81]">
              1. Agreement to Terms
            </h2>
            <p className="leading-relaxed">
              By accessing and using this website, you accept and agree to be
              bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#E4AA81]">
              2. Use License
            </h2>
            <div className="space-y-2">
              <p className="leading-relaxed">
                Permission is granted to temporarily download one copy of the
                materials for personal, non-commercial transitory viewing only.
                This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Remove any copyright or other proprietary notations</li>
                <li>Transfer the materials to another person</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#E4AA81]">
              3. Disclaimer
            </h2>
            <p className="leading-relaxed">
              The materials on Kiki Beauty's website are provided on an 'as is'
              basis. Kiki Beauty makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#E4AA81]">
              4. Limitations
            </h2>
            <p className="leading-relaxed">
              In no event shall Kiki Beauty or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on Kiki Beauty's website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#E4AA81]">
              5. Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms & Conditions, please
              contact us at:
              <br />
              <a
                href="mailto:legal@kikibeauty.com"
                className="text-[#E4AA81] hover:underline"
              >
                legal@kikibeauty.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
