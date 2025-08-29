import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  phone: String,
  email: String,
  room: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Doctor", DoctorSchema);
