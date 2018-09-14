var gulp = require('gulp');
var tslint = require('gulp-tslint');
var ts = require('gulp-typescript');
gulp.task('lint', function () {
    return gulp.src([
        './source/ts/**/**.ts',
        './test/**/**.ts'
    ]).pipe(tslint())
    .pipe(tslint.report('verbose'));
})
gulp.task('default', function () {
    console.log('Hello World');
});
var tsProject = ts.createProject({
    removeComments: true,
    noImplicitAny : true,
    target : 'ES3',
    module : 'commonjs',
    declarationFiles : false
});
gulp.task('tsc', function() {
    return gulp.src('/source/ts/**/**.ts')
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest('./temp/source/js'));
});
var tsTestProject = ts.createProject({
    removeComments : true,
    noImplicitAny : true,
    target : 'ES3',
    module : 'commonjs',
    declarationFiles : false
});
gulp.task('tsc-tests', function() {
    return gulp.src('.test/**/**.test.ts')
        .pipe(ts(tsTestProject))
        .js.pipe(gulp.dest('./temp/test/'));
});
gulp.task('default', ['lint', 'tsc', 'tsc-tests']);