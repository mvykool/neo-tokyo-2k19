import express from "express";
import axios from "axios";
import cheerio from "cheerio";

const app = express();

const mangaList: any[] = []

app.get('/', (req, res) => {
    axios.get("https://inmanga.com")
    .then((response): any => {
      const html = response.data
      const $ = cheerio.load(html)
      $(".panel", html).each(function() {
        const img = $(".ImageContainer img-responsive").attr("src")
        console.log(img);
        
      })
      })
    });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  
  console.log(`Listening: http://localhost:${port}`);

});
