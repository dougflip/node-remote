function NetflixCtrl(keyboardService, netflixService){
  this.searchQuery = null;
  this.keyboardService = keyboardService;
  this.netflixService = netflixService;

  this.media = [
    { id: '70136120', imageUrl: 'http://cdn4.nflximg.net/webp/0604/3360604.webp' },
    { id: '70136141', imageUrl: 'http://cdn6.nflximg.net/webp/9386/869386.webp' },
    { id: '70136138', imageUrl: 'http://cdn3.nflximg.net/webp/0823/2110823.webp' },
  ]
}

NetflixCtrl.prototype.search = function(query){
  console.log('Call service with', query);
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
