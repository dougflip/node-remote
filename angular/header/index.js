var ng = require('angular');

module.exports = ng.module('header', [])
  .controller('headerCtrl', require('./header-controller'));
