const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex");

const app = express();
//setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

//server static assets
// app.use(express.static(path.resolve(__dirname, "..", "dist")));
app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.get("/api/addresses", async (req, res) => {
  try {
    const addresses = await db.select().table("addresses");
    res.json(addresses);
  } catch (err) {
    console.error("Error loading addresses!", err);
    res.sendStatus(500);
  }
});

//always return the main index.html, since we are developing a single page application

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
// });
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
