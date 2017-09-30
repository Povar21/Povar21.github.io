const   gulp            = require('gulp'),
		cssnext			= require('gulp-cssnext'),
		sass			= require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./src/scss/pages/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnext({
        compress: true
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});
