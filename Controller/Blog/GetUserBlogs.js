const mongoose = require("mongoose");
const BlogSchema = require("../../Schema/Blog/BlogSchema");
const BlogModel = new mongoose.model("Blog", BlogSchema);

const getUserBlog = async (req, res) => {
  try {
    const { writer } = req.query;

    const query = { writer: writer };

    const result = await BlogModel.find(query).select({
      liked: 0,
      favCount: 0,
      __v: 0,
    });

    res.send(result);
  } catch (error) {
    res.send({ error });
  }
};

module.exports = getUserBlog;
