const express = require("express");
const router = express.Router();
const { fetchArticles, fetchArticleById } = require("../services/pubmed");

router.get("/fetchArticles", fetchArticles);
router.post("/fetchArticles/:id", fetchArticleById);

module.exports = router;
