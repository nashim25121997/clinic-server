import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true }, // e.g., receptionist, nurse, lab tech
  phone: String,
  email: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Staff", StaffSchema);
