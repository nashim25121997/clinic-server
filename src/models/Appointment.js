import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ["Scheduled", "Completed", "Cancelled"], default: "Scheduled" },
  reason: String,
  notes: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Appointment", AppointmentSchema);
