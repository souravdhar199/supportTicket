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
//@root api
app.post("/", async (req, res) => {
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
      res.send("Successfully created 😊");
    } catch (error) {
      console.log(error);
    }
  }
});

//@App run 😎
app.listen(PORT, () => console.log("Built done"));
