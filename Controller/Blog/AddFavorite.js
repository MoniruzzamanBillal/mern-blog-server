const mongoose = require("mongoose");
const BlogSchema = require("../../Schema/Blog/BlogSchema");
const BlogModel = new mongoose.model("Blog", BlogSchema);

const addFavorite = async (req, res) => {
  try {
    const updatedData = await BlogModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $inc: {
          favCount: 1,
        },
      }
    );

    res.send({ message: "data updated " });
  } catch (error) {
    res.send({ error });
  }
};

module.exports = addFavorite;
