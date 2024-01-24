const mongoose = require("mongoose");
const BlogSchema = require("../../Schema/Blog/BlogSchema");
const BlogModel = new mongoose.model("Blog", BlogSchema);

const updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const query = {
      _id: id,
    };

    const requestData = req.body;

    const result = await BlogModel.replaceOne(query, requestData);

    res.send(result);
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
module.exports = updateBlog;
