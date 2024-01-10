const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const userSchema = require("../../Schema/User/UserSchema");
const userModel = new mongoose.model("User", userSchema);
const createUser = require("../../Controller/User/CreateUser");

// get all user
router.get("/users", async (req, res) => {
  res.send({ message: "get all users " });
});

// save user data / create user
router.post("/create/user", createUser);

module.exports = router;
