describe('NetflixService', function(){
  var mock = require('angular-mock');
  var sut, $httpBackend;

  beforeEach(mock.module(require('../node-remote').name));

  beforeEach(mock.inject(function(_$httpBackend_, netflixService){
    sut = netflixService;
    $httpBackend = _$httpBackend_;
  }));

  describe('when calling search', function(){
    it('should call the correct API end point', function(){
      $httpBackend.expectPOST('/api/netflix/search', { searchTerm: 'the office' }).respond(200);
      sut.search('the office');
      $httpBackend.flush();
    });
  });

  describe('when calling launchMedia', function(){
    it('should call the correct API end point', function(){
      $httpBackend.expectPOST('/api/netflix/launch-media-item', { mediaId: 1234 }).respond(200);
      sut.launchMedia(1234);
      $httpBackend.flush();
    });
  });
});
