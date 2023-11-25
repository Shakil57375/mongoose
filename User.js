const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    validate: {
      validator: function(value) {
        if (isNaN(value)) {
          // Check if age is a valid number
          return false;
        } else if (value < 18) {
          // Check if age is less than 18
          return false;
        } else if (value > 120) {
          // Check if age is greater than 120
          return false;
        }
        // Age is valid
        return true;
      },
      message: 'Age must be a valid number between 18 and 120',
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (value) {
        // Custom email validation logic
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      },
      message: "Invalid email format",
    },
  },
  createAt: {
    type: Date,
    default: () => new Date().toLocaleString(),
    immutable : true
  },

  updatedAt: {
    type: Date,
    default: () => new Date().toLocaleString(),
  },
  bestFriend: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  hobbies: [String],
  address: addressSchema,
});

module.exports = mongoose.model("User", userSchema);
