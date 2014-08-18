function TrackpadService($http){
  this.http = $http;
}

TrackpadService.prototype.moveRelative = function(x, y){
  return this.http.post('/mouse/move-relative', { x: x, y: y });
};

TrackpadService.prototype.leftClick = function(){
  return this.http.post('/mouse/left-click');
};

TrackpadService.prototype.rightClick = function(){
  return this.http.post('/mouse/right-click');
};

TrackpadService.prototype.doubleClick = function(){
  return this.http.post('/mouse/double-click');
};

module.exports = ['$http', TrackpadService];
