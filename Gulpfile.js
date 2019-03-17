const del = require("del");
const gulp = require('gulp');
const watch = require('gulp-watch');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;

const dir = {
    src         : 'pm-lib/',
    build       : 'build/'
  };


var clean = () => {
  return del([ dir.build ]);
}

var jsTask = () => {
  return gulp.src(`${dir.src}/*.js`)
    .pipe(babel({
          presets: [
            "@babel/preset-env",
          ]
      }))
    .pipe(concat('index.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(`${dir.build}`));
}

var watchFiles = () => {
  gulp.watch(`${dir.src}/**/*.js`, jsTask);
}

exports.watch = gulp.parallel(watchFiles);
exports.default = gulp.series(clean, gulp.parallel(jsTask));
