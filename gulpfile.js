var gulp = require('gulp');
var gc = require('gulp-copy');

gulp.task('Build Chrome extension', function () {
    return gulp
        .src('script.js')
        .pipe(gc('chromium/dealternator'))
});