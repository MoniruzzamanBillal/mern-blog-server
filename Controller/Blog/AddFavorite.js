const mongoose = require("mongoose");
const BlogSchema = require("../../Schema/Blog/BlogSchema");
const BlogModel = new mongoose.model("Blog", BlogSchema);

const addFavorite = async (req, res) => {
  try {
    console.log("hit favorite ");

    const { userEmail } = req.body;

    const updatedData = await BlogModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $inc: {
          favCount: 1,
        },
      }
    );

    updatedData.liked.push(userEmail);
    const result = await updatedData.save();

    console.log("result = ", result);

    res.send({ message: "data updated " });
  } catch (error) {
    res.send({ error });
  }
};

module.exports = addFavorite;
