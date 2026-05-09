import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-green-500 mb-3">
              EcomSantanu
            </h2>

            <p className="text-gray-400 text-sm leading-6">
              Learn practical skills, build income opportunities,
              and grow with real-world education.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>

            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <Link href="/">Home</Link>
              <Link href="/courses">Courses</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold mb-3">Policies</h3>

            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/refund-policy">Refund Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 text-center">
          © 2026 ecomsantanu. All rights reserved.
        </div>
      </div>
    </footer>
  )
}