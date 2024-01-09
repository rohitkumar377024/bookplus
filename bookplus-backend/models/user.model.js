const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  username: {
    type: String,
    trim: true,
    require: true,
  },
  password: {
    type: String,
    trim: true,
    require: true,
  },
});

module.exports = model("user", UserSchema);
