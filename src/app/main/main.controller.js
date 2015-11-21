(function() {
  'use strict';

  angular
    .module('harmonograph')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1448078937057;

    console.log(vm);
  }
})();

