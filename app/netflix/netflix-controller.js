function NetflixCtrl(netflixService){
  this.searchQuery = null;
  this.netflixService = netflixService;

  this.media = netflixService.media;
}

NetflixCtrl.prototype.search = function(query){
  this.netflixService.search(query);
  this.searchQuery = null;
};

NetflixCtrl.prototype.fullScreen = function(){
  this.netflixService.fullScreen();
};

NetflixCtrl.prototype.exitFullScreen = function(){
  this.netflixService.exitFullScreen();
};

NetflixCtrl.prototype.togglePlayPause = function(){
  this.netflixService.togglePlayPause();
};

NetflixCtrl.prototype.launchMedia = function(id){
  this.netflixService.launchMedia(id);
}

module.exports = ['netflixService', NetflixCtrl];
