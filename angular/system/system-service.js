var ng           = require('angular');

var EVT_VOLUME_CHANGE = 'system:volumeChange';

function SystemService($http, Events){
  this.volume = 50;
  this.http = $http;
  this.events = new Events();
}

SystemService.prototype.onVolumeChange = function(scope, cb){
  this.events.on(EVT_VOLUME_CHANGE, scope, cb);
};

SystemService.prototype.emitVolumeChange = function(){
  this.events.emitter.emit(EVT_VOLUME_CHANGE, { volume: this.volume });
};

SystemService.prototype.mute = function(){
  this.volume = 0;
  this.emitVolumeChange();
  return this.http.post('/system/mute');
};

SystemService.prototype.setVolume = function(level){
  level = parseNewLevel(level);
  if(level === null){
    return this.emitVolumeChange();
  }

  this.volume = level;
  this.emitVolumeChange();
  return this.http.post('/system/setVolume', { level: this.volume });
};

SystemService.prototype.closeWindow = function(){
  console.log('closing the window...');
  return this.http.post('/system/closeWindow');
};

SystemService.prototype.suspend = function(){
  return this.http.post('/system/suspend');
};

function parseNewLevel(level){
  level = parseInt(level);
  if(!ng.isNumber(level) || ng.equals(level, NaN)){
    return null;
  }

  if(level <= 0){
    return 0;
  }
  if(level >= 100){
    return 100;
  }

  return level;
}

module.exports = ['$http', 'Events', SystemService];
