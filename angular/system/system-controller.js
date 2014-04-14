var ng = require('angular');

function SystemCtrl($scope, systemService){
  this.systemService = systemService;
  this.volume = this.systemService.volume;

  this.systemService.onVolumeChange(
    $scope,
    ng.bind(this, this.onVolumeChange)
  );
}

SystemCtrl.prototype.onVolumeChange = function(evt){
  this.volume = evt.volume;
}

SystemCtrl.prototype.setVolume = function(level){
  this.systemService.setVolume(level);
};

SystemCtrl.prototype.closeWindow = function(){
  this.systemService.closeWindow();
};

SystemCtrl.prototype.suspend = function(){
  this.systemService.suspend();
};

module.exports = ['$scope', 'systemService', SystemCtrl];
