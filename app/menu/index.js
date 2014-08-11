var ng = require('angular');

module.exports = ng.module('menu', [])
  .controller('menuCtrl', require('./menu-controller.js'))