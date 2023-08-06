import express from "express";
import axios from "axios";
import cheerio from "cheerio";

const app = express();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  
  console.log(`Listening: http://localhost:${port}`);

});
