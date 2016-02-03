'use strict';

import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import mocha from 'gulp-mocha';
import FileCache from 'gulp-file-cache';

const fileCache = new FileCache();

gulp.task('compile', ()=>{
  return gulp.src(['src/**/*.js', 'test/**/*.js'], {base: '.'})
  .pipe(fileCache.filter())
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(fileCache.cache())
  .pipe(gulp.dest('tmp'));
});

gulp.task('test', ['compile'], ()=>{
  return gulp.src('tmp/**/*.js', {read: false})
  // gulp-mocha needs filepaths so you can't have any plugins before it
  .pipe(mocha());
});

gulp.task('default', ['test'], ()=>{

});


