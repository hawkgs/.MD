"use strict";

var path = require("path"),
    rootPath = path.normalize(__dirname + "/../../");

module.exports = {
    development: {
        host: "http://localhost",
        rootPath: rootPath,
        db: "mongodb://localhost/dot-md",
        port: process.env.PORT || 3000
    },
    // WARNING: The production version is incomplete
    production: {
        host: "",
        rootPath: rootPath,
        db: "",
        port: process.env.PORT || 3000
    }
};
