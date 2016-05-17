module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'browserify'],
    files: [
      'src/**/*.js',
      'test/**/*_spec.js'
    ],
    preprocessors: {
      'src/**/*.js': ['eslint', 'browserify'],
      'test/**/*_spec.js': ['browserify']
    },
    browsers: ['PhantomJS'],
    browserify: {
      debug: true
    }
  })
};
