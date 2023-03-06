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
  const newUser = await User.create({
    name,
    email,
    password,
  });

  res.send("done");
  console.log(newUser);
});

//@App run 😎
app.listen(PORT, () => console.log("Built done"));
