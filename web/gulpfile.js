"use strict";

var gulp = require("gulp"),
    //uglify = require("gulp-uglify"),
    ts = require("gulp-typescript"),
    watch = require("gulp-watch"),
    clean = require("gulp-clean"),
    inlineNg2Template = require("gulp-inline-ng2-template"),
    tslint = require("gulp-tslint"),
    tslintStylish = require("gulp-tslint-stylish"),

    // non-gulp
    path = require("path"),
    merge = require('merge2'),

    // vars
    tsProject = ts.createProject("tsconfig.json");

// Helpers
function buildTypescript(pathToRebuild, basePath) {
    var tsResult = gulp.src(pathToRebuild)
        .pipe(inlineNg2Template({ base: "/public/ng_app" }))
        .pipe(tslint())
        .pipe(tslint.report(tslintStylish, {
            emitError: false,
            sort: true,
            bell: true
        }))
        .pipe(ts(tsProject));

    // Merge the two output streams, so this task is finished when the IO of both operations are done.
    return merge([
        //tsResult.dts.pipe(gulp.dest("./public/ng_app/_tsd")),
        tsResult.js.pipe(gulp.dest(basePath))
    ]);
}

// Tasks

gulp.task("clean", function () {
    return gulp.src("./public/app", { read: false })
        .pipe(clean());
});

gulp.task("build.dev", ["clean"], function() {
    buildTypescript("./public/ng_app/**/*.ts", "./public/app");
});

gulp.task("watch.ts", ["build.dev"], function () {
    watch("./public/ng_app/**/*", function (obj) {
        var fileExt = path.extname(obj.path),
            basePath = path.dirname(obj.path).replace(__dirname, ""),
            builtBasePath = path.join(".", basePath.replace("ng_app", "app")),
            modified;

        if (fileExt === ".ts") {
            modified = path.join(".", obj.path.replace(__dirname, ""));
        } else {
            modified = path.join(".", basePath, "*.ts");
        }

        console.log("Modified: " + modified);

        buildTypescript(modified, builtBasePath);
    });
});
