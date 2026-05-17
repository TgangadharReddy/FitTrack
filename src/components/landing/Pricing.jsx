import { motion } from "framer-motion";

const plans = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Workout Tracking",
      "Basic Analytics",
      "Email Support",
    ],
  },
  {
    title: "Pro",
    price: "$29",
    popular: true,
    features: [
      "Advanced Analytics",
      "Custom Workout Plans",
      "Priority Support",
    ],
  },
  {
    title: "Elite",
    price: "$59",
    features: [
      "AI Fitness Coach",
      "Nutrition Tracking",
      "24/7 Premium Support",
    ],
  },
];

function Pricing() {
  return (
    <section className="bg-black py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >

          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Pricing Plans
          </h2>

          <p className="text-gray-400 mt-4 text-lg md:text-xl">
            Choose the perfect plan for your fitness journey
          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`relative rounded-3xl p-10 text-center transition duration-300 border ${
                plan.popular
                  ? "bg-purple-600/10 border-purple-500 shadow-2xl shadow-purple-500/20"
                  : "bg-white/5 border-white/10 hover:border-purple-500"
              }`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm px-4 py-1 rounded-full font-semibold shadow-lg shadow-purple-500/30">
                  Popular
                </div>
              )}

              {/* Plan Title */}
              <h3 className="text-white text-3xl font-bold mb-4">
                {plan.title}
              </h3>

              {/* Price */}
              <p className="text-purple-500 text-6xl font-bold mb-8">
                {plan.price}

                <span className="text-gray-400 text-lg font-normal">
                  /month
                </span>
              </p>

              {/* Features */}
              <div className="space-y-4 mb-10">

                {plan.features.map((feature, i) => (
                  <p
                    key={i}
                    className="text-gray-300 text-lg"
                  >
                    ✓ {feature}
                  </p>
                ))}

              </div>

              {/* Button */}
              <button
                className={`w-full py-4 rounded-2xl text-white font-semibold transition duration-300 ${
                  plan.popular
                    ? "bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/30"
                    : "bg-zinc-800 hover:bg-zinc-700"
                }`}
              >
                Choose Plan
              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Pricing;