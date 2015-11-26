"use strict";

var path = require("path"),
    rootPath = path.normalize(__dirname + "/../../");

module.exports = {
    development: {
        rootPath: rootPath,
        db: "mongodb://localhost/e2e",
        port: process.env.PORT || 3030
    },
    // WARNING: The production version is incomplete
    production: {
        rootPath: rootPath,
        db: "",
        port: process.env.PORT || 3030
    }
};
