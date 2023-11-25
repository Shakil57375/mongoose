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
  const user = await User.create({ name: "Shakil", age: 21 });
  //   change the user name
  user.name = "rahim";
  await user.save();
  console.log(user);
}

run();
