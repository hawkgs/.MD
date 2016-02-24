"use strict";

var path = require("path"),
    rootPath = path.normalize(__dirname + "/../../");

/**
 * Server configuration - development and production.
 */
module.exports = {
    development: {
        host: "http://localhost",
        rootPath: rootPath,
        db: "mongodb://localhost/dot-md",
        port: process.env.PORT || 3000
    },
    production: {
        host: "https://dot-md.herokuapp.com/",
        rootPath: rootPath,
        db: "fill",
        port: process.env.PORT || 3000
    }
};
