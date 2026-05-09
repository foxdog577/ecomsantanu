import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabaseClient'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const baseUrl = 'https://ecomsantanu.com'

  const { data: courses } = await supabase
    .from('courses')
    .select('id')
    .eq('is_published', true)

  const courseUrls =
    courses?.map((course) => ({
      url: `${baseUrl}/course/${course.id}`,
      lastModified: new Date(),
    })) || []

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/refund-policy`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },

    ...courseUrls,
  ]
}