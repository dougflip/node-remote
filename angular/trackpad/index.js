var ng = require('angular');

module.exports = ng.module('trackpad', [])
  .service('trackpadService', require('./trackpad-service'));
