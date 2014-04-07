var ng = require('../angular');

module.exports = ng.module('system', [])
  .controller('systemCtrl', require('./system-controller.js'));
