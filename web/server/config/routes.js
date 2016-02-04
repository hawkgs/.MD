"use strict";

var auth = require("./auth"),
    userControllers = require("../app_modules/user/controllers");

module.exports = function (app) {

    // Home page (Angular init)
    app.get("/", function (req, res) {
        res.render("index");
    });

    app.route("/api/users")
        .post(userControllers.users.createUser);

    app.post("/login", auth.login);
    app.post("/logout", auth.logout);
};
