"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 🔒 Prevent hydration mismatch
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
        <p className="text-slate-300">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
      <div className="bg-slate-800/90 border border-slate-700 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-semibold text-slate-100">
          Welcome, {user.name}
        </h1>

        <p className="mt-2 text-slate-300">
          Role: <span className="font-semibold">{user.role}</span>
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="/posts"
            className="bg-slate-600 hover:bg-slate-500 text-slate-100 px-4 py-2 rounded-lg"
          >
            View Posts
          </a>

          {user.role === "admin" && (
            <a
              href="/admin"
              className="border border-slate-600 text-slate-200 px-4 py-2 rounded-lg hover:bg-slate-700"
            >
              Admin Panel
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
