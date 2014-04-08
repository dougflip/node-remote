function BrowserService($http){
  this.http = $http;
}

BrowserService.prototype.launch = function(url, flags){
  return this.http.post('/browser/launch', { url: url, flags: flags });
}

BrowserService.prototype.closeTab = function(){
  return this.http.post('/browser/closeTab');
}

BrowserService.prototype.nextTab = function(){
  return this.http.post('/browser/nextTab');
}

BrowserService.prototype.zoomIn = function(){
  return this.http.post('/browser/zoomIn');
}

BrowserService.prototype.zoomOut = function(){
  return this.http.post('/browser/zoomOut');
}

BrowserService.prototype.actualSize = function(){
  return this.http.post('/browser/actualSize');
}

module.exports = ['$http', BrowserService];
