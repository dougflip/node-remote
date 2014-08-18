function BrowserService($http){
  this.http = $http;
}

BrowserService.prototype.launch = function(url, flags){
  return this.http.post('/browser/launch', { url: url, flags: flags });
}

BrowserService.prototype.closeTab = function(){
  return this.http.post('/browser/close-tab');
}

BrowserService.prototype.nextTab = function(){
  return this.http.post('/browser/next-tab');
}

BrowserService.prototype.zoomIn = function(){
  return this.http.post('/browser/zoom-in');
}

BrowserService.prototype.zoomOut = function(){
  return this.http.post('/browser/zoom-out');
}

BrowserService.prototype.actualSize = function(){
  return this.http.post('/browser/actual-size');
}

module.exports = ['$http', BrowserService];
