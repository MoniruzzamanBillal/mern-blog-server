const mongoose = require("mongoose");
const CommentSchema = require("../../Schema/Comment/CommentSchema");
const CommentModel = new mongoose.model("Comment", CommentSchema);

const getComments = async (req, res) => {
  try {
    const blogId = req.params.id;

    const { limit, skip } = req.query;

    const skipPage = parseFloat(skip);
    const perPageItem = parseInt(limit);

    const skipeNum = skipPage * perPageItem;

    // console.log("in get comment route = ");
    // console.log("skip page = ", skipPage);
    // console.log("paer page item   = ", perPageItem);

    const query = {
      blogId: blogId,
    };

    const blogs = await CommentModel.find(query)
      .select({
        _id: 0,
        blogId: 0,
        __v: 0,
      })
      .limit(perPageItem)
      .skip(skipeNum);

    res.send({ blogs });
  } catch (error) {
    res.send({ message: error });
  }
};

module.exports = getComments;
