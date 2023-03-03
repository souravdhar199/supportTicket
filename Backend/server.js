const express = require("express");

const app = express();
const PORT = 5000;
//this will allow us to use environment variable
const dotenv = require("dotenv").config;
dotenv();

// this is how you import function
const connectDb = require("./config/db.js");

//This will help us to log json data from endpoint
app.use(express.urlencoded({ extended: false }));

const User = require("./models/userModel.js");

//@root api
app.post("/", async (req, res) => {
  const { name, email } = req.body;
  const newUser = await User.create({
    name,
    email,
    passwod: "asdasd",
  });
  res.send("done");
});

//this .listen will start the application
app.listen(PORT, () => console.log("server finished starting"));
