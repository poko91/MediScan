const xml2js = require("xml2js");
const parser = new xml2js.Parser();
const { fetchArticle } = require("../services/article");

module.exports = {
  fetchArticle: async (req, res) => {
    const id = req.body.id;
    try {
      const articleXML = await fetchArticle(id);

      // Parse xml data
      parser.parseString(articleXML, (err, result) => {
        if (err) {
          console.error("Error parsing XML:", err);
          res.status(500).send("Error parsing XML");
        } else {
          const articleTitle = result.PubmedArticleSet.PubmedArticle[0].MedlineCitation[0].Article[0].ArticleTitle[0];
          const pmid = result.PubmedArticleSet.PubmedArticle[0].MedlineCitation[0].PMID[0]._;
          const abstract = result.PubmedArticleSet.PubmedArticle[0].MedlineCitation[0].Article[0].Abstract[0].AbstractText;

          const articleData = {
            title: articleTitle,
            pmid: pmid,
            abstract: abstract,
          };

          res.status(200).json(articleData);
        }
      });
    } catch (error) {
      console.error("Error fetching data from PubMed:", error.message);
      res.status(500).send("Error fetching data from PubMed");
    }
  },
};
