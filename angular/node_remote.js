var nodeRemote = angular.module('nodeRemote', [
  'ui.router',
  require('./menu').name,
  require('./system').name
]);

nodeRemote.config(
  require('./routing')
)
