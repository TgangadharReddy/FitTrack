function Testimonials() {
  return (
    <section className="py-24 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-purple-500 transition">

            <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-bold">
              A
            </div>

            <h3 className="text-2xl font-semibold mt-6">
              Alex
            </h3>

            <p className="text-yellow-400 mt-2">
              ★★★★★
            </p>

            <p className="text-gray-400 mt-4">
              FitTrack completely changed my workout routine.
            </p>

          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-purple-500 transition">

            <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-bold">
              S
            </div>

            <h3 className="text-2xl font-semibold mt-6">
              Sarah
            </h3>

            <p className="text-yellow-400 mt-2">
              ★★★★★
            </p>

            <p className="text-gray-400 mt-4">
              Beautiful dashboard and easy workout tracking.
            </p>

          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-purple-500 transition">

            <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-bold">
              J
            </div>

            <h3 className="text-2xl font-semibold mt-6">
              John
            </h3>

            <p className="text-yellow-400 mt-2">
              ★★★★★
            </p>

            <p className="text-gray-400 mt-4">
              The analytics helped me stay consistent every week.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;