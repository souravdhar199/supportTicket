const express = require("express");

const app = express();
const PORT = 5000;

//@Storing environment variable
const dotenv = require("dotenv").config;
dotenv();

//@Importing Function
const connectDb = require("./config/db.js");

app.use(express.urlencoded({ extended: false }));
const User = require("./models/userModel.js");

//@Connecting to MongoDbπ₯­
connectDb();

//@root end point
app.post("/", async (req, res) => {
  const { name, email, password } = await req.body;

  //If we already have the user π₯
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.send("You are already in the system π");
  } else {
    try {
      const newUser = await User.create({
        name,
        email,
        password,
      });
      res.send("Successfully created π");
    } catch (error) {
      console.log(error);
    }
  }
});

//@Login end point

/*
  findOne() => finds instances based on the passing argument in MongoDb
*/

//@Log in
app.post("/login", async (req, res) => {
  const { email, password } = await req.body;

  const userExist = await User.findOne({ email });
  console.log(userExist);
  if (!userExist) {
    res.send("Looks like you are not in the system yet π");
  } else {
    if (userExist.password !== password) {
      res.send("Wrong cardential π");
    } else {
      res.send("You Logged in π");
    }
  }
});

//@App run π
app.listen(PORT, () => console.log("Built done"));
