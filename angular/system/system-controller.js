var ng = require('angular');

function SystemCtrl(systemService){
  this.systemService = systemService;
}

SystemCtrl.prototype.setVolume = function(level){
  this.systemService.setVolume(0 + level);
};

SystemCtrl.prototype.volumeUp = function(){
  this.setVolume(this.systemService.volume + 10);
};

SystemCtrl.prototype.volumeDown = function(){
  this.setVolume(this.systemService.volume - 10);
};

SystemCtrl.prototype.suspend = function(){
  this.systemService.suspend();
};

module.exports = ['systemService', SystemCtrl];
