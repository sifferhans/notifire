const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');

let sassTasks = ['sass','watch:sass'];
let jsTasks = ['js','watch:js'];

gulp.task('sass', function(){
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./build/styles'));
});

gulp.task('js', function(){
  return gulp.src('./src/scripts/**/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./build/scripts'));
});

gulp.task('watch:sass', function(){
  gulp.watch('./src/styles/**/*.scss',['sass']);
});

gulp.task('watch:js', function(){
  gulp.watch('./src/scripts/**/*.js',['js']);
});

gulp.task('dev', [...sassTasks,...jsTasks]);
