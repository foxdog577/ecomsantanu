'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [courses, setCourses] = useState<any[]>([])

  // Course form
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState('')

  // Content management
  const [selectedCourseId, setSelectedCourseId] = useState('')
  const [modules, setModules] = useState<any[]>([])
  const [moduleTitle, setModuleTitle] = useState('')
  const [lessonTitle, setLessonTitle] = useState('')
  const [videoUrl, setVideoUrl] = useState('')

  // 🔐 Check admin
  const checkAdmin = async () => {
    const { data: userData } = await supabase.auth.getUser()

    if (!userData.user) {
      router.push('/login')
      return false
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', userData.user.id)
      .single()

    if (profile?.role !== 'admin') {
      router.push('/')
      return false
    }

    return true
  }

  // 📦 Fetch courses
  const fetchCourses = async () => {
    const { data } = await supabase.from('courses').select('*')
    setCourses(data || [])
  }

  // 📚 Fetch modules
  const fetchModules = async (courseId: string) => {
    const { data } = await supabase
      .from('modules')
      .select('*')
      .eq('course_id', courseId)
      .order('order_index', { ascending: true })

    setModules(data || [])
  }

  useEffect(() => {
    const init = async () => {
      const isAdmin = await checkAdmin()
      if (isAdmin) {
        await fetchCourses()
        setLoading(false)
      }
    }

    init()
  }, [])

  // ➕ Add course
  const handleAddCourse = async () => {
    if (!title || !price) {
      alert('Title and price required')
      return
    }

    await supabase.from('courses').insert([
      {
        title,
        description,
        price: Number(price),
        thumbnail,
        is_published: false,
      },
    ])

    setTitle('')
    setPrice('')
    setDescription('')
    setThumbnail('')

    fetchCourses()
  }

  // 🔄 Publish toggle
  const togglePublish = async (id: string, current: boolean) => {
    await supabase
      .from('courses')
      .update({ is_published: !current })
      .eq('id', id)

    fetchCourses()
  }

  // ❌ Delete course
  const deleteCourse = async (id: string) => {
    if (!confirm('Delete this course?')) return

    await supabase.from('courses').delete().eq('id', id)
    fetchCourses()
  }

  // ➕ Add module
  const addModule = async () => {
    if (!moduleTitle || !selectedCourseId) return

    await supabase.from('modules').insert([
      {
        course_id: selectedCourseId,
        title: moduleTitle,
        order_index: modules.length + 1,
      },
    ])

    setModuleTitle('')
    fetchModules(selectedCourseId)
  }

  // ➕ Add lesson
  const addLesson = async (moduleId: string) => {
    if (!lessonTitle || !videoUrl) return

    await supabase.from('lessons').insert([
      {
        module_id: moduleId,
        title: lessonTitle,
        video_url: videoUrl,
        order_index: 1,
      },
    ])

    setLessonTitle('')
    setVideoUrl('')
  }

  if (loading) {
    return <div className="p-10 text-white">Checking admin...</div>
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      {/* ➕ Add Course */}
      <div className="bg-gray-900 p-6 rounded-xl mb-10 max-w-xl">
        <h2 className="text-xl font-semibold mb-4">Add Course</h2>

        <input
          className="w-full p-2 mb-2 bg-gray-800"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full p-2 mb-2 bg-gray-800"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className="w-full p-2 mb-2 bg-gray-800"
          placeholder="Thumbnail URL"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />

        <textarea
          className="w-full p-2 mb-2 bg-gray-800"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={handleAddCourse}
          className="bg-green-600 px-4 py-2 rounded"
        >
          Add Course
        </button>
      </div>

      {/* 📚 Course List */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">All Courses</h2>

        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-800 p-4 rounded mb-3 flex justify-between"
          >
            <div>
              <h3>{course.title}</h3>
              <p className="text-sm text-gray-400">
                ₹{course.price} •{' '}
                {course.is_published ? 'Published' : 'Draft'}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  togglePublish(course.id, course.is_published)
                }
                className="bg-blue-600 px-3 py-1 rounded"
              >
                {course.is_published ? 'Unpublish' : 'Publish'}
              </button>

              <button
                onClick={() => deleteCourse(course.id)}
                className="bg-red-600 px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 📦 Manage Content */}
      <div className="bg-gray-900 p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-4">Manage Course Content</h2>

        <select
          className="w-full p-2 mb-4 bg-gray-800"
          onChange={(e) => {
            setSelectedCourseId(e.target.value)
            fetchModules(e.target.value)
          }}
        >
          <option value="">Select Course</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </select>

        {/* Add Module */}
        <input
          className="w-full p-2 mb-2 bg-gray-800"
          placeholder="Module Title"
          value={moduleTitle}
          onChange={(e) => setModuleTitle(e.target.value)}
        />

        <button
          onClick={addModule}
          className="bg-green-600 px-4 py-1 rounded mb-4"
        >
          Add Module
        </button>

        {/* Modules */}
        {modules.map((module) => (
          <div key={module.id} className="mb-4 border p-3 border-gray-700">
            <h3 className="text-green-400">{module.title}</h3>

            <input
              className="w-full p-2 mt-2 bg-gray-800"
              placeholder="Lesson Title"
              value={lessonTitle}
              onChange={(e) => setLessonTitle(e.target.value)}
            />

            <input
              className="w-full p-2 mt-2 bg-gray-800"
              placeholder="YouTube URL"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />

            <button
              onClick={() => addLesson(module.id)}
              className="bg-blue-600 px-3 py-1 mt-2 rounded"
            >
              Add Lesson
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}