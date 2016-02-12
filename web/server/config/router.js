"use strict";

var userControllers = require("../app_modules/user/controllers"),
    errorHandler = require("./errorHandler"),
    expressJwt = require("express-jwt"),
    consts = require("../utilities/consts");

/**
 * Router.
 * @param app - Express
 */
module.exports = function (app) {
    var authenticate = expressJwt({ secret: consts.JWT_SECRET });

    // Home page (Angular init)
    app.get("/", function (req, res) {
        res.render("index");
    });

    // Users API
    app.route("/api/users")
       .post(userControllers.user.createUser);

    // Auth API
    app.post("/auth/login", userControllers.auth.login);
    app.get("/auth/valid", authenticate, userControllers.auth.isJwtValid);

    // 404
    app.get("*", function (req, res) {
        return res.redirect(req.protocol + "://" + req.get("host"));
    });

    errorHandler(app);
};
