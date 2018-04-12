// Load plugins
var gulp = require('gulp');
var war = require('gulp-war');
var zip = require('gulp-zip');


gulp.task('war', function() {

  gulp.src('dist/**')
        .pipe(war({
            welcome: 'index.html',
            displayName: 'THE NAME OF MY APPLICATION',
        }))
        .pipe(zip('angular-erbo.war'))
        .pipe(gulp.dest('./war'));

});
