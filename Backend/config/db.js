const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB);
    console.log("connected");
  } catch (err) {
    console.log(process.env.DB);
    console.log("error");
  }
};

module.exports = connectDb;
