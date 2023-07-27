const express = require("express");
const router = express.Router();
const { fetchNews } = require("../controllers/news");

router.get("/fetchNews", fetchNews);

module.exports = router;
