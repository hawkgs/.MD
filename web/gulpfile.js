"use strict";

var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    ts = require("gulp-typescript"),
    watch = require("gulp-watch"),
    clean = require("gulp-clean"),
    plumber = require("gulp-plumber"),
    sourcemaps = require("gulp-sourcemaps"),
    inlineNg2Template = require("gulp-inline-ng2-template"),
    tslint = require("gulp-tslint"),
    tslintStylish = require("gulp-tslint-stylish"),
    typedoc = require("gulp-typedoc"),

    // vars
    tsProject = ts.createProject("tsconfig.json"),
    docsConfig = require("./typedoc.json");

var PATHS = {
    dist: "./public/app",
    app: "./public/ng_app",
    appTs: "./public/ng_app/**/*.ts",
    typings: "./typings/browser.d.ts",
    watch: "./public/ng_app/**/*"
};

// Helpers
var Helpers = {
    compileDevTs: function (pathToRebuild, basePath) {
        var tsResult = gulp.src(pathToRebuild)
            .pipe(plumber()) // Keep pipes running
            .pipe(tslint()) // Linter
            .pipe(tslint.report(tslintStylish, {
                emitError: false,
                sort: true,
                bell: true
            }))
            .pipe(inlineNg2Template({base: PATHS.app})) // Inject templates (html, css)
            .pipe(sourcemaps.init()) // Create source maps
            .pipe(ts(tsProject));

        tsResult.js
            .pipe(sourcemaps.write()) // Write source maps
            .pipe(gulp.dest(basePath)); // Build JS
    }
};

// Tasks

gulp.task("clean", function () {
    return gulp.src(PATHS.dist, { read: false })
        .pipe(clean());
});

gulp.task("build.dev", ["clean"], function() {
    Helpers.compileDevTs([ PATHS.typings, PATHS.appTs ], PATHS.dist);
});

gulp.task("typedoc", function() {
    return gulp
        .src([PATHS.appTs])
        .pipe(typedoc(docsConfig));
});

gulp.task("watch.ts", ["build.dev"], function () {
    // brute solution: recompile all
    watch(PATHS.watch, function () {
        var time = new Date();

        console.log(`[${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}] recompiling ...`);
        Helpers.compileDevTs([ PATHS.typings, PATHS.appTs ], PATHS.dist);
    });
});

gulp.task("heroku.prod", function () {
    var tsResult = gulp.src([
            PATHS.typings,
            PATHS.appTs
        ])
        .pipe(inlineNg2Template({ base: PATHS.app }))
        .pipe(ts(tsProject));

    tsResult.js
        .pipe(uglify())
        .pipe(gulp.dest(PATHS.dist));
});
