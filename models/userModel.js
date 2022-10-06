const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
  },
  email: {
    type: String,
    required: [true, "A user must have an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "User must have a password"],
  },
});

const User = mongoose.model("User", tourSchema);

module.exports = User;
