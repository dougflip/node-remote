describe('SystemController', function(){
  var mocks = require('angular-mock');
  var sut, systemServiceMock, $scope;

  beforeEach(mocks.module(require('../node-remote').name));

  beforeEach(mocks.module(function($provide){
    systemServiceMock = {
      volume: 10,
      onVolumeChange: function(){},
      mute: function(){},
      setVolume: function(){},
      suspend: function(){}
    };
    $provide.value('systemService', systemServiceMock);
  }));

  beforeEach(mocks.inject(function($controller, _$rootScope_){
    $scope = _$rootScope_.$new();
    sut = $controller('systemCtrl', { $scope: $scope });
  }));

  describe('post construction', function(){
    it('should intialize volume to the system service volume', function(){
      expect(sut.volume).toEqual(10);
    });

    it('should register for volume change', function(){
      // TODO: like to make sure this event registration happens...
      //  This is also a great place for an e2e test instead
      //  Test could switch to this view, change the volume and ensure UI updates
    });
  });

  describe('when volume change is emitted', function(){
    it('should set the local volume', function(){
      sut.onVolumeChange({ volume: 100 });
      expect(sut.volume).toEqual(100);
    });
  });

  describe('when setting volume', function(){
    it('should call through to the system service', function(){
      spyOn(systemServiceMock, 'setVolume');
      sut.setVolume(50);
      expect(systemServiceMock.setVolume).toHaveBeenCalledWith(50);
    });
  });

  describe('when suspending', function(){
    it('should call through to the system service', function(){
      spyOn(systemServiceMock, 'suspend');
      sut.suspend();
      expect(systemServiceMock.suspend).toHaveBeenCalled();
    });
  });
});
