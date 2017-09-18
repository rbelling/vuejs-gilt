const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const execa = require('execa')

// Static server
gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './docs'
    }
  })

  gulp.watch('partials/*.md').on('change', () => {
    execa.shell('npm run concat').then(browserSync.reload)
  });
  gulp.watch('docs/*.html').on('change', browserSync.reload);
})

gulp.task('default', ['browser-sync'])