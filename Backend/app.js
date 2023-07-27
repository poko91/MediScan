const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const pubMedRouter = require("./routers/pubmedRouter");
const reutersRouter = require("./routers/reutersRouter");

app.use("/pubmed", pubMedRouter);
app.use("/reuters", reutersRouter);
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
