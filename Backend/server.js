const express = require("express");

const app = express();
const PORT = 5000;

//This will help us to log json data from endpoint
app.use(express.urlencoded({ extended: false }));
//@root api
app.post("/", (req, res) => {
  const { name, email } = req.body;
  console.log(name);

  if (!name || !email) {
    res.send("Please fill out all the form");
  } else {
    console.log(name);
    res.send(`data recieved thank you ${name}`);
  }
});
//this .listen will start the application
app.listen(PORT, () => console.log("server finished starting"));
