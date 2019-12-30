const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('default', () => {
  return gulp.watch('./sass/**/*', () => {
    return gulp
      .src('./sass/style.scss')
      .pipe(
        sass({
          outputStyle: 'compressed',
        }).on('error', sass.logError)
      )
      .pipe(gulp.dest('./'))
  })
})
