var ng = require('angular');

module.exports = ng.module('lib', [])
  .factory('Events', require('./events.js'));