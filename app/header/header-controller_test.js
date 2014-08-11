describe('HeaderController', function(){
  var mocks = require('angular-mock');
  var sut, rootScopeMock, systemServiceMock;

  beforeEach(mocks.module(require('../node-remote').name));

  beforeEach(mocks.module(function($provide){
    rootScopeMock = { $emit: new Function() };
    systemServiceMock = { mute: new Function() };
    $provide.value('$rootScope', rootScopeMock);
    $provide.value('systemService', systemServiceMock);
  }));

  beforeEach(mocks.inject(function($controller){
    sut = $controller('headerCtrl');
  }));

  describe('when opening the main menu', function(){
    it('should call $emit on the root scope', function(){
      spyOn(rootScopeMock, '$emit');
      sut.openMainMenu();
      expect(rootScopeMock.$emit).toHaveBeenCalledWith('menu:open');
    });
  });

  describe('when calling mute', function(){
    it('should call through to the system service', function(){
      spyOn(systemServiceMock, 'mute');
      sut.mute();
      expect(systemServiceMock.mute).toHaveBeenCalled();
    });
  });
});
