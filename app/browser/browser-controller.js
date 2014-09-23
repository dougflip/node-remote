var angular = require('angular');

var passThroughMethods = ['closeTab', 'nextTab', 'zoomIn', 'zoomOut', 'actualSize'];

function BrowserController(browserService){
  this.browserService = browserService;
  this.launchUrl = null;
}

BrowserController.prototype.launch = function(){
  this.browserService.launch(this.launchUrl);
  this.launchUrl = null;
};

function createBrowserCtrl(controllerHelper, browserService){
  controllerHelper.createPassThroughMethods(passThroughMethods, BrowserController.prototype, browserService);

  return new BrowserController(browserService);
}

module.exports = ['controllerHelper', 'browserService', createBrowserCtrl];
