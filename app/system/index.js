var ng = require('angular');

module.exports = ng.module('system', [])
  .controller('systemCtrl', require('./system-controller.js'))
  .service('systemService', require('./system-service'))
  .directive('volumeControl', require('./volume-control'));
