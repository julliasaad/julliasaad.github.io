var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();
var pug = require('gulp-pug');

var config = {
    srcPath: 'src/',
    distPath: 'dist/'
};

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './',
        },
        port: 8080,
        startPath: 'index.html',
    })
});

gulp.task('sass', function() {
    return gulp.src(config.srcPath + 'sass/**/*.+(scss|sass)')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError)) // Using gulp-sass
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.distPath + 'css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browserSync'], function() {
    gulp.watch(config.srcPath + 'sass/**/*.+(scss|sass)', ['sass']);
});

gulp.task('views', function buildHTML() {
    return gulp.src('src/template/*.pug')
        .pipe(pug({
            // Your options in here.
        }))
        .pipe(gulp.dest('./'));
    // .pipe(pug()) // pip to jade plugin
    //
});
