describe('BrowserController', function(){
  var mocks = require('angular-mock');
  var nullMock = require('../test-utils/null-mock');
  var sut, browserServiceMock;

  beforeEach(mocks.module(require('../node-remote').name));

  beforeEach(mocks.module(function($provide){
    browserServiceMock = nullMock(require('./browser-service'));
    $provide.value('browserService', browserServiceMock);
  }));

  beforeEach(mocks.inject(function($controller){
    sut = $controller('browserCtrl');
  }));

  describe('when calling launch', function(){
    it('should pass through to the service', function(){
      sut.launchUrl = 'url';
      sut.launch();
      expect(browserServiceMock.launch).toHaveBeenCalledWith('url');
      expect(sut.launchUrl).toBeNull();
    });
  });

  describe('when calling closeTab', function(){
    it('should pass through to the service', function(){
      sut.closeTab();
      expect(browserServiceMock.closeTab).toHaveBeenCalled();
    });
  });

  describe('when calling nextTab', function(){
    it('should pass through to the service', function(){
      sut.nextTab();
      expect(browserServiceMock.nextTab).toHaveBeenCalled();
    });
  });

  describe('when calling zoomIn', function(){
    it('should pass through to the service', function(){
      sut.zoomIn();
      expect(browserServiceMock.zoomIn).toHaveBeenCalled();
    });
  });

  describe('when calling zoomOut', function(){
    it('should pass through to the service', function(){
      sut.zoomOut();
      expect(browserServiceMock.zoomOut).toHaveBeenCalled();
    });
  });

  describe('when calling actualSize', function(){
    it('should pass through to the service', function(){
      sut.actualSize();
      expect(browserServiceMock.actualSize).toHaveBeenCalled();
    });
  });
});
