// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        files: [
            '../../wwwroot/dist/vendor.js',
            './boot-tests.ts'
        ],
        preprocessors: {
            './boot-tests.ts': ['webpack']
        },
        reporters: ['progress', 'dots', 'html'],
        htmlReporter: {
            outputFile: 'tests/units.html',

            // Optional 
            pageTitle: 'Unit Tests',
            subPageTitle: 'A sample project description',
            groupSuites: true,
            useCompactStyle: true,
            useLegacyStyle: true
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        customLaunchers: {
            Chrome_without_security: {
                base: 'Chrome',
                flags: [
                    //'--disable-web-security',
                    '--disable-translate',
                    '--disable-extensions',
                    '--remote-debugging-port=9876',
                    '--no-sandbox',
                    '--disable-gpu'
                ]
            }
        },
        client: {
            captureConsole: true
        },
        mime: { 'application/javascript': ['ts', 'tsx'] },
        singleRun: false,        // true !
        webpack: require('../../webpack.config.js')().filter(config => config.target !== 'node'), // Test against client bundle, because tests run in a browser
        webpackMiddleware: { stats: 'errors-only' },
        hostname: 'localhost',
        urlRoot: '/',
        concurrency: Infinity,
        plugins: [
            'karma-webpack',
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-jasmine-html-reporter',
            'karma-html-reporter'
        ],
       
        loggers: [{ type: 'console' }]
    });
};
