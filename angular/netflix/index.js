var ng = require('angular');

module.exports = ng.module('netflix', [])
  .controller('netflixCtrl', require('./netflix-controller.js'));
