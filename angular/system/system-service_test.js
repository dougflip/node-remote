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

  describe('when setting the volume', function(){
    it('should set the new volume level', function(){
      sut.setVolume(50);
      expect(sut.volume).toEqual(50);
    });

    it('should post the volume to the correct API endpoint', function(){
      $httpBackend.expectPOST('/system/setVolume', { level: 50 }).respond(200);
      sut.setVolume(50);
      $httpBackend.flush();
    });
  });

  describe('when calling suspend', function(){
    it('should post to the correct API endpoint', function(){
      $httpBackend.expectPOST('/system/suspend').respond(200);
      sut.suspend();
      $httpBackend.flush();
    });
  });
});
