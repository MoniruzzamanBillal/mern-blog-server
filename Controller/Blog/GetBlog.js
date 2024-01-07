const mongoose = require("mongoose");
const BlogSchema = require("../../Schema/Blog/BlogSchema");
const BlogModel = new mongoose.model("Blog", BlogSchema);

const getBlog = async (req, res) => {
  try {
    const id = req.params.id;

    console.log(id);

    const query = {
      _id: id,
    };

    const result = await BlogModel.find(query);

    console.log("data  = ", result);

    res.send({ message: "blog server hit" });

    // res.send(result);
  } catch (error) {
    // res.send({ message: error });
  }
};

module.exports = getBlog;
