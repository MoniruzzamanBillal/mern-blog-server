const mongoose = require("mongoose");
const BlogSchema = require("../../Schema/Blog/BlogSchema");
const BlogModel = new mongoose.model("Blog", BlogSchema);

const checkFavorite = async (req, res) => {
  try {
    const id = req.params.id;
    const { email } = req.query;
    const blog = await BlogModel.findById({ _id: id });
    const emailINdex = blog.liked.indexOf(email);

    if (emailINdex !== -1) {
      return res.send({ liked: 1 });
    } else {
      return res.send({ liked: 0 });
    }
  } catch (error) {
    res.send({ error });
  }
};

module.exports = checkFavorite;
