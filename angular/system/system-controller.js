var ng = require('angular');

function SystemCtrl($scope, systemService){
  this.systemService = systemService;
  this.volume = this.systemService.volume;

  var self = this;
  this.onVolumeChange = function(evt){
    self.volume = evt.volume;
  };
  this.systemService.onVolumeChange(this.onVolumeChange);
  
  $scope.$on('$destroy', function(){
    self.systemService.removeVolumeChange(self.onVolumeChange);
  });
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
