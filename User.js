const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: {
    type : String,
    required : true
  },
  createAt: Date,
  updatedAt: Date,
  bestFriend: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  hobbies: [String],
  address: addressSchema,
});

module.exports = mongoose.model("User", userSchema);
