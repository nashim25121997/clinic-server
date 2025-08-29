import mongoose from "mongoose";

const CaseSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  title: { type: String, required: true },
  description: String,
  diagnosis: String,
  prescriptions: String,
  followUpDate: Date,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Case", CaseSchema);
