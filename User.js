const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    /* 
    In Mongoose, the validate property within a schema path is used to define custom validators for a specific field. This property takes an object with a validator function and an optional message string.

    Here's a breakdown of the components:

    validator function: This is a custom function that you define to perform validation on the field's value. It takes the field's value as its argument and should return a boolean indicating whether the value is valid (true) or not (false).

    message string: This is an optional property that allows you to define a custom error message associated with the validation. If the validator function returns false, Mongoose will use this message as the validation error. */
    validate: {
      validator: (value) => value.length > 3,
      message: (props) => `${props.value} is less then 3`,
    },
  },
  age: {
    type: Number,
    min: 12,
    max: 50,
    validate: {
      validator: function (value) {
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
      message: "Age must be a valid number between 18 and 120",
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
    // length must be 10 or more character.
    minLength: 10,
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
    immutable: true,
  },

  updatedAt: {
    type: Date,
    default: () => new Date().toLocaleString(),
  },
  bestFriend: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  hobbies: [String],
  address: addressSchema,
});

module.exports = mongoose.model("User", userSchema);
