const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const getBlogs = require("../../Controller/Blog/GetBlogs");
const postBlog = require("../../Controller/Blog/PostBlog");
const getBlog = require("../../Controller/Blog/GetBlog");
const getPopular = require("../../Controller/Blog/GetPopular");
const addFavorite = require("../../Controller/Blog/AddFavorite");

// get all blog posts
router.get("/blogs", getBlogs);

// get single blog  data
router.get("/blog/:id", getBlog);

// get popular posts
router.get("/blogs/popular", getPopular);

// post blogs in database
router.post("/blog/post", postBlog);

// add fav count api
router.patch("/blog/favorite/:id", addFavorite);

module.exports = router;
