const mongoose = require("mongoose");
const BlogSchema = require("../../Schema/Blog/BlogSchema");
const BlogModel = new mongoose.model("Blog", BlogSchema);

const getBlog = async (req, res) => {
  try {
    const result = await BlogModel.find();

    res.send({ result });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getBlog;
