"use strict";

var jwt = require("jsonwebtoken"),
    SECRET = "#yoloMojeBi #sweg trolololo lel",
    TOKEN_EXP_MIN = 5;

module.exports = {
    generateToken: function (payload) {
        return jwt.sign(payload, SECRET, { expiresInMinutes: 60 * TOKEN_EXP_MIN });
    }
};
