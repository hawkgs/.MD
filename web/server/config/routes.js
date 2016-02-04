"use strict";

var userControllers = require("../app_modules/user/controllers");

module.exports = function (app) {

    // Home page (Angular init)
    app.get("/", function (req, res) {
        res.render("index");
    });

    app.route("/api/users")
       .post(userControllers.user.createUser);

    app.post("/login", userControllers.auth.login);
    app.post("/logout", userControllers.auth.logout);
};
