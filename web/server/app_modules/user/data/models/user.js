"use strict";

var mongoose = require("mongoose"),
    encryption = require("../../../../utilities/encryption");

module.exports.init = function () {
    var User;
    var userSchema = mongoose.Schema({
        username: { type: String, require: "{PATH} is required", unique: true },
        email: {type: String, require: "{PATH} is required", unique: true },
        salt: String,
        hashPass: String,
        files: [{
            fileName: String
        }]
    });

    userSchema.method({
        isPasswordValid: function(password) {
            return encryption.generateHashedPassword(this.salt, password) === this.hashPass;
        }
    });

    User = mongoose.model("User", userSchema);
};
