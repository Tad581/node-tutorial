const path = require("path");
const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/trang-chu", (req, res) => res.render("home"));

app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/search", (req, res) => {
  console.log("res.body :>> ", req.body);
  res.render("search");
});

app.listen(port, () => console.log("http://localhost:" + port));
