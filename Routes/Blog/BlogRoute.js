const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const getBlogs = require("../../Controller/Blog/GetBlogs");
const postBlog = require("../../Controller/Blog/PostBlog");
const getBlog = require("../../Controller/Blog/GetBlog");
const getPopular = require("../../Controller/Blog/GetPopular");
const addFavorite = require("../../Controller/Blog/AddFavorite");
const checkFavorite = require("../../Controller/Blog/CheckFavorite");

// test route
router.get("/test", async (req, res) => {
  res.send({ message: "test route " });
});

// get all blog posts
router.get("/blogs", getBlogs);

// get single blog  data
router.get("/blog/:id", getBlog);

// check favorite / user liked
router.get("/blog/favorite/check/:id", checkFavorite);

// get popular posts
router.get("/blogs/popular", getPopular);

// post blogs in database
router.post("/blog/post", postBlog);

// add fav count api
router.patch("/blog/favorite/:id", addFavorite);

module.exports = router;
