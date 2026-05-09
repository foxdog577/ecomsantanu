'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useParams } from 'next/navigation'
import { Metadata } from 'next'


export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {

  const { data: course } = await supabase
    .from('courses')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!course) {
    return {
      title: 'Course Not Found',
    }
  }

  return {
    title: course.title,

    description:
      course.description ||
      'Learn practical digital skills on ecomsantanu.',

    openGraph: {
      title: course.title,

      description:
        course.description ||
        'Learn practical digital skills on ecomsantanu.',

      images: [
        {
          url: course.thumbnail || '/og-image.png',
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',

      title: course.title,

      description:
        course.description ||
        'Learn practical digital skills on ecomsantanu.',

      images: [
        course.thumbnail || '/og-image.png',
      ],
    },
  }
}

const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

const getEmbedUrl = (url: string) => {
  try {
    const urlObj = new URL(url)

    if (urlObj.hostname.includes('youtube.com')) {
      const videoId = urlObj.searchParams.get('v')
      return `https://www.youtube.com/embed/${videoId}`
    }

    if (urlObj.hostname.includes('youtu.be')) {
      const videoId = urlObj.pathname.slice(1)
      return `https://www.youtube.com/embed/${videoId}`
    }

    return ''
  } catch {
    return ''
  }
}

export default function CourseDetail() {
  const { id } = useParams()

  const [course, setCourse] = useState<any>(null)
  const [modules, setModules] = useState<any[]>([])
  const [selectedLesson, setSelectedLesson] = useState<any>(null)
  const [hasAccess, setHasAccess] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return

      // 📦 Fetch course
      const { data: courseData } = await supabase
        .from('courses')
        .select('*')
        .eq('id', id)
        .single()

      setCourse(courseData)

      // 📚 Fetch modules + lessons
      const { data: modulesData } = await supabase
        .from('modules')
        .select(`
          *,
          lessons (*)
        `)
        .eq('course_id', id)
        .order('order_index', { ascending: true })

      setModules(modulesData || [])

      // 🎥 Default lesson
      if (modulesData && modulesData.length > 0) {
        const firstModule = modulesData[0]

        if (firstModule.lessons?.length > 0) {
          setSelectedLesson(firstModule.lessons[0])
        }
      }

      // 🔐 Check purchase
      const { data: userData } = await supabase.auth.getUser()

      if (userData.user) {
        const { data: purchases } = await supabase
          .from('purchases')
          .select('*')
          .eq('user_id', userData.user.id)
          .eq('course_id', id)
          .eq('status', 'success')

        if (purchases && purchases.length > 0) {
          setHasAccess(true)
        }
      }
    }

    fetchData()
  }, [id])

  const handlePayment = async () => {
    const loaded = await loadRazorpay()

    if (!loaded) {
      alert('Razorpay SDK failed to load')
      return
    }

    const res = await fetch('/api/create-order', {
      method: 'POST',
      body: JSON.stringify({ amount: course.price }),
    })

    const order = await res.json()

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: 'INR',
      order_id: order.id,

      handler: async function (response: any) {
        const { data: userData } = await supabase.auth.getUser()

        await supabase.from('purchases').insert([
          {
            user_id: userData.user?.id,
            course_id: course.id,
            payment_id: response.razorpay_payment_id,
            status: 'success',
          },
        ])

        alert('Payment successful!')
        location.reload()
      },
    }

    const rzp = new (window as any).Razorpay(options)
    rzp.open()
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">

        <div className="grid lg:grid-cols-[1fr_380px] gap-8">

          {/* LEFT SIDE */}
          <div>

            {/* VIDEO PLAYER */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden mb-6">

              <div className="aspect-video bg-black">

                {hasAccess ? (
                  selectedLesson?.video_url ? (
                    <iframe
                      className="w-full h-full"
                      src={getEmbedUrl(selectedLesson.video_url)}
                      allowFullScreen
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                      No video selected
                    </div>
                  )
                ) : (
                  <div className="flex items-center justify-center h-full p-10">

                    <div className="text-center max-w-md">

                      <div className="text-6xl mb-6">
                        🔒
                      </div>

                      <h2 className="text-3xl font-bold mb-4">
                        Unlock Full Course Access
                      </h2>

                      <p className="text-gray-400 leading-8 mb-8">
                        Get lifetime access to all lessons,
                        future updates, and practical learning content.
                      </p>

                      <button
                        onClick={handlePayment}
                        className="bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-xl text-lg font-medium"
                      >
                        Buy Now ₹{course.price}
                      </button>

                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* COURSE INFO */}
            <div className="mb-10">

              <div className="flex flex-wrap items-center gap-3 mb-5">

                <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">
                  Practical Course
                </span>

                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  Lifetime Access
                </span>

                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {modules.length} Modules
                </span>

              </div>

              <h1 className="text-4xl font-bold mb-5">
                {course.title}
              </h1>

              <p className="text-gray-400 leading-8 text-lg">
                {course.description}
              </p>
            </div>

            {/* LESSON INFO */}
            {selectedLesson && (
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">

                <p className="text-green-400 text-sm mb-3">
                  Current Lesson
                </p>

                <h2 className="text-2xl font-bold mb-4">
                  {selectedLesson.title}
                </h2>

                <p className="text-gray-400 leading-8">
                  Continue learning step-by-step through practical lessons.
                </p>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 h-fit lg:sticky lg:top-24">

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">
                Course Content
              </h2>

              <p className="text-gray-400 text-sm">
                Structured practical learning modules
              </p>
            </div>

            {modules.length === 0 && (
              <div className="text-gray-500">
                No modules added yet.
              </div>
            )}

            <div className="space-y-6">

              {modules.map((module, moduleIndex) => (
                <div key={module.id}>

                  {/* MODULE TITLE */}
                  <div className="flex items-center gap-3 mb-4">

                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-sm font-bold">
                      {moduleIndex + 1}
                    </div>

                    <h3 className="font-semibold text-lg">
                      {module.title}
                    </h3>
                  </div>

                  {/* LESSONS */}
                  <div className="space-y-3 ml-3 border-l border-gray-800 pl-4">

                    {module.lessons?.length > 0 ? (
                      module.lessons.map((lesson: any) => {

                        const active =
                          selectedLesson?.id === lesson.id

                        return (
                          <button
                            key={lesson.id}
                            onClick={() =>
                              hasAccess &&
                              setSelectedLesson(lesson)
                            }
                            className={`w-full text-left rounded-xl p-4 transition border ${
                              active
                                ? 'bg-green-600/20 border-green-500'
                                : 'bg-gray-950 border-gray-800 hover:border-gray-700'
                            } ${
                              !hasAccess
                                ? 'opacity-60 cursor-not-allowed'
                                : ''
                            }`}
                          >

                            <div className="flex items-start justify-between gap-3">

                              <div>
                                <p className="font-medium mb-1">
                                  {lesson.title}
                                </p>

                                <p className="text-sm text-gray-400">
                                  Video Lesson
                                </p>
                              </div>

                              <div className="text-xl">
                                {hasAccess ? '▶️' : '🔒'}
                              </div>

                            </div>
                          </button>
                        )
                      })
                    ) : (
                      <p className="text-gray-500 text-sm">
                        No lessons yet
                      </p>
                    )}

                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}