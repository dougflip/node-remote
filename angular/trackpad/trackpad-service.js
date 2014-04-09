function TrackpadService($http){
  this.http = $http;
}

TrackpadService.prototype.moveRelative = function(x, y){
  return this.http.post('/mouse/moveRelative', { xrel: x, yrel: y });
};

TrackpadService.prototype.leftClick = function(){
  return this.http.post('/mouse/leftClick');
};

TrackpadService.prototype.rightClick = function(){
  return this.http.post('/mouse/rightClick');
};

TrackpadService.prototype.doubleClick = function(){
  return this.http.post('/mouse/doubleClick');
};

module.exports = ['$http', TrackpadService];
