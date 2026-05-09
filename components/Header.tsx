'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function Header() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
    }

    getUser()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-green-500"
        >
          EcomSantanu
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link
            href="/"
            className="hover:text-green-400 transition"
          >
            Home
          </Link>

          <Link
            href="/courses"
            className="hover:text-green-400 transition"
          >
            Courses
          </Link>

          <Link
            href="/about"
            className="hover:text-green-400 transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="hover:text-green-400 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {user ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm text-gray-300 hover:text-green-400 transition"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded text-sm"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}