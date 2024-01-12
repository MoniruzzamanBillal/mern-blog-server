const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const postComment = require("../../Controller/Comment/PostComment");
const getComments = require("../../Controller/Comment/GetComments");

// get all comments
router.get("/comments/blog/:id", getComments);

// post comment
router.post("/comment/blog", postComment);

module.exports = router;
