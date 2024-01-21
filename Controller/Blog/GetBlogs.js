const mongoose = require("mongoose");
const BlogSchema = require("../../Schema/Blog/BlogSchema");

// const BlogModel = new mongoose.model("Blog", BlogSchema);
const BlogModel = new mongoose.model("Blog", BlogSchema);

const getBlog = async (req, res) => {
  try {
    const perPageItem = parseFloat(limit);
    const skipNum = parseFloat(skip);

    const skipItem = skipNum * perPageItem;

    const result = await BlogModel.find().limit(perPageItem).skip(skipItem);

    res.send({ result });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getBlog;
