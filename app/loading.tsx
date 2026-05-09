export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="text-center">

        {/* SPINNER */}
        <div className="w-16 h-16 border-4 border-gray-800 border-t-green-500 rounded-full animate-spin mx-auto mb-6" />

        <h2 className="text-2xl font-semibold mb-2">
          Loading
        </h2>

        <p className="text-gray-400">
          Please wait a moment...
        </p>
      </div>
    </div>
  )
}