'use client'

import Link from 'next/link'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function RegisterPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agree, setAgree] = useState(false)

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [showPassword, setShowPassword] = useState(false)

  const handleRegister = async () => {

    setError('')
    setSuccess('')

    // VALIDATION
    if (!email || !password) {
      setError('Please fill all fields.')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    if (!agree) {
      setError('You must agree to the Terms & Conditions.')
      return
    }

    try {

      setLoading(true)

      const { error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        setError(error.message)
      } else {

        setSuccess(
          'Registration successful! Please check your email for verification.'
        )

        setEmail('')
        setPassword('')
        setAgree(false)
      }

    } catch {
      setError('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 blur-[140px]" />

      </div>

      {/* CARD */}
      <div className="relative z-10 w-full max-w-md bg-gray-950 border border-gray-800 rounded-3xl p-8 shadow-2xl">

        {/* BRAND */}
        <div className="text-center mb-10">

          <p className="text-green-400 mb-3">
            ecomsantanu
          </p>

          <h1 className="text-4xl font-bold mb-4">
            Create Account
          </h1>

          <p className="text-gray-400 leading-7">
            Start learning practical digital skills
            and unlock new opportunities.
          </p>
        </div>

        {/* SUCCESS */}
        {success && (
          <div className="bg-green-500/10 border border-green-500 text-green-400 rounded-xl p-4 mb-6 text-sm">
            {success}
          </div>
        )}

        {/* ERROR */}
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-400 rounded-xl p-4 mb-6 text-sm">
            {error}
          </div>
        )}

        {/* FORM */}
        <div className="space-y-6">

          {/* EMAIL */}
          <div>

            <label className="block text-sm text-gray-400 mb-3">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black border border-gray-800 rounded-xl px-5 py-4 outline-none focus:border-green-500 transition"
            />
          </div>

          {/* PASSWORD */}
          <div>

            <label className="block text-sm text-gray-400 mb-3">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black border border-gray-800 rounded-xl px-5 py-4 pr-16 outline-none focus:border-green-500 transition"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-white transition"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>

            </div>
          </div>

          {/* TERMS */}
          <div className="flex items-start gap-3">

            <input
              type="checkbox"
              checked={agree}
              onChange={(e) =>
                setAgree(e.target.checked)
              }
              className="mt-1"
            />

            <p className="text-sm text-gray-400 leading-6">

              I agree to the{' '}

              <Link
                href="/terms"
                className="text-green-400 hover:underline"
              >
                Terms & Conditions
              </Link>

              {' '}and{' '}

              <Link
                href="/privacy-policy"
                className="text-green-400 hover:underline"
              >
                Privacy Policy
              </Link>

            </p>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 transition py-4 rounded-xl text-lg font-medium"
          >

            {loading
              ? 'Creating Account...'
              : 'Create Account'}

          </button>

        </div>

        {/* LOGIN LINK */}
        <div className="mt-8 text-center">

          <p className="text-gray-400">

            Already have an account?{' '}

            <Link
              href="/login"
              className="text-green-400 hover:underline"
            >
              Login
            </Link>

          </p>
        </div>

      </div>
    </div>
  )
}