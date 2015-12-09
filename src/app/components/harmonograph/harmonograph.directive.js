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
      	var amplitude = 400;
      	var margin = 10;
      	var r = 4;

      	var svg = d3.select('.svg-container')
      		.append('svg')
      		.attr('width', 600)
      		.attr('height', 400);

      	var xOsc = svg
      		.append("g")
      		.attr('class', 'x-osc')
  

      	xOsc.append('circle')
      		.attr('data-freq', scope.settings.x.freq)
      		.attr('data-pen', 'x')
      		.attr('r', r)
      		.attr('cx', r)
      		.attr('cy', r)

      	xOsc.append('line')
      		.attr('x1', r)
      		.attr('x2', amplitude - r)
      		.attr('y1', r)
      		.attr('y2', r)
      		.style('stroke-width', '1px')
      		.style('stroke', '#eee');

      	var yOsc = svg
      		.append("g")
      		.attr('class', 'y-osc')
  

      	yOsc.append('circle')
      		.attr('data-freq', scope.settings.x.freq)
      		.attr('data-pen', 'y')
      		.attr('r', r)
      		.attr('cx', amplitude)
      		.attr('cy', r)

      	yOsc.append('line')
      		.attr('x1', amplitude)
      		.attr('x2', amplitude)
      		.attr('y1', r)
      		.attr('y2', amplitude)
      		.style('stroke-width', '1px')
      		.style('stroke', '#eee');

      	xOsc.transition()
      		.ease('linear')
      		.duration(scope.settings.duration/scope.settings.x.freq)
      		.each(slideX);
      	yOsc.transition()
      		.ease('linear')
      		.duration(scope.settings.duration/scope.settings.y.freq)
      		.each(slideY);


 		function slideX() {
 		  var osc = d3.select(this);
 		  (function repeat() {
 		    osc = osc.transition()
 		        .attr("transform", "translate(0, 0)")
 		      .transition()
 		        .attr("transform", "translate(0, "+(amplitude - r)+")")
 		        .each("end", repeat);
 		  })();
 		}

 		function slideY() {
 		  var osc = d3.select(this);
 		  (function repeat() {
 		    osc = osc.transition()
 		        .attr("transform", "translate("+(r - amplitude) +", 0)")
 		      .transition()
 		        .attr("transform", "translate(0, 0)")
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