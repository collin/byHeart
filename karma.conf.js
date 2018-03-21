const path = require('path')
const webpackConfig = require('./webpack.config.js')

const IS_TRAVIS = process.env.TRAVIS

module.exports = function(config) {
  config.set({
    singleRun: true,
    browsers: IS_TRAVIS ? ['HeadlessChrome'] : ['Chrome'],
    frameworks: ['mocha', 'chai'],

    files: [
      path.join(__dirname, 'client', '**', '*.spec.js'),
    ],

    reporters: ['dots'],

    preprocessors: {
      'client/**/*.spec.js': ['webpack'],
    },

    webpack: {
      mode: 'development',
      devtool: webpackConfig.devtool,
      module: webpackConfig.module,
    },

    client: {
      mocha: {
        ui: 'bdd',
        reporter: 'html',
      },
      chai: {
        includeStack: true,
      },
    },

    customLaunchers: {
      HeadlessChrome: {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          '--headless',
          '--disable-gpu',
          '--disable-translate',
          '--disable-extensions',
          '--remote-debugging-port=9222', // Without a remote debugging port, Google Chrome exits immediately.
        ],
      },
    },
  })
}
