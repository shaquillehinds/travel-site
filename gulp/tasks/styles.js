const gulp = require("gulp"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssvars = require("postcss-simple-vars"),
  nested = require("postcss-nested"),
  mixins = require("postcss-mixins"),
  cssImport = require("postcss-import");

let styles = gulp.task("styles", () => {
  return gulp
    .src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, mixins, nested, autoprefixer, cssvars]))
    .on("error", function(err) {
      console.log(err.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});
