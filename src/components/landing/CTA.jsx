function CTA() {
  return (
    <section className="py-24 bg-black text-white">

      <div className="max-w-4xl mx-auto px-6 text-center bg-zinc-900 p-12 rounded-3xl border border-zinc-800">

        <h2 className="text-5xl font-bold">
          Start Your Fitness Journey
        </h2>

        <p className="text-gray-400 mt-6 text-xl">
          Join FitTrack today and achieve your goals faster.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-10 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="bg-black border border-zinc-700 rounded-xl px-6 py-4 outline-none focus:border-purple-500 w-full md:w-96"
          />

          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-semibold transition">
            Get Started
          </button>

        </div>

      </div>

    </section>
  );
}

export default CTA;