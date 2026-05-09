import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://ecomsantanu.com'),

  title: {
    default: 'EcomSantanu | Practical Learning Platform',
    template: '%s | ecomsantanu',
  },

  description:
    'Learn practical digital skills, e-commerce strategies, productivity, and online income opportunities through structured beginner-friendly courses.',

  keywords: [
    'ecommerce course',
    'amazon course',
    'meesho course',
    'digital skills',
    'online learning',
    'ecomsantanu',
    'online earning',
    'business learning',
    'amazon seller',
    'practical education',
  ],

  authors: [
    {
      name: 'ecomsantanu',
    },
  ],

  creator: 'ecomsantanu',

  openGraph: {
    title: 'ecomsantanu',
    description:
      'Learn practical digital skills, e-commerce strategies, and online income opportunities through beginner-friendly courses.',

    url: 'https://ecomsantanu.com',

    siteName: 'ecomsantanu',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ecomsantanu',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'ecomsantanu',

    description:
      'Learn practical digital skills, e-commerce strategies, and online income opportunities.',

    images: ['/og-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}