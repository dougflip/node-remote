function NetflixService($http){
  this.http = $http;

  // TODO: eventually load this from the server
  this.media = [
    { id: '70136120', imageUrl: 'http://cdn4.nflximg.net/webp/0604/3360604.webp' },
    { id: '70136141', imageUrl: 'http://cdn6.nflximg.net/webp/9386/869386.webp' },
    { id: '70136138', imageUrl: 'http://cdn3.nflximg.net/webp/0823/2110823.webp' },
  ];
}

NetflixService.prototype.search = function(query){
  return this.http.post('/netflix/search', { searchTerm: query });
};

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
