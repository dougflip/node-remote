describe('HeaderController', function(){
  var mocks = require('angular-mock');
  var sut, rootScopeMock;

  beforeEach(mocks.module(require('../node-remote').name));

  beforeEach(mocks.module(function($provide){
    rootScopeMock = { $emit: new Function() };
    $provide.value('$rootScope', rootScopeMock);
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
});
