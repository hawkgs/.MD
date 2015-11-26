"use strict";

var auth = require("./auth"),
    ANGULAR_DIR = "../../public/app/";

module.exports = function (app) {

    // Home page (Angular init)
    app.get("/", function (req, res) {
        res.render("index"/*, { currentUser: req.user }*/);
    });

    // Angular partials service
    app.get("/partials/:partialArea/views/:partialName", function (req, res) {
        res.render(ANGULAR_DIR + req.params.partialArea + "/views/" + req.params.partialName);
    });

    app.post("/login", auth.login);
    app.post("/logout", auth.logout);
};
