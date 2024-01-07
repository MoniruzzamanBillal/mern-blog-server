const mongoose = require("mongoose");
const BlogSchema = require("../../Schema/Blog/BlogSchema");
const BlogModel = new mongoose.model("Blog", BlogSchema);

const GetPopular = async (req, res) => {
  try {
    const result = await BlogModel.find({
      favCount: { $gte: 2 },
    }).select({
      description: 0,
      favCount: 0,
      titleImg: 0,
    });

    console.log("result = ", result);
    res.send(result);
  } catch (error) {
    resizeBy.send({ message: error });
  }
};

module.exports = GetPopular;
