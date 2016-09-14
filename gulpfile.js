'use strict';
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');


var gutil = require('gulp-util');
var size = require('gulp-size');
var rename = require('gulp-rename');

var path = require('path');
var fs = require('fs');

var cssToJs = require('gulp-css-to-js');
gulp.task('css2js',function(){
    var styleStream = gulp.src('./node_modules/animate.css/animate.min.css')
    .pipe(cssToJs())
    .pipe(rename({extname:".js"}))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', function() {
    var b = browserify({
        entries: './src/index.js',
        debug: true
    });
    return b.bundle()
        .pipe(source('./bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(uglify({
            compress : {
                screw_ie8 : false
            },
            mangle : {
                screw_ie8 : false
            }
        }))
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(size({
            showFiles: true
        }))
        .pipe(gulp.dest('./dist'));
});

