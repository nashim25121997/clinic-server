import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: String,
  email: String,
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  dob: Date,
  address: String,
  medicalHistory: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Patient", PatientSchema);
