const mongoose = require("mongoose");
const User = require("./User");
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

async function run() {
  try {
    const user = await User.create({
      name: "Shakil",
      age: 21,
      email: "shakil57375@gmail.com",
      hobbies: ["coding", "Praying"],
      address: {
        street: "Feni Sadar, Feni",
        city: "Feni",
      },
    });
    user.createAt = 5;
    // changed name to rahim
    user.name = "rahim";
    await user.save();
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}

run();
