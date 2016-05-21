# ngstarter-systemjs-tasks
SystemJS build extension for Angular 2 Starter

[![npm version](https://badge.fury.io/js/ngstarter-systemjs-tasks.svg)](https://badge.fury.io/js/ngstarter-systemjs-tasks)

## Getting started
1. Make sure you have `systemjs.conf.js` in the starter root

2. Install the extension
    ```bash
    npm install ngstarter-systemjs-tasks
    ```

3. Open `gulp.config.js` in the starter and add the following builder config
    ```js
    var systemJs = {
        builder: {
            normalize: true,
            minify: true,
            mangle: true,
            runtime: false,
            globalDefs: { DEBUG: false, ENV: 'production' }
        }
    };
    ```

4. Go to tasks/build.js in your starter, require the extension
    ```js
    require('ngstarter-systemjs-tasks');
    ```

    and then set the second param to `build-systemjs`
    ```js
    gulp.task('build', function (done) {
        runSequence('test', 'build-systemjs', 'build-assets', done);
    });
    ```

5. Done! Try to build it!

## License
MIT
