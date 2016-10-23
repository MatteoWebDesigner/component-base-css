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
        dist: './dist/',
        rootFiles: './app/*.*',
        assetsFiles: 'app/assets/**/*',
        css: './app/style/main.css',
        cssFiles: './app/style/**/*',
        browserSupport: ['ie >= 10', '> 1%']
    };

gulp.task('clean', function() {
    return gulp.src(config.dist)
        .pipe(clean({
            force: true
        }))
});

gulp.task('htmlAndConfig', function() {
    return gulp.src(config.rootFiles)
        .pipe(gulp.dest(config.dist));
});

gulp.task('assets', function() {
    return gulp.src(config.assetsFiles, {
            'base': './app'
        })
        .pipe(gulp.dest(config.dist));
});

gulp.task('css', function() {
    return gulp.src(config.css)
        .pipe(sourcemaps.init())
        .pipe(postcss([
            cssImport({
                path: ['./node_modules/']
            }),
            cssNext({
                browsers: config.browserSupport,
                warnForDuplicates: false
            }),
            cssNano()
        ]))
        .pipe(size({
            showFiles: true
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dist));
});

gulp.task('watch', () => {
    gulp.watch(config.rootFiles, ['htmlAndConfig']);
    gulp.watch(config.cssFiles, ['css']);
});

gulp.task('default', () => {
    runSequence(
        'clean',
        'htmlAndConfig',
        'assets',
        'css',
        'watch'
    );
});