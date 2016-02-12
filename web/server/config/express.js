"use strict";

var express = require("express"),
    exphbs = require('express-handlebars'),
    bodyParser = require("body-parser"),
    passport = require("passport");

module.exports = function (app, config) {
    // express-handlebars view engine configuration
    app.set("views", "server/views/");

    app.engine("hbs", exphbs({
        defaultLayout: "main",
        extname: ".hbs",
        layoutsDir: "server/views/layouts/",
        partialsDir: "server/views/partials/"
    }));

    app.set("view engine", "hbs");

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(passport.initialize());

    app.use(express.static(config.rootPath + "/public"));
};