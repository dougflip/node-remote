var ng = require('./angular');

var nodeRemote = ng.module('nodeRemote', [
  'ui.router',
  require('./menu').name,
  require('./system').name
]);

nodeRemote.config(
  require('./routing')
)
