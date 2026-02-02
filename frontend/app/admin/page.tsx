"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [posts, setPosts] = useState<any[]>([]);

  const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/api/posts", {
      credentials: "include",
    });
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (user.role !== "admin") {
      window.location.href = "/dashboard";
    }

    fetchPosts();
  }, []);

  const deletePost = async (id: string) => {
    await fetch(`http://localhost:5000/api/posts/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    fetchPosts();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto bg-slate-800/90 border border-slate-700 p-6 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-semibold text-slate-100 mb-6">
          Admin Dashboard
        </h1>

        {posts.map((post) => (
          <div
            key={post._id}
            className="border border-slate-700 rounded-lg p-4 mb-3"
          >
            <h2 className="font-semibold text-slate-100">
              {post.title}
            </h2>
            <p className="text-slate-300">{post.content}</p>

            <button
              onClick={() => deletePost(post._id)}
              className="mt-2 text-red-400 hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
