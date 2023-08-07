import express from "express";
import axios from "axios";
import cheerio from "cheerio";

const app = express();

app.get('/', (req, res) => {
    axios.get("https://inmanga.com")
    .then((response): any => {
      const html = response.data
      res.json(html)
    })
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  
  console.log(`Listening: http://localhost:${port}`);

});
