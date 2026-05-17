import { useEffect, useState } from "react";

function SkeletonCard() {
  return (
    <div className="animate-pulse bg-[#18181b] border border-white/10 rounded-3xl p-6">
      <div className="h-6 w-32 bg-white/10 rounded mb-4"></div>

      <div className="h-4 w-full bg-white/10 rounded mb-2"></div>

      <div className="h-4 w-3/4 bg-white/10 rounded mb-6"></div>

      <div className="h-10 w-full bg-white/10 rounded-xl"></div>
    </div>
  );
}

export default function DashboardLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <h1 className="text-4xl font-bold mb-8">
          Loading Dashboard...
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-5xl font-bold">
        Dashboard Loaded 🚀
      </h1>
    </div>
  );
}