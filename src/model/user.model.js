const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  status: { type: String, default: "pending" },
  password: { type: String, required: true },
  role: { type: String, default: "student" },
});

module.exports = mongoose.model("users", UserSchema);
