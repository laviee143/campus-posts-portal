import { Response, NextFunction } from "express";
import { Request } from "express";

interface AuthRequest extends Request {
  user?: {
    userId: string;
    role: string;
  };
}

export const adminOnly = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "Admin access only" });
  }
  next();
};
