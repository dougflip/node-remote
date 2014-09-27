var angular = require('angular');

var passThroughMethods = [
  'seekToPercentage', 'launch', 'fullScreen', 'exitFullScreen', 'togglePlayPause', 'frameBackShort',
  'frameBack', 'frameForwardShort', 'frameForward', 'restart', 'goToBeginning', 'goToEnd'
];

function YouTubeCtrl(youTubeService){
  this.searchQuery = null;
  this.youTubeService = youTubeService;
}

YouTubeCtrl.prototype.search = function(query){
  this.youTubeService.search(query);
  this.searchQuery = null;
};

function createYouTubeCtrl(controllerHelper, youTubeService){
  controllerHelper.createPassThroughMethods(passThroughMethods, YouTubeCtrl.prototype, youTubeService);

  return new YouTubeCtrl(youTubeService);
}

module.exports = ['controllerHelper', 'youTubeService', createYouTubeCtrl];
