function NetflixService($http){
  this.http = $http;

  // TODO: eventually load this from the server
  this.media = [
    { id: '70136120', imageUrl: 'http://cdn4.nflximg.net/webp/0604/3360604.webp' },
    { id: '70136141', imageUrl: 'http://cdn6.nflximg.net/webp/9386/869386.webp' },
    { id: '70136138', imageUrl: 'http://cdn3.nflximg.net/webp/0823/2110823.webp' },
  ];
}

NetflixService.prototype.search = function(query){
  return this.http.post('/netflix/search', { searchTerm: query });
};

NetflixService.prototype.launchMedia = function(id){
  return this.http.post('/netflix/launch-media-item', { mediaId: id });
};

NetflixService.prototype.togglePlayPause = function(){
  return this.http.post('/netflix/toggle-play-pause');
};

NetflixService.prototype.play = function(){
  return this.http.post('/netflix/play');
};

NetflixService.prototype.pause = function(){
  return this.http.post('/netflix/pause');
};

NetflixService.prototype.fullScreen = function(){
  return this.http.post('/netflix/full-screen');
};

NetflixService.prototype.exitFullScreen = function(){
  return this.http.post('/netflix/exit-full-screen');
};

NetflixService.prototype.rewind = function(){
  return this.http.post('/netflix/rewind');
};

NetflixService.prototype.fastForward = function(){
  return this.http.post('/netflix/fast-forward');
};

NetflixService.prototype.toggleKeyframeMode = function(){
  return this.http.post('/netflix/toggle-keyframe-mode');
};

NetflixService.prototype.frameBack = function(){
  return this.http.post('/netflix/frame-back');
};

NetflixService.prototype.frameForward = function(){
  return this.http.post('/netflix/frame-forward');
};

module.exports = ['$http', NetflixService];
