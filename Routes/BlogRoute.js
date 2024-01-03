const express = require("express");
const router = express.Router();

router.get("/blogs", async (req, res) => {
  res.send({ message: " blogs route " });
});

module.exports = router;
