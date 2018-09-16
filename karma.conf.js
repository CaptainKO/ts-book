module.exports = function (config) {
    'use strict';
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon'],
        browsers: ['PhantomJS'],
        reporters: ['progress', 'coverage'],
        plugins: [
            'karma-coverage', 
            'karma-mocha', 
            'karma-chai', 
            'karma-sinon', 
            'karma-phantomjs-launcher'
        ],
        preprocessors: {
            './dist/test/*.test.js': ['coverage']
        },
        port: 8080, //The Default is 9876
        colors: true,
        autoWatch: false,
        singleRun: false,
        logLevel: config.LOG_INFO
    });
};