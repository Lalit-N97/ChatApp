const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>hi, I am the server you are looking for</h1>");
});

module.exports = router;
