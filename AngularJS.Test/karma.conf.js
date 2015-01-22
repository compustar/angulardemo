// Karma configuration
// Generated on Mon Jan 19 2015 14:50:29 GMT+0000 (GMT Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: '../AngularJS.Web',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'scripts/angular.js',
      '../AngularJS.Test/angular-mocks.js',
      '../AngularJS.Test/testspecs/**/test*.js',
      'scripts/common/filters.js',
      'scripts/shoppingCart/directives_v7.js',
      'scripts/shoppingCart/serviceFactory.poc.js',
      'scripts/shoppingCart/controller_v4.js',
      'scripts/shoppingCart/main_v7.js',
      'scripts/**/*.html'
        ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { 'scripts/**/*.html': ['html2js']
    },

    ngHtml2JsPreprocessor: {
        moduleName: "templates"
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
