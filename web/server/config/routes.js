"use strict";

var auth = require("./auth");

module.exports = function (app) {

    // Home page (Angular init)
    app.get("/", function (req, res) {
        res.render("index"/*, { currentUser: req.user }*/);
    });

    app.post("/login", auth.login);
    app.post("/logout", auth.logout);
};
