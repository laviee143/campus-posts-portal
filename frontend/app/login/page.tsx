"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
      return;
    }

    localStorage.setItem("user", JSON.stringify(data.user));
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
      <form
        onSubmit={submit}
        className="bg-slate-800/90 backdrop-blur p-8 rounded-2xl w-full max-w-md border border-slate-700 shadow-xl"
      >
        <h1 className="text-2xl font-semibold text-center text-slate-100 mb-2">
          Login
        </h1>

        <p className="text-center text-slate-300 mb-6">
          Access your campus account
        </p>

        {error && <p className="text-red-400 mb-4">{error}</p>}

        <input
          className="w-full bg-slate-700 text-slate-100 placeholder-slate-400 border border-slate-600 p-2 rounded-lg mb-4"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full bg-slate-700 text-slate-100 placeholder-slate-400 border border-slate-600 p-2 rounded-lg mb-6"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-slate-600 hover:bg-slate-500 text-slate-100 py-2 rounded-lg transition">
          Login
        </button>
      </form>
    </div>
  );
}
