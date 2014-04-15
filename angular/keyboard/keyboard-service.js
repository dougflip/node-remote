function KeyboardService($http){
  this.http = $http;
}

KeyboardService.prototype.sendKeys = function(keys){
  return this.http.post('/keys', { keys: keys });
};

KeyboardService.prototype.sendText = function(text){
  return this.http.post('/text', { text: text });
};

module.exports = ['$http', KeyboardService];
