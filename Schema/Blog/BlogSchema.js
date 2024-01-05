const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  title: {
    type: "String",
    require: true,
  },
  titleImg: {
    type: "String",
  },
  description: {
    type: "String",
    require: true,
  },

  favCount: {
    type: "Number",
  },
});

module.exports = BlogSchema;
