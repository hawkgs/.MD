"use strict";

var mongoose = require("mongoose"),
    encryption = require("../../../../utilities/encryption");

var User;

module.exports.init = function () {
    var userSchema = mongoose.Schema({
        username: { type: String, require: "{PATH} is required", unique: true },
        email: {type: String, require: "{PATH} is required", unique: true },
        salt: String,
        hashPass: String,
        files: [{
            fileName: String
        }]
    });

    //userSchema.index({ username: 1, 'stats.rating': -1 });

    userSchema.method({
        authenticate: function(password) {
            return encryption.generateHashedPassword(this.salt, password) === this.hashPass;
        }
    });

    User = mongoose.model("User", userSchema);
};

//function addPassword(user) {
//    var salt = encryption.generateSalt();
//    var hashedPwd = encryption.generateHashedPassword(salt, user.username);
//    user.salt = salt;
//    user.hashPass = hashedPwd;
//}