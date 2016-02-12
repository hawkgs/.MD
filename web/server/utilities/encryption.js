"use strict";

var crypto = require("crypto");

/**
 * Password encryption utility.
 */
module.exports = {
    /**
     * Generates a random password salt.
     * @returns {string}
     */
    generateSalt: function () {
        return crypto.randomBytes(128).toString("base64");
    },

    /**
     * Hashes the password with the provided salt.
     * @param salt {string}
     * @param password {string}
     * @returns {string}
     */
    generateHashedPassword: function (salt, password) {
        var hmac = crypto.createHmac("sha1", salt);

        return hmac.update(password).digest("hex");
    }
};