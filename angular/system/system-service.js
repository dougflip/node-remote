function SystemService($http){
  this.volume = null;
  this.http = $http;
}

SystemService.prototype.mute = function(){
  return this.http.post('/system/mute');
};

SystemService.prototype.setVolume = function(level){
  this.volume = level;
  return this.http.post('/system/setVolume', { level: level });
};

SystemService.prototype.suspend = function(){
  return this.http.post('/system/suspend');
};

module.exports = ['$http', SystemService];
