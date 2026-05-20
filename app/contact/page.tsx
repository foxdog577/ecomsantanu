'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    // 🚀 Future backend/email integration here
    console.log(formData)

    setSubmitted(true)

    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-gray-900">

        <div className="max-w-6xl mx-auto px-6 py-24">

          <p className="text-green-400 mb-4">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            We’re Here To Help
          </h1>

          <p className="text-gray-400 text-xl leading-9 max-w-3xl">
            Have questions, feedback, or support requests?
            Reach out anytime and we’ll do our best to assist you.
          </p>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>

            <p className="text-green-400 mb-4">
              Support Information
            </p>

            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Let’s Connect
            </h2>

            <p className="text-gray-400 leading-8 text-lg mb-10">
              Whether you need help accessing your course,
              have business inquiries, or simply want to
              learn more about ecomsantanu,
              feel free to contact us.
            </p>

            {/* CONTACT CARDS */}
            <div className="space-y-6">

              {/* EMAIL */}
              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-green-500/40 transition">

                <div className="text-5xl mb-6">
                  ✉️
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  Email Support
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  Reach out for support, account help,
                  or general inquiries anytime.
                </p>

                <p className="text-green-400 text-lg">
                  ask@ecomsantanu.com
                </p>

              </div>

              {/* RESPONSE */}
              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-green-500/40 transition">

                <div className="text-5xl mb-6">
                  ⏱️
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  Response Time
                </h3>

                <p className="text-gray-400 leading-7 text-lg">
                  We typically respond to support
                  requests within 24–48 hours.
                </p>

              </div>

            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl">

            <h2 className="text-3xl font-bold mb-3">
              Send A Message
            </h2>

            <p className="text-gray-400 mb-10 leading-7">
              Fill out the form below and we’ll get back
              to you as soon as possible.
            </p>

            {submitted ? (
              <div className="bg-green-600/10 border border-green-500 rounded-2xl p-8">

                <h3 className="text-2xl font-semibold mb-4 text-green-400">
                  Message Sent Successfully
                </h3>

                <p className="text-gray-300 leading-8">
                  Thank you for reaching out.
                  We’ll get back to you shortly.
                </p>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-7"
              >

                {/* NAME */}
                <div>

                  <label className="block text-sm text-gray-400 mb-3">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-800 rounded-2xl px-5 py-4 outline-none focus:border-green-500 transition"
                    placeholder="Enter your full name"
                  />

                </div>

                {/* EMAIL */}
                <div>

                  <label className="block text-sm text-gray-400 mb-3">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-800 rounded-2xl px-5 py-4 outline-none focus:border-green-500 transition"
                    placeholder="Enter your email address"
                  />

                </div>

                {/* MESSAGE */}
                <div>

                  <label className="block text-sm text-gray-400 mb-3">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-black border border-gray-800 rounded-2xl px-5 py-4 outline-none focus:border-green-500 transition resize-none"
                    placeholder="Write your message"
                  />

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 transition py-4 rounded-2xl text-lg font-medium"
                >
                  Send Message
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* MAP SECTION */}
      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="text-green-400 mb-4">
              Our Location
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Find Us On The Map
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto leading-8 text-lg">
              We’re always here to connect, collaborate,
              and support your learning journey.
            </p>

          </div>

          <div className="rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.2979004113804!2d88.2037111744638!3d22.3950574796185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02635ea98d78bf%3A0x28fdc787d1dacc6!2sFLORIAN%20NATURE!5e1!3m2!1sen!2sin!4v1778862614688!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-gray-900">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-green-400 mb-4">
              Frequently Asked Questions
            </p>

            <h2 className="text-4xl font-bold">
              Common Questions
            </h2>

          </div>

          <div className="space-y-6">

            {/* FAQ 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

              <h3 className="text-2xl font-semibold mb-4">
                How do I access my purchased course?
              </h3>

              <p className="text-gray-400 leading-8 text-lg">
                After successful payment, your course
                will automatically become available inside
                your dashboard.
              </p>

            </div>

            {/* FAQ 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

              <h3 className="text-2xl font-semibold mb-4">
                Do I get lifetime access?
              </h3>

              <p className="text-gray-400 leading-8 text-lg">
                Yes, all purchased courses currently include
                lifetime access unless stated otherwise.
              </p>

            </div>

            {/* FAQ 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

              <h3 className="text-2xl font-semibold mb-4">
                Can beginners join these courses?
              </h3>

              <p className="text-gray-400 leading-8 text-lg">
                Absolutely. Our courses are designed to be
                beginner-friendly while still providing
                practical real-world knowledge.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-28 border-t border-gray-900">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-green-400 mb-4">
            Explore Learning
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-8">
            Continue Your
            <br />
            Learning Journey
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            Discover practical courses designed
            to help you learn, grow, and create
            new opportunities.
          </p>

          <Link
            href="/courses"
            className="inline-block bg-green-600 hover:bg-green-700 transition px-10 py-4 rounded-2xl text-lg font-medium"
          >
            Explore Courses
          </Link>

        </div>
      </section>

    </div>
  )
}