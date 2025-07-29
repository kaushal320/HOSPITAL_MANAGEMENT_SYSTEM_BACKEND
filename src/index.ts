import express from "express";
import connectDB from "./config/db.js";
import patientRoutes from "./routes/patientRoutes.js";
import dotenv, { config } from "dotenv";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🏥 HMS API running");
});

app.use("/api/v1/patients", patientRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
