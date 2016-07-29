var gulp = require('gulp');
var util = require('gulp-util');
var runSequence = require('run-sequence');
var Builder = require('systemjs-builder');

function SystemJsExtension(config, systemJsConfig) {
    var defaultSystemJsConfig = config.src + 'systemjs.conf.js';
    systemJsConfig = systemJsConfig || defaultSystemJsConfig;

    gulp.task('build-systemjs', function (done) {
        runSequence('tsc-app', buildSJS);

        function buildSJS () {
            var builder = new Builder();
            builder.loadConfig(systemJsConfig)
            .then(function() {
                var path = config.tmpApp;
                return builder
                    .buildStatic(
                        path + 'main.js',
                        path + 'bundle.js',
                        config.systemJs.builder);
            })
            .then(function() {
                util.log('Build complete');
                done();
            })
            .catch(function (ex) {
                util.log('Build failed', ex);
                done('Build failed.');
            });
        }
    });
}

module.exports = SystemJsExtension;
