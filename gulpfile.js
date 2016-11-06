"use strict";

var
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    parseArgs = require('minimist')(process.argv.slice(2)),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    runSequence = require('run-sequence'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload'),
    size = require('gulp-size'),

    postcss = require('gulp-postcss'),
    cssNext = require('postcss-cssnext'),
    cssImport = require('postcss-import'),
    cssNano = require('cssnano'),

    // config
    config = {
        dist: './build/',
        rootFiles: ['./app/*.*','!./app/*.js'],
        assetsFiles: 'app/common/assets/**/*',
        css: './app/common/style/main.css',
        cssFiles: './app/**/*.css',
        cssDep: [
            'app/common/style/setting/theme.css',
            'app/common/style/tool/*.css',
            'app/common/style/base/*.css',
            'app/common/style/element/*.css',
            'app/common/style/layout/*.css',
            'app/common/style/component/*.css',
            'app/common/component/**/*.css',
            'app/home/component/**/*.css',
            'app/common/style/utilities/*.css',
        ],
        browserSupport: ['ie >= 10', '> 1%']
    };

gulp.task('clean', function() {
    return gulp.src(config.dist)
        .pipe(clean({
            force: true
        }))
});

gulp.task('rootFile', function() {
    return gulp.src(config.rootFiles)
        .pipe(gulp.dest(config.dist));
});

gulp.task('assets', function() {
    return gulp.src(config.assetsFiles, {
            'base': './app/common/'
        })
        .pipe(gulp.dest(config.dist));
});

gulp.task('copy', () => {
    runSequence(
        'rootFile',
        'assets'
    );
});

// gulp.task('css', function() {
//     return gulp.src(config.cssDep)
//         .pipe(sourcemaps.init())
//         .pipe(concat('main.css'))
//         .pipe(postcss([
//             cssImport({
//                 path: ['./node_modules/']
//             }),
//             cssNext({
//                 browsers: config.browserSupport,
//                 warnForDuplicates: false
//             }),
//             cssNano()
//         ]))
//         .pipe(size({
//             showFiles: true
//         }))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest(config.dist));
// });

gulp.task('watch', () => {
    gulp.watch(config.rootFiles, ['copy']);
});

gulp.task('default', () => {
    runSequence(
        'clean',
        'copy',
        'watch'
    );
});