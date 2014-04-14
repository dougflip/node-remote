function NetflixService($http){
  this.http = $http;
}

NetflixService.prototype.launchMedia = function(id){
  return this.http.post(
    '/browser/launch',
    {
      flags:{
        '--profile-directory': '"Profile 1"'
      },
      'url': 'http://movies.netflix.com/WiPlayer?movieid=' + id
    }
  );
}

module.exports = ['$http', NetflixService];
