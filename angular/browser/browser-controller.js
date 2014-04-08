function BrowserController(browserService){
  this.browserService = browserService;
}

BrowserController.prototype.launch = function(url){
  this.browserService.launch(url);
};

BrowserController.prototype.closeTab = function(url){
  this.browserService.closeTab();
};

BrowserController.prototype.nextTab = function(url){
  this.browserService.nextTab();
};

BrowserController.prototype.zoomIn = function(url){
  this.browserService.zoomIn();
};

BrowserController.prototype.zoomOut = function(url){
  this.browserService.zoomOut();
};

BrowserController.prototype.actualSize = function(url){
  this.browserService.actualSize();
};

module.exports = ['browserService', BrowserController]
