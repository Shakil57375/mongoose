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

/* async function run() {
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
    user.name = "rahi";
    await user.save();
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}

run(); */
// find document by id
/* async function run() {
  try {
    const user = await User.findById("6561b401692b2316a5446cc6")
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}

run(); */
// find document
/* async function run() {
  try {
    const user = await User.find({name : "rahi"})
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}

run(); */
// findOne document
/* async function run() {
  try {
    const user = await User.findOne({name : "rahi"})
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}

run(); */

// check exist or not
/* async function run() {
  try {
    const user = await User.exists({name : "rahim"})
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}

run();
 */
// delete one
/* async function run() {
  try {
    const user = await User.deleteOne({name : "rahim"})
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}

run(); */

// find documents which name which is equals to rahi (with mongoose method)
async function run() {
  try {
    const user = await User.where("name").equals("rahim");
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}

run();

// find documents which age which is grater then 14 and where the name is equals to rahim.
async function run() {
  try {
    const user = await User.where("age")
      .gt("14")
      .lt("33")
      .where("name")
      .equals("rahim")
      .limit(1)
      .select("age");
    user[0].bestFriend = "65618c57d6769dfe337cd938";
    await user[0].save();

    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}

run();
