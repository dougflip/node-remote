var ng = require('angular');

function SystemCtrl($scope, systemService){
  this.systemService = systemService;
}

SystemCtrl.prototype.closeWindow = function(){
  this.systemService.closeWindow();
};

SystemCtrl.prototype.suspend = function(){
  this.systemService.suspend();
};

module.exports = ['$scope', 'systemService', SystemCtrl];
