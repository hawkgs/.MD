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
        db: "mongodb://web_client:dbpassword@ds059692.mongolab.com:59692/dot_md",
        port: process.env.PORT || 3000
    }
};
