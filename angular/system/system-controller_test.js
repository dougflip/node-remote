describe('SystemController', function(){
  var mocks = require('angular-mock');
  var sut, systemServiceMock;

  beforeEach(mocks.module(require('../node-remote').name));

  beforeEach(mocks.module(function($provide){
    systemServiceMock = {
      volume: 10,
      mute: function(){},
      setVolume: function(){},
      suspend: function(){}
    };
    $provide.value('systemService', systemServiceMock);
  }));

  beforeEach(mocks.inject(function($controller){
    sut = $controller('systemCtrl');
  }));

  describe('post construction', function(){
    it('should intialize volume to the system service volume', function(){
      expect(sut.volume).toEqual(10);
    });
  })

  describe('when muting', function(){
    it('it should call through to the system service', function(){
      spyOn(systemServiceMock, 'mute');
      sut.mute();
      expect(systemServiceMock.mute).toHaveBeenCalled();
    });
  });

  describe('when setting volume', function(){
    it('should call through to the system service', function(){
      spyOn(systemServiceMock, 'setVolume');
      sut.volume = 50;
      sut.setVolume();
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
