const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// get all user
router.get("/users", async (req, res) => {
  res.send({ message: "get all users " });
});

module.exports = router;
