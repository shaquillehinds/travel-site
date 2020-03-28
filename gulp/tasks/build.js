let gulp = require("gulp"),
  imagemin = require("gulp-imagemin"),
  del = require("del"),
  usemin = require("gulp-usemin"),
  rev = require("gulp-rev"),
  uglify = require("gulp-uglify"),
  cssnano = require("gulp-cssnano"),
  browserSync = require("browser-sync").create();

gulp.task("previewDist", () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "dist"
    }
  });
});
gulp.task("deleteDistFolder", ["styles", "scripts"], () => {
  return del("./dist");
});

gulp.task("copyGeneralFiles", ["deleteDistFolder"], () => {
  let pathsToCopy = [
    "./app/**/*",
    "!./app/index.html",
    "!./app/assets/images",
    "!./app/assets/styles/**",
    "!./app/assets/scripts/**",
    "!./app/temp",
    "!./app/temp/**"
  ];

  return gulp.src(pathsToCopy).pipe(gulp.dest("./dist"));
});

gulp.task("optimizeImages", ["deleteDistFolder", "icons"], () => {
  return gulp
    .src([
      "./app/assets/images/**/*",
      "!./app/assets/images/icons",
      "!./app/assets/images/icons/**/*"
    ])
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
      })
    )
    .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task("usemin", ["deleteDistFolder"], () => {
  return gulp
    .src("./app/index.html")
    .pipe(
      usemin({
        css: [
          () => {
            return rev();
          },
          () => {
            return cssnano();
          }
        ],
        js: [
          () => {
            return rev();
          },
          () => {
            return uglify();
          }
        ]
      })
    )
    .pipe(gulp.dest("./dist/"));
});

gulp.task("build", [
  "deleteDistFolder",
  "copyGeneralFiles",
  "optimizeImages",
  "usemin"
]);
