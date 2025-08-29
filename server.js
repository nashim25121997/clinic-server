import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import patientsRouter from "./src/routes/patients.js";
import doctorsRouter from "./src/routes/doctors.js";
import staffRouter from "./src/routes/staff.js";
import appointmentsRouter from "./src/routes/appointments.js";
import casesRouter from "./src/routes/cases.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => res.json({ status: "ok", message: "Clinic API running" }));

app.use("/api/patients", patientsRouter);
app.use("/api/doctors", doctorsRouter);
app.use("/api/staff", staffRouter);
app.use("/api/appointments", appointmentsRouter);
app.use("/api/cases", casesRouter);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/clinic_db";
console.log("Using MongoDB URI:", MONGO_URI);

mongoose.set("strictQuery", true);
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
