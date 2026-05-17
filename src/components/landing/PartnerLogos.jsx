import { motion } from "framer-motion";

function PartnerLogos() {
  return (
    <section className="py-20 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Trusted By Leading Fitness Brands
        </motion.h2>

        <p className="text-gray-400 mt-6 text-lg">
          Join thousands of users transforming their fitness journey.
        </p>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex items-center justify-center hover:border-purple-500 transition"
          >
            <h3 className="text-3xl font-bold text-white">
              Nike
            </h3>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex items-center justify-center hover:border-purple-500 transition"
          >
            <h3 className="text-3xl font-bold text-white">
              Adidas
            </h3>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex items-center justify-center hover:border-purple-500 transition"
          >
            <h3 className="text-3xl font-bold text-white">
              Puma
            </h3>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex items-center justify-center hover:border-purple-500 transition"
          >
            <h3 className="text-3xl font-bold text-white">
              Fitbit
            </h3>
          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default PartnerLogos;