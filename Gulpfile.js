var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var glob = require('glob');

gulp.task('browserify-dev', function() {
	var bundleStream = browserify('./angular/node-remote.js').bundle({debug: true});
	return bundleStream
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./public'));
});

gulp.task('browserify-test', function() {
	var testFiles = glob.sync('./angular/**/*_test.js');
	var bundleStream = browserify(testFiles).bundle({debug: true});
	return bundleStream
		.pipe(source('bundle-test.js'))
		.pipe(gulp.dest('./angular'));
});

gulp.task('dev-build', ['browserify-dev', 'browserify-test'], function() {
	gulp.watch('angular/**/*.js', ['browserify-dev', 'browserify-test']);
});

gulp.task('default', ['browserify-dev'], function() {
	gulp.watch('angular/**/*.js', ['browserify-dev']);
});
