const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()
const execa = require('execa')

const OUTPUT_FOLDER = './docs'
const ASSETS_FOLDER = `${OUTPUT_FOLDER}/assets`
const HTML_PATH = `${OUTPUT_FOLDER}/*.html`
const CSS_PATH = 'style/*.scss'
const MD_PATH = 'partials/*.md'

// Static server
gulp.task('browser-sync', ['sass'], () => {
  browserSync.init({
    server: {
      baseDir: OUTPUT_FOLDER
    }
  })

  gulp.watch(MD_PATH).on('change', () => {
    execa.shell('npm run concat').then(browserSync.reload)
  });
  gulp.watch(HTML_PATH, ['reload']);
  gulp.watch(CSS_PATH, ['sass', 'reload']);
})

gulp.task('sass', () => {
  return gulp.src(CSS_PATH)
    .pipe(sass())
    .pipe(gulp.dest(ASSETS_FOLDER))
})

gulp.task('reload', () => {
  return browserSync.reload();
})

gulp.task('default', ['sass', 'browser-sync'])