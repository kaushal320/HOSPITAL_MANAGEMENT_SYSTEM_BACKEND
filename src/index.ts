import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("🏥 HMS API running");
});

app.use("/api/v1/patients", patientRoutes);
app.use("/api/v1/user", userRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
