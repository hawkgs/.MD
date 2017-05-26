"use strict";

var userController = require("./userController"),
    authController = require("./authController");

module.exports = {
    user: userController,
    auth: authController
};