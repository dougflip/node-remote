function YouTubeService($http){
  this.http = $http;
}

YouTubeService.prototype.launch = function(){
  return this.http.post('/youtube/launch');
};

YouTubeService.prototype.search = function(query){
  return this.http.post('/youtube/search', { query: query });
};

YouTubeService.prototype.seekToPercentage = function(step){
  return this.http.post('/youtube/seek-to-percentage', { step: step });
};

YouTubeService.prototype.fullScreen = function(){
  return this.http.post('/youtube/full-screen');
};

YouTubeService.prototype.exitFullScreen = function(){
  return this.http.post('/youtube/exit-full-screen');
};

YouTubeService.prototype.togglePlayPause = function(){
  return this.http.post('/youtube/toggle-play-pause');
};

YouTubeService.prototype.frameBackShort = function(){
  return this.http.post('/youtube/frame-back-short');
};

YouTubeService.prototype.frameBack = function(){
  return this.http.post('/youtube/frame-back');
};

YouTubeService.prototype.frameForwardShort = function(){
  return this.http.post('/youtube/frame-foward-short');
};

YouTubeService.prototype.frameForward = function(){
  return this.http.post('/youtube/frame-forward');
};

YouTubeService.prototype.restart = function(){
  return this.http.post('/youtube/restart');
};

YouTubeService.prototype.goToBeginning = function(){
  return this.http.post('/youtube/go-to-beginning');
};

YouTubeService.prototype.goToEnd = function(){
  return this.http.post('/youtube/go-to-end');
};

module.exports = ['$http', YouTubeService];
