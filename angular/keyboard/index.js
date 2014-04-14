var ng = require('angular');

module.exports = ng.module('keyboard', [])
  .service('keyboardService', require('./keyboard-service'));
