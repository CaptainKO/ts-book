var gulp = require('gulp');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
function cb () {
    console.log('WTF');
}
gulp.task('sync', function(cb) {
    setTimeout(function () {
        cb();
    }, 1000);
});
gulp.task('sync', function () {
    return gulp.src('js/*.js')
           .pipe(concat('script.min.js'))
           .pipe(uglify())
           .pipe(gulp.dest('../dist/js'));
});
gulp.task('secondTask', ['sync'], function() {
    console.log('Here I am, Baby!!!');
});
//gulp.task('default', ['sync','secondTask'], function() { // sync and secondTask will run at the same time
//    console.log('this is function default');
//})
gulp.task('default', function(cb) {
    runSequence(
        'sync',
        'secondTask'
    );
})