var ng = require('angular');

module.exports = ng.module('youTube', [])
  .controller('youTubeCtrl', require('./you-tube-controller'))
  .service('youTubeService', require('./you-tube-service'));
