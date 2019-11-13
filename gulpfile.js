"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
// var imagemin = require("gulp-imagemin");
var rename = require("gulp-rename");
// var svgstore = require("gulp-svgstore");
// var svgmin = require("gulp-svgmin");
var del = require("del");
var uglify = require('gulp-uglify');
//var run = require("run-sequence");
var server = require("browser-sync").create();

// gulp.task("style", function() {
//   gulp.src("less/style.less")
//     .pipe(plumber())
//     .pipe(less())
//     // .pipe(postcss([
//     //   autoprefixer({browsers: [
//     //     "last 2 versions"
//     //   ]}),
//     //   mqpacker({
//     //     sort: true
//     //   })
//     // ]))
//     .pipe(gulp.dest("css"))
//     .pipe(minify())
//     .pipe(rename("style.min.css"))
//     .pipe(gulp.dest("css"))
//     //.pipe(server.stream());
// });

gulp.task("style", function() {
  return gulp.src("less/common/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer(),
      mqpacker({
        sort: true
      })
    ]))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream())
});

gulp.task('uglify', function(done){
  gulp.src('js/*.js')
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('build/js'))
  done()
});
//
// gulp.task("images", function() {
//   return gulp.src("build/img/**/*.{png,jpg,gif}")
//     .pipe(imagemin([
//       imagemin.optipng({optimizationLevel: 3}),
//       imagemin.jpegtran({progressive: true})
//     ]))
//     .pipe(gulp.dest("build/img"));
// });
//
// gulp.task("symbols", function() {
//   return gulp.src("img/icons/*.svg")
//     .pipe(svgmin())
//     .pipe(svgstore({
//       inlineSvg: true
// }))
//     .pipe(rename("symbols.svg"))
//     .pipe(gulp.dest("img"));
// });
//
// gulp.task("html:copy", function() {
//   return gulp.src("*.html")
//     .pipe(gulp.dest("build"));
// });
//
// gulp.task("html:upreload", ["html:copy"], function(done) {
//   server.reload();
//   done();
// });

gulp.task("serve", function(done) {

    server.init({
        server: {
          baseDir: "."
        },
        port: 3000
    });

    gulp.watch("less/common/style.less", gulp.series("style"));
    gulp.watch("*.html").on('change', () => {
      server.reload();
      done();
    });
    done();
});

gulp.task("build", gulp.parallel("style", "uglify"));

