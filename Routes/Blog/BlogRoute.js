const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const getBlog = require("../../Controller/Blog/GetBlogs");
const postBlog = require("../../Controller/Blog/PostBlog");

// get all blog posts
router.get("/blogs", getBlog);

// post blogs in database
router.post("/blog/post", postBlog);

module.exports = router;
