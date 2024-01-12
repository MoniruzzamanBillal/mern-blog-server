const mongoose = require("mongoose");
const CommentSchema = require("../../Schema/Comment/CommentSchema");
const CommentModel = new mongoose.model("Comment", CommentSchema);

const getComments = async (req, res) => {
  try {
    const blogId = req.params.id;

    const query = {
      blogId: blogId,
    };

    const blogs = await CommentModel.find(query).select({
      _id: 0,
      blogId: 0,
      __v: 0,
    });

    res.send({ blogs });
  } catch (error) {
    res.send({ message: error });
  }
};

module.exports = getComments;
