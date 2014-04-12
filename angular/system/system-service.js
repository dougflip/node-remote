function SystemService($http){
  this.volume = 50;
  this.http = $http;
}

SystemService.prototype.mute = function(){
  this.volume = 0;
  return this.http.post('/system/mute');
};

SystemService.prototype.setVolume = function(level){
  if(level <= 0){
    level = 0;
  }
  if(level >= 100){
    level = 100;
  }
  this.volume = level;
  return this.http.post('/system/setVolume', { level: this.volume });
};

SystemService.prototype.suspend = function(){
  return this.http.post('/system/suspend');
};

module.exports = ['$http', SystemService];
