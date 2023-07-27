const { fetchNews } = require("../services/reuters");
const cheerio = require("cheerio");

module.exports = {
  fetchNews: async (req, res) => {
    try {
      const html = await fetchNews();

      // Load the HTML content into Cheerio
      const $ = cheerio.load(html);

      const articles = [];

      // Select the desired elements and extract the information
      $(".story", html).each(function () {
        //image
        const img = $(this).find(".story-photo img").attr("org-src");

        //link
        const href = $(this).find(".stoty-content a").attr("href");
        const url = `https://www.reuters.com/${href}`;

        //title
        const titleData = $(this).find(".story-content h3").text();
        const title = titleData.replace(/\t|\n/g, "");

        //content
        const content = $(this).find(".story-content p").text();

        //date
        const timeData = $(this).find(".story-content time").text();
        const date = timeData.replace(/\t|\n/g, "");

        articles.push({
          img,
          title,
          url,
          content,
          date,
        });
      });
      res.status(200).json(articles);
    } catch (error) {
      console.log("Error fetching data from Rueters:", error.message);
      res.status(500).send("Error fetching data from Rueters");
    }
  },
};
