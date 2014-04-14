describe('NetflixCtrl', function(){
  var mock = require('angular-mock');
  var sut, keyboardServiceMock, netflixServiceMock;

  beforeEach(mock.module(require('../node-remote').name));

  beforeEach(mock.module(function($provide){
    keyboardServiceMock = {
      sendKeys: new Function()
    };
    netflixServiceMock = {
      launchMedia: new Function()
    };
    $provide.value('keyboardService', keyboardServiceMock);
    $provide.value('netflixService', netflixServiceMock);
  }));

  beforeEach(mock.inject(function($controller){
    sut = $controller('netflixCtrl');
  }));

  describe('when calling search', function(){
    it('should clear the search query', function(){
      sut.searchQuery = 'something';
      sut.search('the office');
      expect(sut.searchQuery).toBeNull();
    });
  });

  describe('when calling fullScreen', function(){
    it('should call through to the keyboardService', function(){
      spyOn(keyboardServiceMock, 'sendKeys');
      sut.fullScreen();
      expect(keyboardServiceMock.sendKeys).toHaveBeenCalledWith('f');
    });
  });

  describe('when calling exitFullScreen', function(){
    it('should call through to the keyboardService', function(){
      spyOn(keyboardServiceMock, 'sendKeys');
      sut.exitFullScreen();
      expect(keyboardServiceMock.sendKeys).toHaveBeenCalledWith('Escape');
    });
  });

  describe('when calling togglePlayPause', function(){
    it('should call through to the keyboardService', function(){
      spyOn(keyboardServiceMock, 'sendKeys');
      sut.togglePlayPause();
      expect(keyboardServiceMock.sendKeys).toHaveBeenCalledWith('space');
    });
  });

  describe('when launching media', function(){
    it('should call through to the netflixService', function(){
      spyOn(netflixServiceMock, 'launchMedia');
      sut.launchMedia(1234);
      expect(netflixServiceMock.launchMedia).toHaveBeenCalledWith(1234);
    });
  });
});
