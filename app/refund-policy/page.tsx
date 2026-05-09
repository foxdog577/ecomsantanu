import Link from 'next/link'

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-gray-900">
        <div className="max-w-5xl mx-auto px-6 py-24">

          <p className="text-green-400 mb-4">
            Refund Policy
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Transparent & Fair
            <br />
            Refund Guidelines
          </h1>

          <p className="text-gray-400 text-xl leading-9 max-w-3xl">
            This Refund Policy explains the conditions under which
            refunds may be reviewed and processed for purchases made
            on ecomsantanu.
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
                1. Nature Of Digital Products
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                All courses available on ecomsantanu are digital products.
                Once a course is purchased, users receive immediate access
                to learning content and materials.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                2. Refund Eligibility
              </h2>

              <p className="text-gray-400 leading-8 text-lg mb-6">
                Refund requests may be considered under limited circumstances,
                including:
              </p>

              <ul className="space-y-4 text-gray-400 leading-8 text-lg list-disc pl-6">
                <li>Duplicate or accidental payments</li>
                <li>Technical issues preventing course access</li>
                <li>Incorrect transaction processing</li>
              </ul>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                3. Non-Refundable Situations
              </h2>

              <p className="text-gray-400 leading-8 text-lg mb-6">
                Refunds will generally not be provided in situations such as:
              </p>

              <ul className="space-y-4 text-gray-400 leading-8 text-lg list-disc pl-6">
                <li>Change of mind after purchase</li>
                <li>Lack of usage after course access is granted</li>
                <li>Failure to complete the course</li>
                <li>Dissatisfaction based on personal preference</li>
                <li>Requests made after significant course consumption</li>
              </ul>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                4. Refund Request Timeframe
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                Eligible refund requests should be submitted within
                7 days of the original purchase date. Requests submitted
                beyond this period may not be reviewed.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                5. Review Process
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                Each refund request is reviewed individually to ensure
                fairness and prevent misuse of digital content access.
                Approval decisions are made at the discretion of
                ecomsantanu.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                6. Refund Processing Time
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                Approved refunds may take approximately 5–10 business days
                to reflect in the user’s original payment method,
                depending on banking or payment provider processing times.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                7. Unauthorized Sharing
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                Users found distributing, sharing, or reproducing course
                content without permission may lose platform access and
                become ineligible for refunds.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                8. Policy Updates
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                This Refund Policy may be updated periodically to reflect
                platform changes, legal requirements, or operational
                improvements.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                9. Need Help?
              </h2>

              <p className="text-gray-400 leading-8 text-lg mb-6">
                If you have questions regarding refunds or payment-related
                issues, please contact our support team.
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