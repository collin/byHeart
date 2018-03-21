const path = require('path')
const webpackConfig = require('./webpack.config.js')

module.exports = function(config) {
  config.set({
    singleRun: true,
    browsers: ['Chrome'],
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
  })
}
