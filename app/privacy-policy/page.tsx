import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-gray-900">
        <div className="max-w-5xl mx-auto px-6 py-24">

          <p className="text-green-400 mb-4">
            Privacy Policy
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Your Privacy Matters
          </h1>

          <p className="text-gray-400 text-xl leading-9 max-w-3xl">
            This Privacy Policy explains how ecomsantanu collects,
            uses, and protects your information when using our platform.
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
                1. Information We Collect
              </h2>

              <p className="text-gray-400 leading-8 text-lg mb-6">
                When you use ecomsantanu, we may collect certain
                information including:
              </p>

              <ul className="space-y-4 text-gray-400 leading-8 text-lg list-disc pl-6">
                <li>Name and email address</li>
                <li>Phone number (if provided)</li>
                <li>Account login details</li>
                <li>Course purchase information</li>
                <li>Usage and activity data</li>
              </ul>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                2. How We Use Your Information
              </h2>

              <p className="text-gray-400 leading-8 text-lg mb-6">
                The information collected may be used to:
              </p>

              <ul className="space-y-4 text-gray-400 leading-8 text-lg list-disc pl-6">
                <li>Provide access to purchased courses</li>
                <li>Improve user experience and platform functionality</li>
                <li>Send important updates or support communication</li>
                <li>Process payments securely</li>
                <li>Prevent misuse or unauthorized activity</li>
              </ul>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                3. Payment Information
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                Payments on ecomsantanu are securely processed through
                third-party payment providers such as Razorpay and PayPal.
                We do not directly store sensitive payment details such as
                card numbers or banking credentials.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                4. Data Protection
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                We take reasonable measures to protect user information
                and maintain platform security. However, no online service
                can guarantee absolute security.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                5. Third-Party Services
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                ecomsantanu may use trusted third-party services for
                authentication, hosting, analytics, communication,
                and payment processing. These services may collect
                and process data according to their own privacy policies.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                6. Cookies & Analytics
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                We may use cookies or analytics tools to improve
                platform performance, understand user behavior,
                and enhance the learning experience.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                7. User Responsibilities
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                Users are responsible for maintaining the confidentiality
                of their account credentials and for activities performed
                under their account.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                8. Changes To This Policy
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                This Privacy Policy may be updated periodically
                to reflect platform improvements, legal requirements,
                or operational changes.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                9. Contact Information
              </h2>

              <p className="text-gray-400 leading-8 text-lg mb-6">
                If you have questions regarding this Privacy Policy,
                you may contact us through our support channels.
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