"use strict";

var passport = require("passport"),
    LocalStrategy = require("passport-local"),
    usersData = require("../app_modules/user/data/users");

module.exports = function () {
    passport.use(new LocalStrategy(function (username, password, done) {
        usersData.findByUsername(username , function (err, user) {
            if (err) {
                console.log("Error loading user: " + err);
                return;
            }

            if (user && user.isPasswordValid(password)) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
};