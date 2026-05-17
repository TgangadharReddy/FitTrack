import { motion } from "framer-motion";

function HowItWorks() {
  return (
    <section className="py-24 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-20">
          How It Works
        </h2>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 items-center relative">

          {/* Step 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 text-center hover:border-purple-500 transition relative z-10"
          >

            <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-4xl font-bold mx-auto">
              1
            </div>

            <h3 className="text-3xl font-semibold mt-8">
              Sign Up
            </h3>

            <p className="text-gray-400 mt-4 text-lg">
              Create your FitTrack account and join the community.
            </p>

          </motion.div>

          {/* Arrow */}
          <div className="hidden md:flex absolute left-[31%] top-1/2 transform -translate-y-1/2 text-purple-500 text-6xl z-0">
            →
          </div>

          {/* Step 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 text-center hover:border-purple-500 transition relative z-10"
          >

            <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-4xl font-bold mx-auto">
              2
            </div>

            <h3 className="text-3xl font-semibold mt-8">
              Set Goals
            </h3>

            <p className="text-gray-400 mt-4 text-lg">
              Define workout plans and track your daily targets.
            </p>

          </motion.div>

          {/* Arrow */}
          <div className="hidden md:flex absolute right-[31%] top-1/2 transform -translate-y-1/2 text-purple-500 text-6xl z-0">
            →
          </div>

          {/* Step 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 text-center hover:border-purple-500 transition relative z-10"
          >

            <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-4xl font-bold mx-auto">
              3
            </div>

            <h3 className="text-3xl font-semibold mt-8">
              Track Progress
            </h3>

            <p className="text-gray-400 mt-4 text-lg">
              Analyze progress with charts and fitness analytics.
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;