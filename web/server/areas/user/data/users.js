'use strict';

var User = require('mongoose').model('User');

module.exports = {
    create: function (user, callback) {
        User.create(user, callback);
    },
    findById: function (id, callback) {
        User.findOne({_id: id}).exec(callback);
    },
    findByUsername: function (username, callback) {
        User.findOne({username: username}).exec(callback);
    },
    getUserDetails: function(username, callback) {
        User.findOne({username: username})
            .select("username email stats avatarUrl")
            .exec(callback);
    },
    update: function (id, user, callback) {
        User.update({_id: id}, user, callback);
    },
    addBlockedUsername: function (username, blockedUsername, callback) {
        User.update(
            {username: username},
            {$push: {blockedUsers: blockedUsername}},
            {},
            callback);
    },
    removeBlockedUsername: function (username, blockedUsername, callback) {
        User.update(
            {username: username},
            {$pull: {blockedUsers: blockedUsername}},
            {},
            callback
        );
    },
    addBlockPoint: function (username, callback) {
        User.update({username: username}, {$inc: {"stats.blocked": 1}}, {}, callback);
    },
    removeBlockPoint: function (username, callback) {
        User.update({username: username}, {$inc: {"stats.blocked": -1}}, {}, callback);

    },
    addLikesPoints: function(username, callback){
        User.update({username: username}, {$inc: {"stats.likes": 1}}, {}, callback);
    },
    calculateRankPoints: function(username){
        User.findOne({username: username})
            .exec(function(err, user){
                user.stats.rating = user.rating;
                user.save();
            });
    },
    getSortedByRank: function(username, callback){
        User.find()
            .where({username: new RegExp(username, "i")})
            .sort({'stats.rating': -1})
            .select('username email avatarUrl stats')
            .exec(callback);
    }
};