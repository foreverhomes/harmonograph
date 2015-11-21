(function() {
  'use strict';

  angular
    .module('harmonograph')
    .directive('harmonograph', harmonograph);

  /** @ngInject */
  function harmonograph($window) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/harmonograph/harmonograph.html',
      scope: {
          options: '='
      },
      controller: harmonographCtrl,
      controllerAs: 'vm',
      bindToController: true,
      link: function(scope, element, attrs) {
      	var d3 = $window.d3;
      	var amplitude = 200;
      	var margin = 10;

      	var svg = d3.select('.svg-container')
      		.append('svg')
      		.attr('width', 600)
      		.attr('height', 400);

      	var xOsc = svg
      		.append('circle')
      		.attr('class', 'x-osc')
      		.attr('freq', scope.settings.x.freq)
      		.attr('r', 4)
      		.attr('cx', margin)
      		.attr('cy', 200)
      		.transition()
      		.duration(scope.settings.duration/scope.settings.x.freq)
      		.each(slideX);

      	var yOsc = svg
      		.append('circle')
      		.attr('class', 'y-osc')
      		.attr('freq', scope.settings.y.freq)
      		.attr('r', 4)
      		.attr('cx', 200)
      		.attr('cy', margin)
      		.transition()
      		.duration(scope.settings.duration/scope.settings.y.freq)
      		.each(slideY);


 		function slideX() {
 		  var circle = d3.select(this);
 		  (function repeat() {
 		    circle = circle.transition()
 		        .attr("cy", 200 - amplitude + margin)
 		      .transition()
 		        .attr("cy", 200)
 		        .each("end", repeat);
 		  })();
 		}

 		function slideY() {
 		  var circle = d3.select(this);
 		  (function repeat() {
 		    circle = circle.transition()
 		        .attr("cx", function() {
 		        	return 200 - amplitude + margin;
 		        })
 		      .transition()
 		        .attr("cx", 200)
 		        .each("end", repeat);
 		  })();
 		}
      }
    };

    return directive;

    /** @ngInject */
    function harmonographCtrl($scope) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      console.log(vm);
      $scope.settings = {
      	x: {
      		freq: 3
      	},
      	y: {
      		freq: 1
      	},
      	duration: 3000
      };
      
    }
  }

})();