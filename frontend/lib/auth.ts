export const getCurrentUser = async () => {
  const res = await fetch("http://localhost:5000/api/auth/me", {
    credentials: "include",
  });

  if (!res.ok) return null;
  return res.json();
};
