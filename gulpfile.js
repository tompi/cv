var gulp = require('gulp'),
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
