"use strict";

var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    ts = require("gulp-typescript"),
    inlineNg2Template = require("gulp-inline-ng2-template"),
    merge = require('merge2');

gulp.task("public.npm", function () {
    var PUBLIC_PATH = "./public/libs/npm/",
        FILES = [
            "./node_modules/angular2/bundles/angular2-polyfills.js",
            "./node_modules/systemjs/dist/system.src.js",
            "./node_modules/rxjs/bundles/Rx.js",
            "./node_modules/angular2/bundles/angular2.dev.js"
        ];

    return gulp.src(FILES)
        .pipe(gulp.dest(PUBLIC_PATH));
});

/***/

var tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', function() {
    var tsResult = gulp.src('./public/ng_app/**/*.ts')
        .pipe(inlineNg2Template({ base: '/public/ng_app' }))
        .pipe(ts(tsProject));

    // Merge the two output streams, so this task is finished when the IO of both operations are done.
    return merge([
        tsResult.dts.pipe(gulp.dest('./public/ng_app/_tsd')),
        tsResult.js.pipe(gulp.dest('./public/app'))
    ]);
});

gulp.task('watch', ['scripts'], function() {
    gulp.watch('./ng_app/*.ts', ['scripts']);
});

//gulp.task("ng2", function () {
//    var result = gulp.src('./ng_app/**/*.ts')
//        .pipe(tsc());
//
//    return result.js
//        .pipe(gulp.dest("./public/app/"));
//});