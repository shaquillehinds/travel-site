const gulp = require("gulp"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssvars = require("postcss-simple-vars"),
  nested = require("postcss-nested"),
  mixins = require("postcss-mixins"),
  cssImport = require("postcss-import"),
  hexrgba = require("postcss-hexrgba");

let styles = gulp.task("styles", () => {
  return gulp
    .src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .on("error", function(err) {
      console.log(err.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});
