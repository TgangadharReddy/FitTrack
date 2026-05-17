import {
  Dumbbell,
  Activity,
  HeartPulse,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    title: "Workout Tracking",
    description:
      "Track your workouts and daily progress easily.",
    icon: Dumbbell,
  },
  {
    title: "Health Monitoring",
    description:
      "Monitor calories, heart rate, and activity.",
    icon: Activity,
  },
  {
    title: "Personal Fitness",
    description:
      "Achieve your goals with personalized plans.",
    icon: HeartPulse,
  },
];

function Features() {
  return (
    <section className="bg-black py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-5xl font-bold">
            Features
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Everything you need to stay fit and healthy
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-purple-500 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center mb-6">
                  <Icon size={32} className="text-white" />
                </div>

                <h3 className="text-white text-2xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;