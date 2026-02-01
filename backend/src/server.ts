import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db";
import authRoutes from "./routes/auth.routes";
import postRoutes from "./routes/post.routes";

dotenv.config();
connectDB();

const app = express();

// 🔴 THIS LINE FIXES YOUR ERROR
app.use(express.json());

// Cookies
app.use(cookieParser());

// CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (_req, res) => {
  res.send("Campus Posts Portal API running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
