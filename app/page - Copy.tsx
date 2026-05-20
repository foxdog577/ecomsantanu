import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

          <div className="max-w-3xl">
            <p className="text-green-400 font-medium mb-4">
              Practical Learning Platform
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Learn Practical Skills.
              <br />
              Build Real Income.
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-8 mb-10">
              Master e-commerce, online business, and digital skills through
              beginner-friendly practical courses designed for real-world growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-lg font-medium"
              >
                Explore Courses
              </Link>

              <Link
                href="/register"
                className="border border-gray-700 hover:border-green-500 transition px-8 py-4 rounded-lg font-medium"
              >
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COURSE */}
      <section className="py-24 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-14">
            <p className="text-green-400 mb-3">Featured Course</p>

            <h2 className="text-4xl font-bold">
              Start Your E-Commerce Journey
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop"
                className="w-full h-[350px] object-cover"
              />
            </div>

            {/* RIGHT */}
            <div>
              <h3 className="text-3xl font-bold mb-5">
                📦 E-Commerce Mastery Course
              </h3>

              <p className="text-gray-400 leading-8 mb-8">
                Learn Amazon and Meesho selling step-by-step — from product
                research and sourcing to listing optimization and logistics.
                Designed especially for beginners who want to start earning online.
              </p>

              <div className="space-y-4 mb-8">

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <p>Beginner Friendly</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <p>Practical Real-World Learning</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <p>Amazon + Meesho Focused</p>
                </div>

              </div>

              <Link
                href="/courses"
                className="inline-block bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-lg"
              >
                View Course
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY LEARN HERE */}
      <section className="py-24 border-t border-gray-900 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-green-400 mb-3">
              Why Choose ecomsantanu
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Learn Skills That Actually Matter
            </h2>

            <p className="text-gray-400 leading-8">
              Our courses focus on practical learning, real-world application,
              and helping people build genuine growth opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">

            {/* CARD 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="text-3xl mb-5">🚀</div>

              <h3 className="text-xl font-semibold mb-3">
                Beginner Friendly
              </h3>

              <p className="text-gray-400 leading-7 text-sm">
                Simple explanations designed for learners starting from zero.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="text-3xl mb-5">💡</div>

              <h3 className="text-xl font-semibold mb-3">
                Practical Learning
              </h3>

              <p className="text-gray-400 leading-7 text-sm">
                Learn actionable strategies that can be applied immediately.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="text-3xl mb-5">📈</div>

              <h3 className="text-xl font-semibold mb-3">
                Growth Focused
              </h3>

              <p className="text-gray-400 leading-7 text-sm">
                Build digital skills and income opportunities for the future.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="text-3xl mb-5">🌍</div>

              <h3 className="text-xl font-semibold mb-3">
                Accessible Learning
              </h3>

              <p className="text-gray-400 leading-7 text-sm">
                Affordable education designed for learners everywhere.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* LEARNING FLOW */}
      <section className="py-24 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-green-400 mb-3">
            Your Growth Journey
          </p>

          <h2 className="text-4xl font-bold mb-16">
            Learn → Apply → Earn → Grow
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="text-4xl mb-5">📚</div>
              <h3 className="text-xl font-semibold mb-3">Learn</h3>
              <p className="text-gray-400 text-sm leading-7">
                Understand practical concepts step-by-step.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="text-4xl mb-5">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Apply</h3>
              <p className="text-gray-400 text-sm leading-7">
                Use your knowledge in real-world situations.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="text-4xl mb-5">💰</div>
              <h3 className="text-xl font-semibold mb-3">Earn</h3>
              <p className="text-gray-400 text-sm leading-7">
                Build income opportunities through skills.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="text-4xl mb-5">🌱</div>
              <h3 className="text-xl font-semibold mb-3">Grow</h3>
              <p className="text-gray-400 text-sm leading-7">
                Improve your future and personal growth.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-green-400 mb-4">
            Start Your Journey Today
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-8">
            Build Skills That Create
            <br />
            Real Opportunities
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            Join learners building practical digital skills and creating
            better opportunities for their future.
          </p>

          <Link
            href="/courses"
            className="inline-block bg-green-600 hover:bg-green-700 transition px-10 py-4 rounded-lg text-lg font-medium"
          >
            Explore Courses
          </Link>
        </div>
      </section>
    </div>
  )
}