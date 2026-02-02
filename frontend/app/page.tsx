import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
      <div className="bg-slate-800/90 backdrop-blur p-8 rounded-2xl w-full max-w-md border border-slate-700 shadow-xl">
        <h1 className="text-2xl font-semibold text-center mb-2 text-slate-100">
          Campus Posts Portal
        </h1>

        <p className="text-center text-slate-300 mb-6">
          Welcome to Campus Portal
        </p>

        <Link
          href="/login"
          className="block w-full text-center bg-slate-600 hover:bg-slate-500 text-slate-100 py-2 rounded-lg mb-3 transition"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="block w-full text-center border border-slate-600 text-slate-200 py-2 rounded-lg hover:bg-slate-700 transition"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
