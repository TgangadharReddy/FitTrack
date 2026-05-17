function SocialProof() {
  return (
    <section className="py-20 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-purple-500 transition">
            <h2 className="text-5xl font-bold text-purple-500">
              10K+
            </h2>

            <p className="text-gray-400 mt-4">
              Active Users
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-purple-500 transition">
            <h2 className="text-5xl font-bold text-purple-500">
              4.9★
            </h2>

            <p className="text-gray-400 mt-4">
              User Rating
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-purple-500 transition">
            <h2 className="text-5xl font-bold text-purple-500">
              500+
            </h2>

            <p className="text-gray-400 mt-4">
              Workout Programs
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default SocialProof;