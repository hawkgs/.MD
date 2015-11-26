"use strict";

var fs = require("fs"),
    formidable = require('formidable'),
    encryption = require('../utilities/encryption'),
    clients = require('../config/token').clients,
    users = require('./users'),
    DEFAULT_UPLOAD_DIRECTORY = './public/images',
    DEFAULT_AVATAR = 'default-avatar.jpg',
    UNDEFINED = "undefined";


var getImageGuid = function (image) {
    var guidIndex = image.path.lastIndexOf('/');

    if (guidIndex < 0) {
        guidIndex = image.path.lastIndexOf('\\');
    }

    return image.path.substring(guidIndex + 1);
};

module.exports = {
    createUser: function (req, res, next) {
        if (!req.body.password || !req.body.confirmPassword) {
            res.status(400);
            return res.send({reason: "Missing password"});
        }

        if (req.body.password !== req.body.confirmPassword) {
            res.status(400);
            res.send({reason: "The passwords aren't the same"});
            return;
        }

        // TODO: Add validation
        var newUserData = {
            username: req.body.username,
            email: req.body.email
        };

        newUserData.roles = ["standard"]; // In order to avoid JSON injection for roles

        newUserData.salt = encryption.generateSalt();
        newUserData.hashPass = encryption.generateHashedPassword(newUserData.salt, req.body.password);

        users.create(newUserData, function (err, user) {
            if (err) {
                console.log('Failed to register new user: ' + err);
                res.status(400);
                res.send({reason: err.toString()});
                return;
            }

            req.logIn(user, function (err) {
                if (err) {
                    res.status(400);
                    res.send({reason: err.toString()});
                    return;
                }

                res.send(user);
            });
        });
    },
    updateUser: function (req, res, next) {
        if (!fs.existsSync(DEFAULT_UPLOAD_DIRECTORY)) {
            fs.mkdirSync(DEFAULT_UPLOAD_DIRECTORY);
        }

        var isNewAvatar = false;
        var form = new formidable.IncomingForm();

        form.encoding = 'utf-8';
        form.uploadDir = DEFAULT_UPLOAD_DIRECTORY;
        form.keepExtensions = true;

        form.parse(req, function (err, fields, files) {
            users.findById(fields._id, function (err, user) {
                if (err || !user) {
                    res.status(400).send({reason: 'Error updating user: ' + err});
                    return;
                }
                
                if (fields.confirmPassword === UNDEFINED) {
                    res.status(400).send({ reason: "The password field is empty" });
                    return;
                }

                var hashPass = encryption.generateHashedPassword(user.salt, fields.confirmPassword);

                if (hashPass !== user.hashPass) {
                    res.status(400).send({reason: "Wrong password"});
                    return;
                }

                if (fields.password !== UNDEFINED && fields.repeatPassword !== UNDEFINED) {
                    if ((fields.password !== fields.repeatPassword) || fields.password.length < 6) {
                        res.status(400).send({reason: "There has been an error with the new password. Type again"});
                        return;
                    } else {
                        user.salt = encryption.generateSalt();
                        user.hashPass = encryption.generateHashedPassword(user.salt, fields.password);

                        console.log(user.hashPass);
                    }
                }

                if (files.image) {

                    /* if (process.env.NODE_ENV) {
                     return res.status(403).send({reason: 'Changing profile photos has been disabled for security reasons!'});
                     }*/

                    // removes the old image
                    var oldImagePath = DEFAULT_UPLOAD_DIRECTORY + '/' + user.avatarUrl;
                    if (user.avatarUrl !== DEFAULT_AVATAR && fs.existsSync(oldImagePath)) {
                        fs.unlink(oldImagePath);
                    }

                    // set the new imageUrl
                    var newImageGuid = getImageGuid(files.image);
                    user.avatarUrl = newImageGuid;
                    isNewAvatar = true;
                }


                // TODO: Validation
                if (fields.email) {
                    user.email = fields.email;
                }

                user.save(function (err, updatedUser, numberAffected) {
                    var successObj = {
                        avatarUrl: updatedUser.avatarUrl,
                        email: updatedUser.email,
                        reason: "Профил ъпдейтнат!"
                    };

                    if (err) {
                        res.status(400).send({reason: 'Error updating user: ' + err});
                        return;
                    }

                    if (isNewAvatar) {
                    }
                    else {
                        res.status(200).send(successObj);
                    }
                });
            });
        });
    }
};
