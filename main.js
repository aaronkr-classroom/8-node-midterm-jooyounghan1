// main.js
// midterm : Express
"use strict";

const port = 3000,
    express = require('express'),
    homeController = require('./controllers/homeController'),
    errorController = require('./controllers/errorController'),
    app = express();

app.set("port", process.env.PORT || port);

app.use(express.static("public"));

const layouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.use(layouts);

app.use(
    express.urlencoded({
      extended: false
    })
  );
  app.use(express.json());

app.get("/", homeController.showindex);
app.get("/transportation", homeController.showtransportation);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedContactForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`Server at: http://localhost:${app.get("port")}`);
});