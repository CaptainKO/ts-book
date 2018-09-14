// Declarartion
var gulp = require('gulp');
var tslint = require('gulp-tslint');
var ts = require('gulp-typescript');
var browserify = require('browserify'),
    transform = require('vinyl-transform'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');
var browserified = transform(function (filename) {
    var b = browserify({
        entries: filename,
        debug: true
    });
    return b.bundle();
});
gulp.task('default', function () { // Declare a function named 'default'
    console.log('Hello World');
});
gulp.task('lint', function () {
    return gulp.src([
            './source/ts/**/**.ts', // Read All subfolders and all their *.ts files
            './test/**/**.ts'
        ]).pipe(tslint()) // Output stream will be sent to tslint()
        .pipe(tslint.report('verbose')); // Output from tslint() will be sent to tslint.report function
}); // Check whether our TypeScript code follows a series of recommended practices
var tsProject = ts.createProject({
    removeComments: true,
    noImplicitAny: true,
    target: 'ES3',
    module: 'commonjs',
    declarationFiles: false // All of these are options for ts complier (compiling ts to js).
});
gulp.task('tsc', function () {
    return gulp.src('/source/ts/**/**.ts') // like lint task
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest('./temp/source/js')); // .js write it as *.js file and then write it down
});
var tsTestProject = ts.createProject({
    removeComments: true,
    noImplicitAny: true,
    target: 'ES3',
    module: 'commonjs',
    declarationFiles: false // Like tsProject
});
gulp.task('tsc-tests', function () {
    return gulp.src('.test/**/**.test.ts')
        .pipe(ts(tsTestProject))
        .js.pipe(gulp.dest('./temp/test/'));
});
gulp.task('default', ['lint', 'tsc', 'tsc-tests']); // Add them as subtasks of default task
