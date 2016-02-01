"use strict";

var express = require("express"),
    exphbs = require('express-handlebars'),
    bodyParser = require("body-parser"),
    //cookieParser = require("cookie-parser"),
    session = require("express-session"),
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

    //app.use(cookieParser());

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    //app.use(session({
    //    secret: "cookie_secret",
    //    name: "cookie_name",
    //    proxy: true,
    //    resave: true,
    //    saveUninitialized: true
    //}));

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(config.rootPath + "/public"));
};