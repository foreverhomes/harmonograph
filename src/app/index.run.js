(function() {
  'use strict';

  angular
    .module('harmonograph')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
