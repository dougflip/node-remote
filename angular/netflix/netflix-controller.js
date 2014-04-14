function NetflixCtrl(keyboardService, netflixService){
  this.searchQuery = null;
  this.keyboardService = keyboardService;
  this.netflixService = netflixService;

  this.media = netflixService.media;
}

NetflixCtrl.prototype.search = function(query){
  this.netflixService.search(query);
  this.searchQuery = null;
};

NetflixCtrl.prototype.fullScreen = function(){
  this.keyboardService.sendKeys('f');
};

NetflixCtrl.prototype.exitFullScreen = function(){
  this.keyboardService.sendKeys('Escape');
};

NetflixCtrl.prototype.togglePlayPause = function(){
  this.keyboardService.sendKeys('space');
};

NetflixCtrl.prototype.launchMedia = function(id){
  this.netflixService.launchMedia(id);
}

module.exports = ['keyboardService', 'netflixService', NetflixCtrl];
