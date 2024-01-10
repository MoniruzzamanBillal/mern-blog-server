const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userEmail: {
    type: "String",
    require: true,
  },
});

module.exports = userSchema;
