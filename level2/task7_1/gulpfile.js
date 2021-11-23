const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');

const cssFiles = [
    './src/css/vars.sass',
    './src/css/main.sass',
    './src/css/base.sass',
    './src/css/fonts.sass',
    './src/css/media.sass'
]

const jsFiles = [
    './src/js/main.js',
    './src/js/productComp.js',
    './src/js/cartComp.js',
    './src/js/filterComp.js',
    './src/js/errorComp.js'
]


function styles() {
    return gulp.src(cssFiles)
        .pipe(sourcemaps.init())
        .pipe(sass())


        .pipe(concat('style.css'))

        .pipe(autoprefixer({
            cascade: false
        }))

        .pipe(cleanCSS({
            level: 2
        }))


        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream());
}


function scripts() {
    return gulp.src(jsFiles)

        .pipe(concat('script.js'))

        .pipe(terser({
            /*toplevel: true*/
        }))

        .pipe(gulp.dest('./public/js'))
        .pipe(browserSync.stream());
}


function clean() {
    return del(['public/css/*', 'public/js/*'])

}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/css/**/*.sass', styles)
    gulp.watch('./src/js/**/*.js', scripts)
    gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('styles', styles); //таск вызывающий функцию styles

gulp.task('scripts', scripts); //таск вызывающий функцию scripts

gulp.task('del', clean);

gulp.task('watch', watch);

gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts)));

gulp.task('dev', gulp.series('build', 'watch'));