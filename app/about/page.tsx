import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <p className="text-green-400 mb-4">
            About ecomsantanu
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Practical Learning
            <br />
            For Real Growth
          </h1>

          <p className="text-gray-400 text-xl leading-9 max-w-3xl">
            ecomsantanu is a modern online learning platform focused on helping
            people build practical digital skills, explore income opportunities,
            and create meaningful personal growth through accessible education.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <p className="text-green-400 mb-4">
              Our Mission
            </p>

            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Helping People Learn
              Skills That Actually Matter
            </h2>

            <p className="text-gray-400 leading-8 text-lg mb-6">
              The internet has created countless opportunities, but many people
              still struggle to access practical and beginner-friendly guidance.
            </p>

            <p className="text-gray-400 leading-8 text-lg">
              Our mission is to simplify learning and help individuals gain
              real-world skills they can apply to improve their future,
              income opportunities, and personal growth.
            </p>
          </div>

          {/* RIGHT */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10">

            <div className="space-y-8">

              <div>
                <div className="text-4xl mb-4">📚</div>

                <h3 className="text-2xl font-semibold mb-3">
                  Practical Education
                </h3>

                <p className="text-gray-400 leading-7">
                  Learn actionable skills through structured,
                  beginner-friendly lessons.
                </p>
              </div>

              <div>
                <div className="text-4xl mb-4">🚀</div>

                <h3 className="text-2xl font-semibold mb-3">
                  Growth Focused
                </h3>

                <p className="text-gray-400 leading-7">
                  Build knowledge that supports career growth,
                  digital opportunities, and future success.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-24 border-t border-gray-900 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-green-400 mb-4">
            Our Vision
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-10">
            Building A Future Where
            <br />
            Learning Creates Opportunity
          </h2>

          <p className="text-gray-400 text-xl leading-9">
            We believe education should not feel complicated or inaccessible.
            The goal of ecomsantanu is to create a learning ecosystem where
            people can continuously grow, learn practical skills, and unlock
            new opportunities in the digital world.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-green-400 mb-4">
              Core Values
            </p>

            <h2 className="text-4xl font-bold">
              What We Believe In
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">

            {/* VALUE 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

              <div className="text-4xl mb-5">
                🌱
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Growth
              </h3>

              <p className="text-gray-400 leading-7">
                Continuous learning and personal development create
                long-term opportunities.
              </p>
            </div>

            {/* VALUE 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

              <div className="text-4xl mb-5">
                💡
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Simplicity
              </h3>

              <p className="text-gray-400 leading-7">
                Learning should be accessible, practical,
                and easy to understand.
              </p>
            </div>

            {/* VALUE 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

              <div className="text-4xl mb-5">
                🌍
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Accessibility
              </h3>

              <p className="text-gray-400 leading-7">
                Everyone should have access to affordable
                digital learning opportunities.
              </p>
            </div>

            {/* VALUE 4 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

              <div className="text-4xl mb-5">
                ⚡
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Action
              </h3>

              <p className="text-gray-400 leading-7">
                Knowledge becomes valuable only when applied
                in real-world situations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-green-400 mb-4">
            Start Learning Today
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-8">
            Build Practical Skills
            <br />
            For A Better Future
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            Explore practical courses designed to help you grow,
            learn, and unlock new opportunities.
          </p>

          <Link
            href="/courses"
            className="inline-block bg-green-600 hover:bg-green-700 transition px-10 py-4 rounded-xl text-lg font-medium"
          >
            Explore Courses
          </Link>
        </div>
      </section>
    </div>
  )
}