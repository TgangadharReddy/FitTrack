import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-600/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-20 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Heading */}
            <h1 className="font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Track Your <br />

              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                Fitness Journey
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-400 text-base sm:text-lg mt-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Transform your workouts, monitor progress,
              and achieve your dream physique with FitTrack.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

              <button className="bg-purple-600 hover:bg-purple-700 transition duration-300 px-7 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-purple-500/40 hover:scale-105">
                Get Started Free
              </button>

              <button className="border border-white/20 hover:border-purple-500 hover:bg-white/5 transition duration-300 px-7 py-4 rounded-2xl font-semibold text-lg hover:scale-105">
                Watch Demo
              </button>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-lg"
              >
                <h2 className="text-3xl font-bold">10K+</h2>

                <p className="text-gray-400 mt-2 text-sm">
                  Active Users
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-lg"
              >
                <h2 className="text-3xl font-bold">500+</h2>

                <p className="text-gray-400 mt-2 text-sm">
                  Workout Plans
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-lg"
              >
                <h2 className="text-3xl font-bold">98%</h2>

                <p className="text-gray-400 mt-2 text-sm">
                  Success Rate
                </p>
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
              alt="Fitness workout"
              className="rounded-[30px] shadow-2xl shadow-purple-500/20 
              w-full 
              max-w-[280px] 
              sm:max-w-[380px] 
              lg:max-w-[500px]
              object-cover hover:scale-105 transition duration-500"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;