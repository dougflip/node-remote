var ng = require('angular');

module.exports = ng.module('trackpad', [])
  .controller('trackpadCtrl', require('./trackpad-controller'))
  .directive('touchpad', require('./touchpad'))
  .directive('mousePad', require('./mouse-pad'))
  .factory('DragCalculator', require('./drag-calculator'))
  .service('trackpadService', require('./trackpad-service'));
