"use strict";

var express = require("express"),
    exphbs = require('express-handlebars'),
    bodyParser = require("body-parser"),
    passport = require("passport");

/**
 * Configures express and runs needed middleware.
 * @param app - Express
 * @param config - Server configuration
 */
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

    // bodyparser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // passport
    app.use(passport.initialize());

    // Set static path (public).
    app.use(express.static(config.rootPath + "/public"));
};