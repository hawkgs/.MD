"use strict";

var passport = require("passport"),
    jwt = require("jsonwebtoken"),
    SECRET = "#yoloMojeBi #sweg trolololo lel",
    TOKEN_EXP_MIN = 3; // todo change mate

var AuthController = {
    login: function (req, res, next) {
        var auth = passport.authenticate("local", function (err, user) {
            var token;

            if (err) {
                return next(err);
            }

            // If the user doesn't exist
            if (!user) {
                res.send({ success: false });
            }

            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }

                token = AuthController._generateToken({ username: user.username });
                res.send({ success: true, username: user.username, token: token });
            });
        });

        auth(req, res, next);
    },

    logout: function (req, res) {
        req.logout();
        res.end();
    },

    isAuthenticated: function (req, res, next) {
        if (!req.isAuthenticated()) {
            res.status(401);
            res.send("You are not authorized for this content.");
        } else {
            next();
        }
    },

    _generateToken: function (payload) {
        return jwt.sign(payload, SECRET, { expiresIn: 60 * TOKEN_EXP_MIN });
    }
};

module.exports = {
    login: AuthController.login,
    logout: AuthController.logout,
    isAuthenticated: AuthController.isAuthenticated
};
