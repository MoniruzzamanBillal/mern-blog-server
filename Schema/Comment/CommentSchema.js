const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  comment: {
    type: "String",
    require: true,
  },
  commentar: {
    type: "String",
    require: true,
  },
  commentarImage: {
    type: "String",
    require: true,
  },
  blogId: {
    type: "String",
    require: true,
  },
  commentDate: {
    type: "String",
  },
});

module.exports = commentSchema;
