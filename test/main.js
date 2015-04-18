/**
 * @file requirejs config
 * @author hushicai(bluthcy@gmail.com)
 */

var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

/* global requirejs */
requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src',

    packages: [
        {}
    ],

    paths: {},

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
