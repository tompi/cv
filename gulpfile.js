var gulp = require('gulp'),
    replace = require('gulp-string-replace'),
    hb = require('gulp-hb');

gulp.task('default', function () {
      return gulp
        .src('./src/index.html')
        .pipe(hb({
            data: './src/*.json',
            helpers: './src/*.js',
            partials: './src/*.hbs'
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('pdf', function () {
      return gulp
        .src('./src/cv.tex')
        .pipe(hb({
            data: './src/*.json',
            helpers: './src/*.js',
            partials: './src/*.hbs'
        }))
        .pipe(replace(/#/g, '\\#'))
        .pipe(replace(/.png/g, ''))
        .pipe(replace(/\&quot;/g, '"'))
        .pipe(gulp.dest('./'));
});
