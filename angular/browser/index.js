var ng = require('../angular');

module.exports = ng.module('browser', [])
  .controller('browserCtrl', require('./browser-controller'));
