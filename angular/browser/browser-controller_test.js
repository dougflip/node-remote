describe('BrowserController', function(){
  var mocks = require('../angular-mock');
  var sut, browserServiceMock;

  beforeEach(mocks.module(require('../node-remote').name));

  beforeEach(mocks.module(function($provide){
    browserServiceMock = {
      launch: new Function()
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
});
