const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    createAt: Date,
    updatedAt: Date,
    bestFriend: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'  
    },
    hobbies: [String],
    address: {
      street: String,
      city: String,
    },
  });
  
module.exports = mongoose.model("User", userSchema);
