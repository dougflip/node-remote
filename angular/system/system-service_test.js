describe('SystemService', function(){
  var nodeRemote = require('../node-remote');
  var mocks = require('../angular-mock');
  var sut, $httpBackend;

  beforeEach(mocks.module(nodeRemote.name));

  beforeEach(mocks.inject(function(_$httpBackend_, systemService){
    sut = systemService;
    $httpBackend = _$httpBackend_;
  }));

  describe('when muting volume', function(){
    it('should post to the correct API endpoint', function(){
      $httpBackend.expectPOST('/system/mute', null).respond(200);
      sut.mute();
      $httpBackend.flush();
    });
  });
});
