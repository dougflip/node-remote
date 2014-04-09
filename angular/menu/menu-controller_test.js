describe('MenuController', function(){
  var mocks = require('angular-mock');
  var sut, rootScope;

  beforeEach(mocks.module(require('../node-remote').name));

  beforeEach(mocks.inject(function($controller, $rootScope){
    sut = $controller('menuCtrl');
    rootScope = $rootScope;
  }));

  describe('after construction', function(){
    it('should default menuIsOpen to false', function(){
      expect(sut.menuIsOpen).toBe(false);
    });
  });

  describe('when calling openMenu', function(){
    it('should set menu to open', function(){
      sut.openMenu();
      expect(sut.menuIsOpen).toBe(true);
    });

    it('should subscribe to open the menu', function(){
      rootScope.$emit('menu:open');
      expect(sut.menuIsOpen).toBe(true);
    });
  });

  describe('when calling closeMenu', function(){
    it('should set menu to close', function(){
      sut.closeMenu();
      expect(sut.menuIsOpen).toBe(false);
    });
  });
});
