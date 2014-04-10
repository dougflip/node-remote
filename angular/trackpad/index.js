var ng = require('angular');

module.exports = ng.module('trackpad', [])
  .controller('trackpadCtrl', require('./trackpad-controller'))
  .factory('DragCalculator', require('./drag-calculator'))
  .service('trackpadService', require('./trackpad-service'));
