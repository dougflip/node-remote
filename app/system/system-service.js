var ng = require('angular');

function SystemService($http, Events){
  this.http = $http;

  // the UI component binds to this directly
  // which is a little dirty, but keeping it simple for now...
  this.volume = 50;
}

SystemService.prototype.mute = function(){
  this.volume = 0;
  this.emitVolumeChange();
  return this.http.post('/system/mute');
};

SystemService.prototype.setVolume = function(level){
  level = parseNewLevel(level);

  if(level === null) return this.emitVolumeChange();

  this.volume = level;
  return this.http.post('/system/set-volume', { level: this.volume });
};

SystemService.prototype.closeWindow = function(){
  return this.http.post('/system/close-window');
};

SystemService.prototype.suspend = function(){
  return this.http.post('/system/suspend');
};

function parseNewLevel(level){
  level = parseInt(level);

  if(!ng.isNumber(level) || ng.equals(level, NaN)) return null;

  if(level <= 0) return 0;
  if(level >= 100) return 100;

  return level;
}

module.exports = ['$http', 'Events', SystemService];
