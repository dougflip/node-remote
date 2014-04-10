var ng = require('angular');

var nodeRemote = ng.module('nodeRemote', [
  'ui.router',
  'hmTouchEvents',
  require('./browser').name,
  require('./header').name,
  require('./menu').name,
  require('./netflix').name,
  require('./system').name,
  require('./trackpad').name
]);

nodeRemote.config(
  require('./routing')
);

module.exports = nodeRemote;
