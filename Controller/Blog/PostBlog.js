const mongoose = require("mongoose");
const BlogSchema = require("../../Schema/Blog/BlogSchema");
const BlogModel = new mongoose.model("Blog", BlogSchema);

const postBlog = async (req, res) => {
  try {
    const requestData = req.body;

    const data = new BlogModel(requestData);

    await data.save();

    res.send({ message: "data added successfully" });
  } catch (error) {
    res.send({ error });
  }
};

module.exports = postBlog;
