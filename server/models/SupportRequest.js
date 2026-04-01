import mongoose from "mongoose";

const SupportSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  designation: { type: String },
  help: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("SupportRequest", SupportSchema);
