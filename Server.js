// Refactored the code to use the ES6 code patterns

import express from "express";
const app = express();
const router = express.Router();
const path = `${__dirname}/views/`;// points to the current working directory housing all the pages to be served

// the middle layer that logs the type of HTTP request
// a particular route is referring to to the terminal
router.use((req, res, next) => {
  console.log(`/${req.method}`);
  next();
});

router.get("/",(req, res) => {
  res.sendFile(`${path}index.html`);
});

router.get("/about",(req, res) => {
  res.sendFile(`${path}about.html`);
});

router.get("/contact",(req, res) => {
  res.sendFile(`${path}contact.html`);
});

app.use("/",router);

app.use("*",(req, res) => {
  res.sendFile(`${path}404.html`);
});

app.listen(3000,() => {
  console.log("Live at Port 3000");
});