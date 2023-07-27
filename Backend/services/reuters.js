const axios = require("axios");

const url = "https://www.reuters.com/news/archive/healthNews?view=page&page=2&pageSize=10";

module.exports = {
  fetchNews: async (id) => {
    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      console.log("Error fetching data from PubMed:", error.message);
    }
  },
};
