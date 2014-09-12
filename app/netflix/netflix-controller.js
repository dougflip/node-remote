var angular = require('angular');

var passThroughMethods = [
  'fullScreen', 'exitFullScreen', 'rewind', 'pause', 'play', 'fastForward',
  'frameBack', 'toggleKeyframeMode', 'frameForward', 'launchMedia'
];

function NetflixCtrl(netflixService){
  this.searchQuery = null;
  this.netflixService = netflixService;

  this.media = netflixService.media;
}

NetflixCtrl.prototype.search = function(query){
  this.netflixService.search(query);
  this.searchQuery = null;
};

function createNetflixCtrl(controllerHelper, netflixService){
  controllerHelper.createPassThroughMethods(passThroughMethods, NetflixCtrl.prototype, netflixService);

  return new NetflixCtrl(netflixService);
}

module.exports = ['controllerHelper', 'netflixService', createNetflixCtrl];
