import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-gray-900">
        <div className="max-w-5xl mx-auto px-6 py-24">

          <p className="text-green-400 mb-4">
            Terms & Conditions
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Platform Usage
            <br />
            Terms & Guidelines
          </h1>

          <p className="text-gray-400 text-xl leading-9 max-w-3xl">
            These Terms & Conditions govern your use of ecomsantanu
            and define the rules, responsibilities, and limitations
            associated with the platform.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="space-y-16">

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                1. Acceptance Of Terms
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                By accessing or using ecomsantanu, you agree to comply
                with these Terms & Conditions and all applicable laws
                and regulations.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                2. User Accounts
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                Users are responsible for maintaining the confidentiality
                of their account credentials and for all activities
                performed under their account.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                3. Course Access
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                Purchased courses grant personal access to learning content.
                Users may not share, resell, redistribute, or publicly
                distribute course materials without written permission.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                4. Intellectual Property
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                All platform content including videos, lessons, branding,
                designs, text, graphics, and educational materials remain
                the intellectual property of ecomsantanu unless otherwise stated.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                5. Prohibited Activities
              </h2>

              <p className="text-gray-400 leading-8 text-lg mb-6">
                Users agree not to:
              </p>

              <ul className="space-y-4 text-gray-400 leading-8 text-lg list-disc pl-6">
                <li>Share account access with unauthorized users</li>
                <li>Copy or redistribute paid course content</li>
                <li>Attempt unauthorized platform access</li>
                <li>Use the platform for illegal activities</li>
                <li>Disrupt platform functionality or security</li>
              </ul>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                6. Payments & Transactions
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                Payments are processed securely through third-party
                payment providers such as Razorpay and PayPal.
                Users are responsible for providing accurate payment information.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                7. Refunds
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                Refund requests are handled according to the
                ecomsantanu Refund Policy. Accessing or consuming
                digital content may affect refund eligibility.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                8. Platform Availability
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                While we aim to maintain reliable platform access,
                uninterrupted availability cannot be guaranteed at all times
                due to maintenance, updates, or technical issues.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                9. Account Suspension
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                ecomsantanu reserves the right to suspend or terminate
                accounts involved in misuse, unauthorized sharing,
                fraudulent behavior, or policy violations.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                10. Limitation Of Liability
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                ecomsantanu is provided for educational purposes.
                We do not guarantee specific income, business results,
                or outcomes from applying course knowledge.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                11. Policy Updates
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                These Terms & Conditions may be updated periodically
                to reflect platform improvements, legal requirements,
                or operational changes.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                12. Contact Information
              </h2>

              <p className="text-gray-400 leading-8 text-lg mb-6">
                If you have questions regarding these Terms & Conditions,
                please contact our support team.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-xl text-lg font-medium"
              >
                Contact Support
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}