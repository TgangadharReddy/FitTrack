import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  FaFire,
  FaDumbbell,
  FaRunning,
  FaPlay,
  FaUtensils,
  FaChartLine,
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const data = [
  { day: "Mon", workout: 2 },
  { day: "Tue", workout: 3 },
  { day: "Wed", workout: 1 },
  { day: "Thu", workout: 4 },
  { day: "Fri", workout: 3 },
  { day: "Sat", workout: 5 },
  { day: "Sun", workout: 2 },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col justify-between w-64 bg-zinc-950 border-r border-white/10 p-6">

        {/* TOP SECTION */}
        <div>

          {/* LOGO */}
          <h1 className="text-4xl font-extrabold text-purple-500 mb-12">
            FitTrack
          </h1>

          {/* NAVIGATION */}
          <nav className="space-y-7 text-lg">

            <div className="flex items-center gap-4 hover:text-purple-400 cursor-pointer transition">
              <FaHome />
              Dashboard
            </div>

            <div className="flex items-center gap-4 hover:text-purple-400 cursor-pointer transition">
              <FaDumbbell />
              Workouts
            </div>

            <div className="flex items-center gap-4 hover:text-purple-400 cursor-pointer transition">
              <FaChartLine />
              Progress
            </div>

            <div className="flex items-center gap-4 hover:text-purple-400 cursor-pointer transition">
              <FaCog />
              Settings
            </div>

          </nav>
        </div>

        {/* LOGOUT */}
        <div className="pt-10 border-t border-white/10">

          <button
            aria-label="Logout"
            className="flex items-center gap-4 text-red-400 hover:text-red-500 transition text-lg hover:translate-x-1"
          >

            <FaSignOutAlt />

            Logout

          </button>

        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 pb-24 md:pb-10 overflow-x-hidden">

        {/* Header */}
        <div className="flex justify-between items-center mb-12">

          <div>
            <h1 className="text-5xl font-extrabold">
              Welcome Back, Gangadhar 👋
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              Track your fitness journey today
            </p>
          </div>

          <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-bold shadow-lg shadow-purple-500/40">
            G
          </div>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

          <div className="bg-zinc-900 rounded-3xl p-7 border border-white/10 hover:border-orange-500 hover:scale-[1.02] transition duration-300">

            <FaFire className="text-orange-500 text-4xl mb-5" />

            <h2 className="text-gray-400 text-lg">
              Calories Burned
            </h2>

            <p className="text-5xl font-bold mt-3">
              1240
            </p>

          </div>

          <div className="bg-zinc-900 rounded-3xl p-7 border border-white/10 hover:border-purple-500 hover:scale-[1.02] transition duration-300">

            <FaDumbbell className="text-purple-500 text-4xl mb-5" />

            <h2 className="text-gray-400 text-lg">
              Workouts This Week
            </h2>

            <p className="text-5xl font-bold mt-3">
              5
            </p>

          </div>

          <div className="bg-zinc-900 rounded-3xl p-7 border border-white/10 hover:border-pink-500 hover:scale-[1.02] transition duration-300">

            <FaRunning className="text-pink-500 text-4xl mb-5" />

            <h2 className="text-gray-400 text-lg">
              Streak Days
            </h2>

            <p className="text-5xl font-bold mt-3">
              12
            </p>

          </div>

          <div className="bg-zinc-900 rounded-3xl p-7 border border-white/10 hover:border-green-500 hover:scale-[1.02] transition duration-300">

            <FaChartLine className="text-green-500 text-4xl mb-5" />

            <h2 className="text-gray-400 text-lg">
              Goal Progress
            </h2>

            <p className="text-5xl font-bold mt-3">
              75%
            </p>

          </div>

        </div>

        {/* Workout + Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">

          {/* Workout */}
          <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10 hover:border-purple-500 transition duration-300">

            <h2 className="text-4xl font-bold mb-8">
              Today's Workout
            </h2>

            <div className="space-y-6 text-lg">

              <label className="flex items-center gap-4">
                <input
                  type="checkbox"
                  className="w-6 h-6 accent-purple-600"
                />
                Push Ups - 20 reps
              </label>

              <label className="flex items-center gap-4">
                <input
                  type="checkbox"
                  className="w-6 h-6 accent-purple-600"
                />
                Squats - 30 reps
              </label>

              <label className="flex items-center gap-4">
                <input
                  type="checkbox"
                  className="w-6 h-6 accent-purple-600"
                />
                Running - 15 mins
              </label>

            </div>

          </div>

          {/* Quick Actions */}
          <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10 hover:border-purple-500 transition duration-300">

            <h2 className="text-4xl font-bold mb-8">
              Quick Actions
            </h2>

            <div className="space-y-5">

              <button
                aria-label="Start Workout"
                className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:scale-[1.02] transition duration-300 p-5 rounded-2xl flex items-center gap-4 text-xl font-semibold shadow-lg shadow-purple-500/20"
              >

                <FaPlay />

                Start Workout

              </button>

              <button
                aria-label="Log Meal"
                className="w-full bg-gradient-to-r from-pink-600 to-rose-500 hover:scale-[1.02] transition duration-300 p-5 rounded-2xl flex items-center gap-4 text-xl font-semibold shadow-lg shadow-pink-500/20"
              >

                <FaUtensils />

                Log Meal

              </button>

              <button
                aria-label="View Progress"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:scale-[1.02] transition duration-300 p-5 rounded-2xl flex items-center gap-4 text-xl font-semibold shadow-lg shadow-green-500/20"
              >

                <FaChartLine />

                View Progress

              </button>

            </div>

          </div>

        </div>

        {/* Weekly Chart */}
        <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10 hover:border-purple-500 transition duration-300">

          <h2 className="text-4xl font-bold mb-10">
            Weekly Activity
          </h2>

          <div className="h-[400px] w-full">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  left: 0,
                  bottom: 20,
                }}
              >

                <XAxis
                  dataKey="day"
                  stroke="#aaa"
                />

                <YAxis
                  stroke="#aaa"
                />

                <Tooltip />

                <Bar
                  dataKey="workout"
                  fill="#a855f7"
                  radius={[12, 12, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </main>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-white/10 flex justify-around items-center py-5 md:hidden z-50">

        <FaHome className="text-3xl text-purple-500" />

        <FaDumbbell className="text-3xl" />

        <FaChartLine className="text-3xl" />

        <FaUser className="text-3xl" />

      </div>

    </div>
  );
}

export default Dashboard;