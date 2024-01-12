const mongoose = require("mongoose");
const CommentSchema = require("../../Schema/Comment/CommentSchema");
const CommentModel = new mongoose.model("Comment", CommentSchema);

const postComment = async (req, res) => {
  try {
    const commentData = req.body;

    console.log("data in post comment = ", commentData);

    const data = new CommentModel(commentData);

    await data.save();

    res.send({ message: "comment added successfully  " });
  } catch (error) {
    res.send({ error });
  }
};

module.exports = postComment;
