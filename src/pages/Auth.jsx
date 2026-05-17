import { useState } from "react";

import {
  FaArrowRight,
  FaArrowLeft,
  FaCheckCircle,
  FaDumbbell,
  FaRunning,
  FaHeartbeat,
  FaAppleAlt,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";

function Auth() {
  const [step, setStep] = useState(1);

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    weight: "",
    height: "",
    level: "",
    workout: "",
    goal: "",
  });

  const [errors, setErrors] = useState({});

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // VALIDATION
  const validateStep = () => {
    let newErrors = {};

    // STEP 1
    if (step === 1) {
      if (!formData.name.trim()) {
        newErrors.name = "Full name is required";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      }

      if (!formData.password.trim()) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
    }

    // STEP 2
    if (step === 2) {
      if (!formData.age) {
        newErrors.age = "Age is required";
      }

      if (!formData.weight) {
        newErrors.weight = "Weight is required";
      }

      if (!formData.height) {
        newErrors.height = "Height is required";
      }

      if (!formData.level) {
        newErrors.level = "Select fitness level";
      }
    }

    // STEP 3
    if (step === 3) {
      if (!formData.workout) {
        newErrors.workout = "Select workout style";
      }
    }

    // STEP 4
    if (step === 4) {
      if (!formData.goal) {
        newErrors.goal = "Choose fitness goal";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // NEXT STEP
  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  // PREVIOUS STEP
  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl top-[-150px] left-[-100px]" />

      <div className="absolute w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      {/* MAIN CARD */}
      <div className="relative z-10 w-full max-w-5xl bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-xl shadow-2xl shadow-purple-500/10">

        {/* HEADER */}
        <div className="text-center mb-10">

          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Welcome to{" "}

            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              FitTrack
            </span>

          </h1>

          <p className="text-gray-400 text-lg">
            Build your personalized fitness journey
          </p>

        </div>

        {/* PROGRESS */}
        <div className="mb-14">

          <div className="flex justify-between mb-4">

            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition
                ${
                  step >= item
                    ? "bg-gradient-to-r from-purple-600 to-pink-500"
                    : "bg-white/10"
                }`}
              >
                {step > item ? <FaCheckCircle /> : item}
              </div>
            ))}

          </div>

          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

            <div
              className="h-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-500"
              style={{ width: `${step * 20}%` }}
            />

          </div>

        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div>

            <h2 className="text-4xl font-bold mb-8 text-center">
              Create Your Account
            </h2>

            {/* GOOGLE BUTTON */}
            <button
              aria-label="Sign up with Google"
              className="w-full mb-6 py-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300 flex items-center justify-center gap-4 text-lg font-semibold hover:scale-[1.01]"
            >

              <FaGoogle className="text-red-400" />

              Sign up with Google

            </button>

            {/* DIVIDER */}
            <div className="flex items-center gap-4 mb-6">

              <div className="flex-1 h-[1px] bg-white/10"></div>

              <span className="text-gray-500 uppercase text-xs tracking-[3px]">
                Or Continue With Email
              </span>

              <div className="flex-1 h-[1px] bg-white/10"></div>

            </div>

            <div className="space-y-5">

              {/* NAME */}
              <div>

                <input
                  aria-label="Full Name"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-5 rounded-2xl bg-black border border-white/10 focus:border-purple-500 outline-none transition"
                />

                {errors.name && (
                  <p className="text-red-500 mt-2">
                    {errors.name}
                  </p>
                )}

              </div>

              {/* EMAIL */}
              <div>

                <input
                  aria-label="Email Address"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-5 rounded-2xl bg-black border border-white/10 focus:border-purple-500 outline-none transition"
                />

                {errors.email && (
                  <p className="text-red-500 mt-2">
                    {errors.email}
                  </p>
                )}

              </div>

              {/* PASSWORD */}
              <div>

                <div className="relative">

                  <input
                    aria-label="Password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create Strong Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-5 rounded-2xl bg-black border border-white/10 focus:border-purple-500 outline-none transition"
                  />

                  <button
                    aria-label="Toggle Password Visibility"
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </button>

                </div>

                {errors.password && (
                  <p className="text-red-500 mt-2">
                    {errors.password}
                  </p>
                )}

              </div>

            </div>

            {/* CONTINUE */}
            <button
              onClick={nextStep}
              className="w-full mt-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-xl font-semibold hover:scale-[1.02] transition flex items-center justify-center gap-3"
            >
              Continue
              <FaArrowRight />
            </button>

          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div>

            <h2 className="text-4xl font-bold mb-8 text-center">
              Personal Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <input
                  aria-label="Age"
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full p-5 rounded-2xl bg-black border border-white/10"
                />

                {errors.age && (
                  <p className="text-red-500 mt-2">
                    {errors.age}
                  </p>
                )}
              </div>

              <div>
                <input
                  aria-label="Weight"
                  type="number"
                  name="weight"
                  placeholder="Weight (kg)"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full p-5 rounded-2xl bg-black border border-white/10"
                />

                {errors.weight && (
                  <p className="text-red-500 mt-2">
                    {errors.weight}
                  </p>
                )}
              </div>

              <div>
                <input
                  aria-label="Height"
                  type="number"
                  name="height"
                  placeholder="Height (cm)"
                  value={formData.height}
                  onChange={handleChange}
                  className="w-full p-5 rounded-2xl bg-black border border-white/10"
                />

                {errors.height && (
                  <p className="text-red-500 mt-2">
                    {errors.height}
                  </p>
                )}
              </div>

              <div>
                <select
                  aria-label="Fitness Level"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="w-full p-5 rounded-2xl bg-black border border-white/10"
                >
                  <option value="">Fitness Level</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>

                {errors.level && (
                  <p className="text-red-500 mt-2">
                    {errors.level}
                  </p>
                )}
              </div>

            </div>

            <div className="flex justify-between mt-10">

              <button
                onClick={prevStep}
                className="px-8 py-4 rounded-2xl border border-white/10 flex items-center gap-2"
              >
                <FaArrowLeft />
                Back
              </button>

              <button
                onClick={nextStep}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center gap-2"
              >
                Continue
                <FaArrowRight />
              </button>

            </div>

          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-10">
              Workout Style
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              {["Strength", "Cardio", "HIIT"].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    setFormData({
                      ...formData,
                      workout: item,
                    })
                  }
                  className={`p-8 rounded-3xl border transition
                  ${
                    formData.workout === item
                      ? "border-purple-500 bg-purple-500/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <h3 className="text-2xl font-bold">
                    {item}
                  </h3>
                </button>
              ))}

            </div>

            <div className="flex justify-between mt-10">

              <button
                onClick={prevStep}
                className="px-8 py-4 rounded-2xl border border-white/10"
              >
                Back
              </button>

              <button
                onClick={nextStep}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500"
              >
                Continue
              </button>

            </div>

          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-10">
              Fitness Goals
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {["Weight Loss", "Muscle Gain", "Healthy Lifestyle"].map((goal) => (
                <button
                  key={goal}
                  onClick={() =>
                    setFormData({
                      ...formData,
                      goal,
                    })
                  }
                  className={`p-8 rounded-3xl border transition
                  ${
                    formData.goal === goal
                      ? "border-purple-500 bg-purple-500/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <h3 className="text-2xl font-bold">
                    {goal}
                  </h3>
                </button>
              ))}

            </div>

            <div className="flex justify-between mt-10">

              <button
                onClick={prevStep}
                className="px-8 py-4 rounded-2xl border border-white/10"
              >
                Back
              </button>

              <button
                onClick={nextStep}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500"
              >
                Continue
              </button>

            </div>

          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div className="text-center">

            <div className="text-8xl mb-6">
              🎉
            </div>

            <h2 className="text-5xl font-bold mb-5">
              Setup Complete
            </h2>

            <p className="text-gray-400 text-lg mb-10">
              Your fitness profile has been created successfully.
            </p>

            <a
              href="/dashboard"
              className="inline-flex items-center gap-3 px-12 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-xl font-semibold hover:scale-105 transition"
            >
              Launch Dashboard
              <FaArrowRight />
            </a>

          </div>
        )}

      </div>

    </div>
  );
}

export default Auth;