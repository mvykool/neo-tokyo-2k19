import express from "express";
import axios from "axios";
import cheerio from "cheerio";

const app = express();

const mangaList: any[] = [];

app.get('/', (req, res) => {
  axios.get('https://inmanga.com')
  .then((response) => {
      const html = response.data
      const $ = cheerio.load(html)

      $('<div id="RecentChaptersContainer"></div>',html).each(function () {
      const title = $(this).text()
      mangaList.push({
        title
      })
      })
      res.json(mangaList)
    })
  .catch((err) => console.log(err))
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
  
  console.log(`Listening: http://localhost:${port}`);

});
