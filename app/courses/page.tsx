'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabaseClient'
import Image from 'next/image'

export default function CoursesPage() {
  const [courses, setCourses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false })

      console.log('COURSES DATA:', data)
      console.log('COURSES ERROR:', error)

      if (!error && data) {
        setCourses(data)
      }

      setLoading(false)
    }

    fetchCourses()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <p className="text-green-400 mb-4">
            Explore Courses
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Learn Practical Skills
            <br />
            That Create Real Opportunities
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl leading-8">
            Discover beginner-friendly practical courses focused on
            e-commerce, online business, and digital growth.
          </p>
        </div>
      </section>

      {/* COURSES GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          {loading ? (
            <div className="text-gray-400">
              Loading courses...
            </div>
          ) : courses.length === 0 ? (
            <div className="text-center py-20">

              <h2 className="text-3xl font-bold mb-4">
                No Courses Available Yet
              </h2>

              <p className="text-gray-400">
                New practical learning courses will be added soon.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-green-500 transition group"
                >

                  {/* THUMBNAIL */}
                  <div className="relative w-full h-56 overflow-hidden">

                    <Image
                      src={
                        course.thumbnail &&
                        course.thumbnail.startsWith('http')
                          ? course.thumbnail
                          : 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop'
                      }
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-green-400 text-sm">
                        Practical Course
                      </span>

                      <span className="text-xl font-bold">
                        ₹{course.price}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold mb-4 leading-tight">
                      {course.title}
                    </h2>

                    <p className="text-gray-400 text-sm leading-7 mb-6">
                      {course.description}
                    </p>

                    {/* FEATURES */}
                    <div className="space-y-2 mb-8">

                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        Beginner Friendly
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        Practical Learning
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        Lifetime Access
                      </div>

                    </div>

                    {/* BUTTON */}
                    <Link
                      href={`/course/${course.id}`}
                      className="block text-center bg-green-600 hover:bg-green-700 transition px-5 py-3 rounded-lg font-medium"
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              ))}

            </div>
          )}
        </div>
      </section>
    </div>
  )
}