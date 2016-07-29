# systemjs-extension
SystemJS build extension for Angular 2 Starter

[![npm version](https://badge.fury.io/js/%40ngstarter%2Fsystemjs-extension.svg)](https://badge.fury.io/js/%40ngstarter%2Fsystemjs-extension)

## Getting started
1. Make sure you have `systemjs.conf.js` in the starter root

2. Install the extension
    ```bash
    npm install @ngstarter/systemjs-extension --save
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
    // Get the starter gulp config
    var config = require('../config')();

    // Load the extension with the config
    require('@ngstarter/systemjs-extension')(config);
    ```

    and then set the second param to `build-systemjs`
    ```js
    gulp.task('build', function (done) {
        runSequence('test', 'build-systemjs', 'build-assets', done);
    });
    ```

5. Done! Try to build it!

## API
### Use own systemjs config
```js
// Get gulp config
var config = require('../config')();

// Get SystemJs config path
var systemJsConfig = 'src/systemjs.config.js';

// Load extension with config and SystemJsConfig
require('@ngstarter/systemjs-extension')(config, systemJsConfig);
```

## License
MIT
