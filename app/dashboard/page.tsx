'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [courses, setCourses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const { data: userData } = await supabase.auth.getUser()

      if (!userData.user) {
        router.push('/login')
        return
      }

      // Get purchases
      const { data: purchases } = await supabase
        .from('purchases')
        .select('course_id')
        .eq('user_id', userData.user.id)
        .eq('status', 'success')

      if (!purchases || purchases.length === 0) {
        setLoading(false)
        return
      }

      const courseIds = purchases.map(p => p.course_id)

      // Get courses
      const { data: coursesData } = await supabase
        .from('courses')
        .select('*')
        .in('id', courseIds)

      setCourses(coursesData || [])
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className="text-white p-10">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">My Courses</h1>

      {courses.length === 0 ? (
        <p className="text-gray-400">You haven't purchased any courses yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map(course => (
            <div
              key={course.id}
              onClick={() => router.push(`/course/${course.id}`)}
              className="bg-gray-900 p-4 rounded cursor-pointer hover:bg-gray-800"
            >
              {course.thumbnail && (
                <img
                  src={course.thumbnail}
                  className="w-full h-40 object-cover rounded mb-3"
                />
              )}

              <h2 className="text-lg font-semibold">{course.title}</h2>
              <p className="text-gray-400 text-sm mt-1">
                Continue learning →
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}