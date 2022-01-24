const GulpClient = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function build() {
  return gulp.src("./style/**/*.scss").pipe(sass()).pipe(gulp.dest("./style/"));
}

GulpClient.task("watch", function () {
  gulp.watch("./style/**/*.scss", build);
});
exports.default = build;
