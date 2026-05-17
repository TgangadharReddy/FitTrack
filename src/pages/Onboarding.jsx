import { useState } from "react";
import { motion } from "framer-motion";

function Onboarding() {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    goals: [],
    activityLevel: "",
  });

  const [error, setError] = useState("");

  // Handle Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Toggle Goals
  const toggleGoal = (goal) => {

    if (formData.goals.includes(goal)) {

      setFormData({
        ...formData,
        goals: formData.goals.filter((g) => g !== goal),
      });

    } else {

      setFormData({
        ...formData,
        goals: [...formData.goals, goal],
      });

    }
  };

  // Step 1 Validation
  const handleStepOne = () => {

    setError("");

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill all fields");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setStep(2);
  };

  // Step 2 Validation
  const handleStepTwo = () => {

    setError("");

    if (
      !formData.age ||
      !formData.gender ||
      !formData.height ||
      !formData.weight
    ) {
      setError("Please fill all personal details");
      return;
    }

    setStep(3);
  };

  // Step 3 Validation
  const handleStepThree = () => {

    setError("");

    if (formData.goals.length === 0) {
      setError("Please select at least one fitness goal");
      return;
    }

    setStep(4);
  };

  // Step 4 Validation
  const handleStepFour = () => {

    setError("");

    if (!formData.activityLevel) {
      setError("Please select activity level");
      return;
    }

    setStep(5);
  };

  // Fitness Goals
  const fitnessGoals = [
    {
      title: "Lose Weight",
      emoji: "🔥",
    },
    {
      title: "Build Muscle",
      emoji: "💪",
    },
    {
      title: "Stay Active",
      emoji: "🏃",
    },
    {
      title: "Reduce Stress",
      emoji: "🧘",
    },
  ];

  // Activity Levels
  const activityLevels = [
    {
      title: "Sedentary",
      description: "Desk job, little movement",
      emoji: "🪑",
    },
    {
      title: "Lightly Active",
      description: "1-2 workouts/week",
      emoji: "🚶",
    },
    {
      title: "Moderately Active",
      description: "3-4 workouts/week",
      emoji: "🏃",
    },
    {
      title: "Very Active",
      description: "5+ workouts/week",
      emoji: "🔥",
    },
  ];

  return (

    <section className="min-h-screen bg-black flex items-center justify-center px-6 py-20">

      <motion.div
        key={step}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-3xl bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl"
      >

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <h2 className="text-5xl font-bold text-white">

            {step === 1 && "Create Account"}
            {step === 2 && "Personal Details"}
            {step === 3 && "Fitness Goals"}
            {step === 4 && "Activity Level"}
            {step === 5 && "Profile Complete"}

          </h2>

          <span className="text-purple-400 font-semibold">
            Step {step} / 5
          </span>

        </div>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden mb-10">

          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
            style={{ width: `${step * 20}%` }}
          />

        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-400 p-4 rounded-2xl mb-6">
            {error}
          </div>
        )}

        {/* STEP 1 */}
        {step === 1 && (

          <div className="space-y-6">

            <div>
              <label className="text-gray-300 block mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-gray-300 block mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-gray-300 block mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-gray-300 block mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-purple-500"
              />
            </div>

            <button
              onClick={handleStepOne}
              className="w-full bg-purple-600 hover:bg-purple-700 transition py-4 rounded-2xl text-white font-semibold"
            >
              Continue
            </button>

          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (

          <div className="space-y-6">

            <div>
              <label className="text-gray-300 block mb-2">
                Age
              </label>

              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-gray-300 block mb-2">
                Gender
              </label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-purple-500"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div>
              <label className="text-gray-300 block mb-2">
                Height (cm)
              </label>

              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="Enter height"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-gray-300 block mb-2">
                Weight (kg)
              </label>

              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="Enter weight"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-purple-500"
              />
            </div>

            <div className="flex gap-4">

              <button
                onClick={() => setStep(1)}
                className="w-1/2 bg-white/10 hover:bg-white/20 transition py-4 rounded-2xl text-white font-semibold"
              >
                Back
              </button>

              <button
                onClick={handleStepTwo}
                className="w-1/2 bg-purple-600 hover:bg-purple-700 transition py-4 rounded-2xl text-white font-semibold"
              >
                Continue
              </button>

            </div>

          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (

          <div className="space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {fitnessGoals.map((goal, index) => (

                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => toggleGoal(goal.title)}
                  className={`cursor-pointer rounded-3xl p-8 border transition duration-300 ${
                    formData.goals.includes(goal.title)
                      ? "border-purple-500 bg-purple-500/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >

                  <div className="text-5xl mb-4">
                    {goal.emoji}
                  </div>

                  <h3 className="text-white text-2xl font-bold">
                    {goal.title}
                  </h3>

                </motion.div>
              ))}

            </div>

            <div className="flex gap-4">

              <button
                onClick={() => setStep(2)}
                className="w-1/2 bg-white/10 hover:bg-white/20 transition py-4 rounded-2xl text-white font-semibold"
              >
                Back
              </button>

              <button
                onClick={handleStepThree}
                className="w-1/2 bg-purple-600 hover:bg-purple-700 transition py-4 rounded-2xl text-white font-semibold"
              >
                Continue
              </button>

            </div>

          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (

          <div className="space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {activityLevels.map((level, index) => (

                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  onClick={() =>
                    setFormData({
                      ...formData,
                      activityLevel: level.title,
                    })
                  }
                  className={`cursor-pointer rounded-3xl p-8 border transition duration-300 ${
                    formData.activityLevel === level.title
                      ? "border-purple-500 bg-purple-500/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >

                  <div className="text-5xl mb-4">
                    {level.emoji}
                  </div>

                  <h3 className="text-white text-2xl font-bold">
                    {level.title}
                  </h3>

                  <p className="text-gray-400 mt-3">
                    {level.description}
                  </p>

                </motion.div>
              ))}

            </div>

            <div className="flex gap-4">

              <button
                onClick={() => setStep(3)}
                className="w-1/2 bg-white/10 hover:bg-white/20 transition py-4 rounded-2xl text-white font-semibold"
              >
                Back
              </button>

              <button
                onClick={handleStepFour}
                className="w-1/2 bg-purple-600 hover:bg-purple-700 transition py-4 rounded-2xl text-white font-semibold"
              >
                Continue
              </button>

            </div>

          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (

          <div className="space-y-8 text-center">

            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-8xl"
            >
              🎉
            </motion.div>

            {/* Heading */}
            <div>

              <h2 className="text-5xl font-bold text-white mb-4">
                Welcome to FitTrack
              </h2>

              <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
                Your onboarding is completed successfully.
                Your personalized fitness profile is ready.
              </p>

            </div>

            {/* Summary Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-left space-y-5">

              <h3 className="text-2xl font-bold text-white mb-4">
                Your Profile Summary
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <p className="text-gray-400">
                    Full Name
                  </p>

                  <h4 className="text-white text-xl font-semibold">
                    {formData.fullName}
                  </h4>
                </div>

                <div>
                  <p className="text-gray-400">
                    Email
                  </p>

                  <h4 className="text-white text-xl font-semibold">
                    {formData.email}
                  </h4>
                </div>

                <div>
                  <p className="text-gray-400">
                    Activity Level
                  </p>

                  <h4 className="text-white text-xl font-semibold">
                    {formData.activityLevel}
                  </h4>
                </div>

                <div>
                  <p className="text-gray-400">
                    Fitness Goals
                  </p>

                  <h4 className="text-white text-xl font-semibold">
                    {formData.goals.join(", ")}
                  </h4>
                </div>

              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4">

              <button
                onClick={() => setStep(4)}
                className="w-full bg-white/10 hover:bg-white/20 transition py-4 rounded-2xl text-white font-semibold"
              >
                Back
              </button>

              <button
                className="w-full bg-purple-600 hover:bg-purple-700 transition py-4 rounded-2xl text-white font-semibold shadow-lg shadow-purple-500/30"
              >
                Go To Dashboard
              </button>

            </div>

          </div>
        )}

      </motion.div>

    </section>
  );
}

export default Onboarding;