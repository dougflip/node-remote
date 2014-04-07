function SystemCtrl(systemService){
  this.systemService = systemService;
  this.volume = this.systemService.volume;
}

SystemCtrl.prototype.mute = function(){
  return this.systemService.mute();
}

SystemCtrl.prototype.setVolume = function(level){
  return this.systemService.setVolume(this.volume);
};

SystemCtrl.prototype.suspend = function(){
  return this.systemService.suspend();
}

module.exports = ['systemService', SystemCtrl];
