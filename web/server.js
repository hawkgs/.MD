"use strict";

var express = require("express"),
    env = process.env.NODE_ENV || "development",
    config,
    app;

console.log("process.env.NODE_ENV: " + process.env.NODE_ENV);

app = express();
config = require("./server/config/config")[env];

// Require components
require("./server/config/express")(app, config);
require("./server/config/mongoose")(config);
require("./server/config/passport")();
require("./server/config/router")(app);

// Start the server
app.listen(config.port);

console.log("NODE_ENV = " + env);
console.log("Server running on port: " + config.port);

module.exports = {
    app: app,
    port: config.port,
    host: config.host
};
