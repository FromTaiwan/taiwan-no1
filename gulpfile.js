var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var imagemin = require('gulp-imagemin');
var del = require('del');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

/**
  Call this task indepedently Using 'gulp js'
**/
gulp.task('js', function() {
  gulp.watch('./src/javascript/*.js', ['js']);
  return gulp.src('./src/javascript/*.js')
    .pipe(concat('build.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/javascript'))
    .pipe(notify({ message: 'scripts task finished!' }));
});

gulp.task('less', function() {
  gulp.watch('./src/stylesheet/*.less', ['less']);
  return gulp.src('./src/stylesheet/*.less')
      .pipe(less())
      .pipe(concatCss('bundle.css')) // name of concated css.
      .pipe(minifyCSS())
      .pipe(gulp.dest('./dist/assets/stylesheet'));
});

gulp.task('image', function() {
  return gulp.src('./src/image/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('./dist/assets/image'))
    .pipe(notify({ message: 'images compression finished!' }));
});

gulp.task('clean', function(cb) {
  del(['./dist/assets'], cb);
});

/**
  default task by 'gulp' and do less -> image -> js task
**/
gulp.task('default', ['less', 'image', 'js']);
