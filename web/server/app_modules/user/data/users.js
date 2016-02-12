"use strict";

var User = require("mongoose").model("User");

module.exports = {
    create: function (user, callback) {
        User.create(user, callback);
    },

    findById: function (id, callback) {
        User.findOne({ _id: id }).exec(callback);
    },

    findByUsername: function (username, callback) {
        User.findOne({ username: username }).exec(callback);
    },

    update: function (id, user, callback) {
        User.update({ _id: id }, user, callback);
    }
};