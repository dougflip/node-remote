function BrowserController(browserService){
  this.browserService = browserService;
  this.launchUrl = null;
}

BrowserController.prototype.launch = function(){
  this.browserService.launch(this.launchUrl);
  this.launchUrl = null;
};

BrowserController.prototype.closeTab = function(){
  this.browserService.closeTab();
};

BrowserController.prototype.nextTab = function(){
  this.browserService.nextTab();
};

BrowserController.prototype.zoomIn = function(){
  this.browserService.zoomIn();
};

BrowserController.prototype.zoomOut = function(){
  this.browserService.zoomOut();
};

BrowserController.prototype.actualSize = function(){
  this.browserService.actualSize();
};

module.exports = ['browserService', BrowserController]
