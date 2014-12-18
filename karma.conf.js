module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'wwwroot/lib/angular/angular.js',
      'wwwroot/lib/angular-route/angular-route.js',
      'wwwroot/lib/angular-mocks/angular-mocks.js',
      'wwwroot/app/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
