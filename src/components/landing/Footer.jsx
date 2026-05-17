function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <h1 className="text-2xl font-bold text-purple-500">
          FitTrack
        </h1>

        <p className="text-gray-400 text-sm">
          © 2026 FitTrack. All rights reserved.
        </p>

        <div className="flex gap-6 text-gray-400">
          <a href="#" className="hover:text-purple-500 transition">
            Home
          </a>

          <a href="#" className="hover:text-purple-500 transition">
            Features
          </a>

          <a href="#" className="hover:text-purple-500 transition">
            Pricing
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer