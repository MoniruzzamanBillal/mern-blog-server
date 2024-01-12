const mongoose = require("mongoose");
const BlogSchema = require("../../Schema/Blog/BlogSchema");
const BlogModel = new mongoose.model("Blog", BlogSchema);

const addFavorite = async (req, res) => {
  try {
    console.log("hit favorite ");

    const { userEmail } = req.body;
    const id = req.params.id;

    const blog = await BlogModel.findById({ _id: id });

    const emailIndex = blog.liked.indexOf(userEmail);

    console.log("email index = ", emailIndex);

    if (emailIndex !== -1) {
      // function for decrease like count
      const updatedData = await BlogModel.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: {
            favCount: -1,
          },
        }
      );

      updatedData.save();

      blog.liked.splice(emailIndex, 1);
      await blog.save();
      return res.send({ liked: 0 });
    }

    // function for increase like count
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

    // console.log("result = ", result);

    res.send({ message: "data updated " });
  } catch (error) {
    res.send({ error });
  }
};

module.exports = addFavorite;
