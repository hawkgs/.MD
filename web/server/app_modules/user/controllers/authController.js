"use strict";

var passport = require("passport"),
    jwt = require("jsonwebtoken"),
    SECRET = "#yoloMojeBi #sweg trolololo lel",
    TOKEN_EXP_MIN = 5;

var AuthController = {
    login: function (req, res, next) {
        console.log('attempting login...');
        //res.status(200);

        return res.send({tolotolo: "trololo" });
        //
        //var auth = passport.authenticate("local", function (err, user) {
        //    console.log(user);
        //
        //    if (err) {
        //        return next(err);
        //    }
        //
        //    if (!user) {
        //        res.send({ success: false });
        //    }
        //
        //    req.logIn(user, function (err) {
        //        if (err) {
        //            return next(err);
        //        }
        //
        //        // The username will be sent inside the token
        //        user.token = AuthController._generateToken({ username: user.username });
        //        res.send({ success: true, user: user, token: user.token });
        //    });
        //});
        //
        //auth(req, res, next);
    },

    logout: function (req, res) {
        req.logout();
        res.end();
    },

    isAuthenticated: function (req, res, next) {
        if (!req.isAuthenticated()) {
            res.status(401);
            res.send("Not authorized for this content");
        } else {
            next();
        }
    },

    _generateToken: function (payload) {
        return jwt.sign(payload, SECRET, { expiresInMinutes: 60 * TOKEN_EXP_MIN });
    }
};

module.exports = {
    login: AuthController.login,
    logout: AuthController.logout,
    isAuthenticated: AuthController.isAuthenticated
};
