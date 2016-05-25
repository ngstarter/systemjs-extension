var gulp = require('gulp');
var runSequence = require('run-sequence');
var Builder = require('systemjs-builder');
var config = require('../../gulp.config')();

gulp.task('build-systemjs', function (done) {
    runSequence('tsc-app', buildSJS);

    function buildSJS () {
        var builder = new Builder();
        builder.loadConfig(config.src + 'systemjs.conf.js')
        .then(function() {
            var path = config.tmpApp;
            return builder
                .buildStatic(
                    path + 'main.js',
                    path + 'bundle.js',
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
