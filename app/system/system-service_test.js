ddescribe('SystemService', function(){
  const mocks = require('angular-mock');

  let sut;

  beforeEach(mocks.module(require('./index').name));

  beforeEach(mocks.inject(function(systemService){
    sut = systemService;
  }));

  describe('construction', () => {

    it('should initialize the volume', () => {
      expect(sut.volume).toBeDefined();
    });

  });

  describe('mute', () => {

    it('should set the volume to 0', () => {
      sut.volume = 100;
      sut.mute();
      expect(sut.volume).toBe(0);
    });

    it('should send a mute request to the API', mocks.inject(($httpBackend) => {
      $httpBackend.expectPOST(/\/system\/mute/, null).respond(200);
      sut.mute();
      $httpBackend.flush();
    }));

  });

  describe('setVolume', () => {

    it('should take no action on a non number input', () => {
      sut.volume = 50;
      sut.setVolume('invalid');
      expect(sut.volume).toBe(50);
    });

    it('should convert a negative number to 0', () => {
      sut.setVolume(-50);
      expect(sut.volume).toBe(0);
    });

    it('should convert values above 100 to 100', () => {
      sut.setVolume(200);
      expect(sut.volume).toBe(100);
    });

    it('should post the volume to the correct API endpoint', mocks.inject(($httpBackend) => {
      $httpBackend.expectPOST(/\/system\/set-volume/, { level: 50 }).respond(200);
      sut.setVolume(50);
      $httpBackend.flush();
    }));

  });

});
