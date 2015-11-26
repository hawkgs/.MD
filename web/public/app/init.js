// Load all of the dependencies asynchronously.
$script([
    // Load Angular
    "libs/angular/angular.js",
    "libs/angular-route/angular-route.js",

    //
    "app/app.js",

    // main (user) module
    "app/main/mainModule.js",
    "app/main/controllers/HomeCtrl.js",
    "app/main/controllers/AboutCtrl.js"

    //"app/components/version/version.js",
    //"app/components/version/version-directive.js",
    //"app/components/version/interpolate-filter.js"
], function() {
    angular.bootstrap(document, ["app"]);
});