(function() {
  'use strict';

  angular
      .module('harmonograph')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      },
      {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      },
      {
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      },
      {
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      },
      {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      },
      {
        'title': 'Foundation',
        'url': 'http://foundation.zurb.com/',
        'description': 'The most advanced responsive front-end framework in the world.',
        'logo': 'foundation.png'
      },
      {
        'title': 'Angular Foundation',
        'url': 'http://pineconellc.github.io/angular-foundation/',
        'description': 'A set of native AngularJS directives based on Foundation\'s markup and CSS',
        'logo': 'angular-foundation.png'
      },
      {
        'title': 'Sass (Ruby)',
        'url': 'http://sass-lang.com/',
        'description': 'Original Syntactically Awesome StyleSheets implemented in Ruby',
        'logo': 'ruby-sass.png'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
