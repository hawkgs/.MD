"use strict";

var passport = require("passport"),
    jwt = require("jsonwebtoken"),
    consts = require("../../../utilities/consts");

var AuthController = {
    login: function (req, res, next) {
        passport.authenticate("local", function (err, user) {
            if (err) {
                return next(err);
            }

            // If something is wrong.
            if (!user) {
                return res.send({ success: false });
            }

            req.logIn(user, { session: false }, function (err) {
                var token;

                if (err) {
                    return next(err);
                }

                token = AuthController._generateToken({ username: user.username });
                res.send({ success: true, username: user.username, token: token });
            });
        })(req, res, next);
    },

    isJwtValid: function (req, res) {
        res.status(200).send({ success: true });
    },

    _generateToken: function (payload) {
        return jwt.sign(payload, consts.JWT_SECRET, { expiresIn: 60 * consts.JWT_EXP_MIN });
    }
};

module.exports = {
    login: AuthController.login,
    isJwtValid: AuthController.isJwtValid
};
