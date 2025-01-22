// const express = require("express");
import express from "express";

const app = express();
app.set("view engine", "ejs");
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
