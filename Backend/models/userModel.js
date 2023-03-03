//@Making Schema for users which will stor user name passward etc.
const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please enter your name"],
    },
    email: {
      type: String,
      require: [true, "Please enter your email"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Please enter your name"],
    },
  },
  {
    timestamps: true,
  }
);

//@Exporting the Schema ~ mongoose.Model(Name of the model, Created Schema)
module.exports = mongoose.model("User", userSchema);
