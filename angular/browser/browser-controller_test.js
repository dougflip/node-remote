describe('BrowserController', function(){
  var mocks = require('../angular-mock');
  var sut, browserServiceMock;

  beforeEach(mocks.module(require('../node-remote').name));

  beforeEach(mocks.module(function($provide){
    browserServiceMock = {
      launch: new Function(),
      closeTab: new Function(),
      nextTab: new Function(),
      zoomIn: new Function(),
      zoomOut: new Function(),
      actualSize: new Function()
    }
    $provide.value('browserService', browserServiceMock);
  }));

  beforeEach(mocks.inject(function($controller){
    sut = $controller('browserCtrl');
  }));

  describe('when calling launch', function(){
    it('should pass through to the service', function(){
      spyOn(browserServiceMock, 'launch');
      sut.launch('url');
      expect(browserServiceMock.launch).toHaveBeenCalledWith('url');
    });
  });

  describe('when calling closeTab', function(){
    it('should pass through to the service', function(){
      spyOn(browserServiceMock, 'closeTab');
      sut.closeTab();
      expect(browserServiceMock.closeTab).toHaveBeenCalled();
    });
  });

  describe('when calling nextTab', function(){
    it('should pass through to the service', function(){
      spyOn(browserServiceMock, 'nextTab');
      sut.nextTab();
      expect(browserServiceMock.nextTab).toHaveBeenCalled();
    });
  });

  describe('when calling zoomIn', function(){
    it('should pass through to the service', function(){
      spyOn(browserServiceMock, 'zoomIn');
      sut.zoomIn();
      expect(browserServiceMock.zoomIn).toHaveBeenCalled();
    });
  });

  describe('when calling zoomOut', function(){
    it('should pass through to the service', function(){
      spyOn(browserServiceMock, 'zoomOut');
      sut.zoomOut();
      expect(browserServiceMock.zoomOut).toHaveBeenCalled();
    });
  });

  describe('when calling actualSize', function(){
    it('should pass through to the service', function(){
      spyOn(browserServiceMock, 'actualSize');
      sut.actualSize();
      expect(browserServiceMock.actualSize).toHaveBeenCalled();
    });
  });
});
