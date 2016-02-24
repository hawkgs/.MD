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

    // non-gulp
    //path = require("path"),
    //merge = require('merge2'),

    // vars
    tsProject = ts.createProject("tsconfig.json"),
    docsConfig = require("./typedoc.json");

// Helpers
function compileDevTs(pathToRebuild, basePath) {
    var tsResult = gulp.src(pathToRebuild)
        .pipe(plumber()) // Keep pipes running
        .pipe(tslint()) // Linter
        .pipe(tslint.report(tslintStylish, {
            emitError: false,
            sort: true,
            bell: true
        }))
        .pipe(inlineNg2Template({ base: "/public/ng_app" })) // Inject templates (html, css)
        .pipe(sourcemaps.init()) // Create source maps
        .pipe(ts(tsProject));

    tsResult.js
        .pipe(sourcemaps.write()) // Write source maps
        .pipe(gulp.dest(basePath)); // Build JS

    // Merge the two output streams, so this task is finished when the IO of both operations are done.
    //return merge([
    //    tsResult.dts.pipe(gulp.dest("./public/ng_app/_tsd")),
    //    tsResult.js
    //        .pipe(sourcemaps.write()) // Write source maps
    //        .pipe(gulp.dest(basePath)) // Build JS
    //]);
}

// Tasks

gulp.task("clean", function () {
    return gulp.src("./public/app", { read: false })
        .pipe(clean());
});

gulp.task("build.dev", ["clean"], function() {
    compileDevTs("./public/ng_app/**/*.ts", "./public/app");
});

gulp.task("typedoc", function() {
    return gulp
        .src(["./public/ng_app/**/*.ts"])
        .pipe(typedoc(docsConfig));
});

gulp.task("watch.ts", ["build.dev"], function () {
    // brute solution: recompile all
    watch("./public/ng_app/**/*", function () {
        var time = new Date();

        console.log(`[${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}] recompiling ...`);
        compileDevTs("./public/ng_app/**/*.ts", "./public/app");
    });
});

gulp.task("heroku.prod", function () {
    var tsResult = gulp.src("./public/ng_app/**/*.ts")
        .pipe(inlineNg2Template({ base: "/public/ng_app" }))
        .pipe(ts(tsProject));

    tsResult.js
        .pipe(uglify())
        .pipe(gulp.dest("./public/app"));
});
