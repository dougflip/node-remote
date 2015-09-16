var ng = require('angular');

class SystemService {

  constructor($http){
    this.http = $http;

    // the UI component binds to this directly
    // which is a little dirty, but keeping it simple for now...
    this.volume = 50;
  }

  mute(){
    this.volume = 0;
    return this.http.post('/system/mute');
  }

  setVolume(level){
    level = parseNewLevel(level);

    if(level === null) return;

    this.volume = level;
    return this.http.post('/system/set-volume', { level: this.volume });
  }

  closeWindow(){
    return this.http.post('/system/close-window');
  }

  suspend(){
    return this.http.post('/system/suspend');
  }

}

function parseNewLevel(level){
  level = parseInt(level);

  if(!ng.isNumber(level) || ng.equals(level, NaN)) return null;

  if(level <= 0) return 0;
  if(level >= 100) return 100;

  return level;
}

module.exports = ['$http', SystemService];
