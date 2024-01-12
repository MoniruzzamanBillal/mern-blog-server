const mongoose = require("mongoose");
const CommentSchema = require("../../Schema/Comment/CommentSchema");
const CommentModel = new mongoose.model("Comment", CommentSchema);

const getComments = async (req, res) => {
  try {
    res.send({ message: "get all comments" });
  } catch (error) {
    res.send({ message: error });
  }
};

module.exports = getComments;
