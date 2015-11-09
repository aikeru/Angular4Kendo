"use strict";

var gulp = require('gulp'),
    babel = require('gulp-babel'),
   del = require('del'),
   rename = require('gulp-rename'),
    webpack = require('webpack-stream');

let es6sourceFiles = ['src/**/*.es6'];
let jsBuildFolder = 'build/';
let jsFilesDest = 'public/javascripts/';
let bundleApps = ['build/**/app.js'];

gulp.task('watch-es6', () => {
  return gulp.watch(es6sourceFiles, ['transpile-es6']);
});

gulp.task('transpile-es6', ['babel-cleanup', 'browserify-workflow','babel']);

gulp.task('babel', () => {
  console.log("transpiling es6 to es5");
  return gulp.src(es6sourceFiles)
  .pipe(babel({ 'presets': ["stage-1", "es2015"] })) //enables decorators
  .pipe(gulp.dest(jsBuildFolder));
});

//Assume any 'app.js' within destination folder needs browserify treatment

gulp.task('browserify-workflow', ['babel'], () => {
  console.log("compiling js files into browser friendly files");
  return gulp.src(bundleApps)
    /*.pipe(browserify({
      transform: [
          'browserify-shim'
      ],
      'browserify-shim': {
        'angular2/angular2': 'angular'
      }
    }))*/
      .pipe(webpack(require('./webpack.config.js')))
    .pipe(rename('app-bundle.js'))
    .pipe(gulp.dest(jsFilesDest));
});

gulp.task('babel-cleanup', ['browserify-workflow'], (done) => {
  console.log("cleaning intermediate files");
  del.sync(['build/**/*']);
  done();
});
