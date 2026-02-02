"use client";

import { useEffect, useState } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/api/posts", {
      credentials: "include",
    });
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async () => {
    if (!title || !content) {
      setError("Title and content required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });

      if (!res.ok) throw new Error("Failed to create post");

      setTitle("");
      setContent("");
      fetchPosts();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-8">
      <div className="max-w-3xl mx-auto">

        {/* CREATE POST */}
        <div className="bg-slate-800/90 border border-slate-700 p-6 rounded-2xl shadow mb-8">
          <h1 className="text-2xl font-semibold text-slate-100 mb-4">
            Create Post
          </h1>

          {error && <p className="text-red-400 mb-3">{error}</p>}

          <input
            className="w-full bg-slate-700 text-slate-100 border border-slate-600 p-2 rounded-lg mb-3"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full bg-slate-700 text-slate-100 border border-slate-600 p-2 rounded-lg mb-3"
            rows={4}
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button
            onClick={createPost}
            disabled={loading}
            className="bg-slate-600 hover:bg-slate-500 text-slate-100 px-4 py-2 rounded-lg"
          >
            {loading ? "Posting..." : "Create Post"}
          </button>
        </div>

        {/* POSTS */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-slate-800/90 border border-slate-700 p-5 rounded-xl shadow"
            >
              <h2 className="text-lg font-semibold text-slate-100">
                {post.title}
              </h2>
              <p className="text-slate-300 mt-2">
                {post.content}
              </p>
              <p className="text-sm text-slate-400 mt-2">
                By {post.author?.name || "Unknown"}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
