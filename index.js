var gulp = require('gulp');
var runSequence = require('run-sequence');
var Builder = require('systemjs-builder');
var config = require('../../gulp.config')();

gulp.task('build-systemjs', function (done) {
    runSequence('tsc-app', buildSJS);

    function buildSJS () {
        var builder = new Builder();
        builder.loadConfig('./systemjs.conf.js')
        .then(function() {
            return builder
                .buildStatic(config.app + 'main.js',
                        config.tmp + config.app + 'bundle.js',
                config.systemJs.builder);
        })
        .then(function() {
            console.log('Build complete');
            done();
        })
        .catch(function (ex) {
            console.log('error', ex);
            done('Build failed.');
        });
    }
});
