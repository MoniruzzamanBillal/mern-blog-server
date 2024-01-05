const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const getBlog = require("../../Controller/Blog/GetBlogs");
const BlogSchema = require("../../Schema/Blog/BlogSchema");
const BlogModel = new mongoose.model("Blog", BlogSchema);

router.get("/blogs", getBlog);

// post blogs in database
router.post("/blog/post", async (req, res) => {
  const requestData = req.body;

  const data = new BlogModel(requestData);

  const response = await data.save();

  res.send({ message: "data added successfully" });

  console.log(requestData);
});

module.exports = router;
