import { Metadata } from 'next'
import { supabase } from '@/lib/supabaseClient'
import CourseClient from './CourseClient'

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

export default function CoursePage() {
  return <CourseClient />
}