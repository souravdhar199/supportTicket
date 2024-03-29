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

//@Connecting to MongoDb🥭
connectDb();

//@Json-Web Token
const jsonToken = require("jsonwebtoken");

const gererateToken = (id) => {
  return jsonToken.sign({ id }, process.env.SECRET_KEY);
};

//@Register Endpoint
app.post("/register", async (req, res) => {
  const { name, email, password } = await req.body;

  //If we already have the user 👥
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.send("You are already in the system 😎");
  } else {
    try {
      const newUser = await User.create({
        name,
        email,
        password,
      });
      res.status(201).json({
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        token: gererateToken(newUser._id),
      });
    } catch (error) {
      console.log(error);
    }
  }
});

/*
  findOne() => finds instances based on the passing argument in MongoDb
*/
//@Login end point
app.post("/login", async (req, res) => {
  const { email, password } = await req.body;

  const userExist = await User.findOne({ email });
  console.log(userExist);
  if (!userExist) {
    res.send("Looks like you are not in the system yet 🙂");
  } else {
    if (userExist.password !== password) {
      res.send("Wrong cardential 🎃");
    } else {
      res.send("You Logged in 👌");
    }
  }
});

//@App run 😎
app.listen(PORT, () => console.log("Built done"));
