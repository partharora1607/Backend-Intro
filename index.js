require("dotenv").config();

const express = require("express");
const app = express();

// const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Kyu bhai shakal dekhi hai tune apni? mast h!!");
});

app.get("/login", (req, res) => {
  res.send("Please login at coffee aur code !");
});

app.get("/youtube", (req, res) => {
  res.send("<h2> Coffee pe le bhai!! </h2>");
});

app.listen(process.env.PORT, () => {
  console.log("Example app listing on port : ", process.env.PORT);
});
