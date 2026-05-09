'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="max-w-xl text-center">

        <div className="text-6xl mb-6">
          ⚠️
        </div>

        <h1 className="text-4xl font-bold mb-6">
          Something Went Wrong
        </h1>

        <p className="text-gray-400 leading-8 mb-10">
          An unexpected error occurred while loading this page.
          Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-xl text-lg font-medium"
        >
          Try Again
        </button>

      </div>
    </div>
  )
}