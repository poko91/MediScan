const axios = require("axios");
const xml2js = require("xml2js");

const parser = new xml2js.Parser();
const urology = require("../constants/topics/urology");
const API_KEY = "5ee25b1d4f9977047142a9ae7ebb71202308";

const baseURL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed";

const id_url = `${baseURL}&term=${urology}`;
// const data_url = `${baseURL}&id={id}&rettype=xml`;

module.exports = {
  fetchArticles: async (req, res) => {
    try {
      const response = await axios.get(id_url);
      //Parse xml data
      parser.parseString(response.data, (err, result) => {
        const idList = result.eSearchResult.IdList[0].Id;
        const object = {
          list: idList,
          count: idList.length,
        };
        res.status(200).send(object);
      });
    } catch (error) {
      console.log("Error fetching data from PubMed:", error.message);
      res.status(500).send("Error fetching data from PubMed");
    }
  },

  fetchArticleById: async (req, res) => {
    const id = req.params.id;
    try {
      const response = await axios.get(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${id}`);
      //Parse xml data
      parser.parseString(response.data, (err, result) => {
        const articleTitleData = result.PubmedArticleSet.PubmedArticle[0].MedlineCitation[0].Article[0].ArticleTitle[0];
        const articleTitle = articleTitleData._ ? articleTitleData._ : articleTitleData;

        const pmid = result.PubmedArticleSet.PubmedArticle[0].MedlineCitation[0].PMID[0]._;

        const abstractData = result.PubmedArticleSet.PubmedArticle[0].MedlineCitation[0].Article[0].Abstract[0].AbstractText[0];
        const abstract = abstractData._ ? abstractData._ : abstractData;

        const article = {
          title: articleTitle,
          pmid: pmid,
          abstract: abstract,
        };
        res.status(200).send(article);
      });
    } catch (error) {
      console.log("Error fetching data from PubMed:", error.message);
      res.status(500).send("Error fetching data from PubMed");
    }
  },
};
