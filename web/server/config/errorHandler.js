"use strict";

var helpers = {
    logToConsole: function (err) {
        console.log("\n/////////////////\n" + err.name.toUpperCase() + "\n/////////////////");
        console.log(err);
    }
};

module.exports = function (app) {
    app.use(function (err, req, res, next) {
        if (!err) {
            return next();
        }

        // Errors:

        if (err.name === "UnauthorizedError") {
            return res.status(401).send({ success: false, message: err.message });
        }

        // if uncaught
        helpers.logToConsole(err);
        res.status(500).send({ name: err.name });
    });
};