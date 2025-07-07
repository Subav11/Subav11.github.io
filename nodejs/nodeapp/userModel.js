import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    username: { type: String },
    email: { type: String },
    password: { type: String, unique: true },
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
