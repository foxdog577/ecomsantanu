import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-gray-900">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT SIDE */}
            <div>

              <p className="text-green-400 font-medium mb-6 tracking-wide uppercase text-sm">
                Practical Learning Platform
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">

                Learn Practical Skills.
                <br />

                <span className="text-green-400">
                  Build Real Income.
                </span>

              </h1>

              <p className="text-gray-400 text-lg md:text-xl leading-9 mb-10 max-w-2xl">
                Master e-commerce, online business, and practical digital skills
                through beginner-friendly courses designed for real-world growth.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mb-10">

                <Link
                  href="/courses"
                  className="bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-2xl font-medium text-lg shadow-lg shadow-green-500/20"
                >
                  Explore Courses
                </Link>

                <Link
                  href="/register"
                  className="border border-gray-700 hover:border-green-500 hover:bg-green-500/5 transition px-8 py-4 rounded-2xl font-medium text-lg"
                >
                  Start Learning
                </Link>

              </div>

              {/* TRUST BADGES */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-400">

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  Beginner Friendly
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  Lifetime Access
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  Practical Learning
                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="relative">

              {/* MAIN CARD */}
              <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 shadow-2xl">

                {/* TOP BAR */}
                <div className="flex items-center gap-2 mb-6">

                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />

                </div>

                {/* MOCK DASHBOARD */}
                <div className="space-y-4">

                  <div className="bg-black/50 border border-gray-800 rounded-2xl p-5">

                    <p className="text-green-400 text-sm mb-2">
                      Featured Course
                    </p>

                    <h3 className="text-2xl font-bold mb-3">
                      E-Commerce Mastery
                    </h3>

                    <p className="text-gray-400 text-sm leading-7">
                      Learn Amazon & Meesho selling from scratch with
                      practical real-world strategies.
                    </p>

                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    <div className="bg-black/50 border border-gray-800 rounded-2xl p-5">

                      <p className="text-4xl font-bold text-green-400 mb-2">
                        500+
                      </p>

                      <p className="text-gray-400 text-sm">
                        Students Learning
                      </p>

                    </div>

                    <div className="bg-black/50 border border-gray-800 rounded-2xl p-5">

                      <p className="text-4xl font-bold text-green-400 mb-2">
                        4.9★
                      </p>

                      <p className="text-gray-400 text-sm">
                        Student Rating
                      </p>

                    </div>

                  </div>

                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6">

                    <p className="text-sm text-green-100 mb-2">
                      Start Your Learning Journey
                    </p>

                    <h3 className="text-2xl font-bold mb-4">
                      Build Skills That Matter
                    </h3>

                    <button className="bg-white text-black px-5 py-3 rounded-xl font-medium hover:bg-gray-200 transition">
                      Join Now
                    </button>

                  </div>

                </div>

              </div>

              {/* FLOATING DECORATION */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-500/10 blur-2xl rounded-full" />

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