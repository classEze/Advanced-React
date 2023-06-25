const {src,dest,series,watch} = require("gulp");
const sass = require("gulp-sass")(require("sass"))

function buildStyles(){
    src("scss/src/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(dest("css"))
}

function watchStyles(){
    watch("scss/**/**/*.scss", buildStyles)
}

exports.default = series(buildStyles, watchStyles)
