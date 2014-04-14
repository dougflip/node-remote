function KeyboardService($http){
  this.http = $http;
}

KeyboardService.prototype.sendKeys = function(keys){
  return this.http.post('/keys', { keys: keys });
}

module.exports = ['$http', KeyboardService];
