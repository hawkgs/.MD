"use strict";

var mongoose = require("mongoose"),
    Models = require("../app_modules/user/data/models");

module.exports = function (config) {
    var db;

    mongoose.connect(config.db);
    db = mongoose.connection;

    db.once("open", function (err) {
        if (err) {
            console.log("Database could not be opened: " + err);
            return;
        }

        console.log("Database up and running...");
    });

    db.on("error", function (err) {
        console.log("Database error: " + err);
    });

    // Models initialization
    Models.User.init();
};