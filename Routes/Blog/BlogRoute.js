const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const getBlogs = require("../../Controller/Blog/GetBlogs");
const postBlog = require("../../Controller/Blog/PostBlog");
const getBlog = require("../../Controller/Blog/GetBlog");

// get all blog posts
router.get("/blogs", getBlogs);

// get single blog  data
router.get("/blog/:id", getBlog);

// post blogs in database
router.post("/blog/post", postBlog);

module.exports = router;
