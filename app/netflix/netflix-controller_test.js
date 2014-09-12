describe('NetflixCtrl', function(){
  var mock = require('angular-mock');
  var nullMock = require('../test-utils/null-mock');
  var sut, netflixServiceMock;

  beforeEach(mock.module(require('../node-remote').name));

  beforeEach(mock.module(function($provide){
    netflixServiceMock = nullMock(require('./netflix-service'));
    netflixServiceMock.media = [ 'one', 'two' ];
    $provide.value('netflixService', netflixServiceMock);
  }));

  beforeEach(mock.inject(function($controller){
    sut = $controller('netflixCtrl');
  }));

  describe('construction', function(){
    it('should load the media array from the service', function(){
      expect(sut.media).toEqual(['one', 'two']);
    });
  });

  describe('search', function(){
    it('should call through to the service', function(){
      sut.search('the office');
      expect(netflixServiceMock.search).toHaveBeenCalledWith('the office');
    });

    it('should clear the search query', function(){
      sut.searchQuery = 'something';
      sut.search('the office');
      expect(sut.searchQuery).toBeNull();
    });
  });

  describe('fullScreen', function(){
    it('should call through to the service', function(){
      sut.fullScreen();
      expect(netflixServiceMock.fullScreen).toHaveBeenCalled();
    });
  });

  describe('exitFullScreen', function(){
    it('should call through to the service', function(){
      sut.exitFullScreen();
      expect(netflixServiceMock.exitFullScreen).toHaveBeenCalled();
    });
  });

  describe('rewind', function(){
    it('should call through to the service', function(){
      sut.rewind();
      expect(netflixServiceMock.rewind).toHaveBeenCalled();
    });
  });

  describe('pause', function(){
    it('should call through to the service', function(){
      sut.pause();
      expect(netflixServiceMock.pause).toHaveBeenCalled();
    });
  });

  describe('play', function(){
    it('should call through to the service', function(){
      sut.play();
      expect(netflixServiceMock.play).toHaveBeenCalled();
    });
  });

  describe('fastForward', function(){
    it('should call through to the service', function(){
      sut.fastForward();
      expect(netflixServiceMock.fastForward).toHaveBeenCalled();
    });
  });

  describe('frameBack', function(){
    it('should call through to the service', function(){
      sut.frameBack();
      expect(netflixServiceMock.frameBack).toHaveBeenCalled();
    });
  });

  describe('toggleKeyframeMode', function(){
    it('should call through to the service', function(){
      sut.toggleKeyframeMode();
      expect(netflixServiceMock.toggleKeyframeMode).toHaveBeenCalled();
    });
  });

  describe('frameForward', function(){
    it('should call through to the service', function(){
      sut.frameForward();
      expect(netflixServiceMock.frameForward).toHaveBeenCalled();
    });
  });

  describe('when launching media', function(){
    it('should call through to the service', function(){
      sut.launchMedia(1234);
      expect(netflixServiceMock.launchMedia).toHaveBeenCalledWith(1234);
    });
  });
});
