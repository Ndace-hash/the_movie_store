const gulp = require("gulp");

function copyHTML() {
  return gulp.src("./*.html").pipe(gulp.dest("public"));
}

function copyCSS() {
  return gulp
    .src([
      "src/css/**/*.css",
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
    ])
    .pipe(gulp.dest("public/css"));
}

function copyJS() {
  return gulp.src("src/js/**/*.js").pipe(gulp.dest("public/scripts"));
}

function copyAssets() {
  return gulp.src("src/assets/*").pipe(gulp.dest("public/assets"));
}

function watchTasks() {
  gulp.watch(
    ["./*.html", "src/js/**/*.js", "src/css/**/*.css"],
    gulp.parallel(copyHTML, copyJS, copyCSS, copyAssets)
  );
}

exports.default = gulp.series(
  gulp.parallel(copyHTML, copyCSS, copyJS, copyAssets),
  watchTasks
);
