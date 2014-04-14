describe('SystemService', function(){
  var mocks = require('angular-mock');
  var nodeRemote = require('../node-remote');
  var sut, $httpBackend, EventsMock;

  beforeEach(mocks.module(nodeRemote.name));

  beforeEach(mocks.module(function($provide){
    EventsMock = function(){
      this.on = new Function();
      this.emitter = {
        emit: function(){}
      };
    };
    $provide.value('Events', EventsMock);
  }));

  beforeEach(mocks.inject(function(_$httpBackend_, systemService){
    sut = systemService;
    $httpBackend = _$httpBackend_;
  }));

  describe('when adding an event listener', function(){
    it('should call through to events', function(){
      var scope = {};
      var cb = new Function();
      spyOn(sut.events, 'on');
      sut.onVolumeChange(scope, cb);
      expect(sut.events.on).toHaveBeenCalledWith('system:volumeChange', scope, cb);
    });
  });

  describe('when emitting a volume change', function(){
    it('should emit the current volume', function(){
      spyOn(sut.events.emitter, 'emit');
      sut.volume = 37;
      sut.emitVolumeChange();
      expect(sut.events.emitter.emit).toHaveBeenCalledWith('system:volumeChange', { volume: 37 });
    });
  });

  describe('when muting volume', function(){
    beforeEach(function(){
      spyOn(sut.events.emitter, 'emit');
    });

    it('should emit a volume change event', function(){
      sut.mute();
      expect(sut.events.emitter.emit).toHaveBeenCalled();
    });

    it('should post to the correct API endpoint', function(){
      $httpBackend.expectPOST('/system/mute', null).respond(200);
      sut.mute();
      $httpBackend.flush();
    });
  });

  describe('when setting the volume', function(){
    it('should block non number inputs', function(){
      spyOn(sut.events.emitter, 'emit');
      sut.setVolume('something');
      expect(sut.volume).toEqual(50);
      expect(sut.events.emitter.emit).toHaveBeenCalledWith('system:volumeChange', { volume: 50 });
    });

    it('should convert a negative to 0', function(){
      spyOn(sut.events.emitter, 'emit');
      sut.setVolume(-1);
      expect(sut.volume).toEqual(0);
      expect(sut.events.emitter.emit).toHaveBeenCalledWith('system:volumeChange', { volume: 0 });
    });

    it('should convert a values above 100 to 100', function(){
      spyOn(sut.events.emitter, 'emit');
      sut.setVolume(1234);
      expect(sut.volume).toEqual(100);
      expect(sut.events.emitter.emit).toHaveBeenCalledWith('system:volumeChange', { volume: 100 });
    });

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

  describe('when calling closeWindow', function(){
    it('should post to the correct API endpoint', function(){
      $httpBackend.expectPOST('/system/closeWindow').respond(200);
      sut.closeWindow();
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
