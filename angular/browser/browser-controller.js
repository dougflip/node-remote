function BrowserController(browserService){
  this.browserService = browserService;
}

BrowserController.prototype.launch = function(url){
  this.browserService.launch(url);
};

module.exports = ['browserService', BrowserController]
