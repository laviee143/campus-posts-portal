"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      window.location.href = "/login";
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
      <div className="bg-slate-800/90 backdrop-blur p-8 rounded-2xl w-full max-w-md border border-slate-700 shadow-xl">
        <h1 className="text-2xl font-semibold text-center mb-2 text-slate-100">
          Create Account
        </h1>

        <p className="text-center text-slate-300 mb-6">
          Join the Campus Posts Portal
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full bg-slate-700 text-slate-100 placeholder-slate-400 border border-slate-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full bg-slate-700 text-slate-100 placeholder-slate-400 border border-slate-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full bg-slate-700 text-slate-100 placeholder-slate-400 border border-slate-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-slate-600 hover:bg-slate-500 text-slate-100 py-2 rounded-lg transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
