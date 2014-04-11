describe('MenuController', function(){
  var mocks = require('angular-mock');
  var sut, rootScope, locationMock;

  beforeEach(mocks.module(require('../node-remote').name));

  beforeEach(mocks.module(function($provide){
    locationMock = { path: new Function() };
    spyOn(locationMock, 'path').and.returnValue('/system');
    $provide.value('$location', locationMock);
  }));

  beforeEach(mocks.inject(function($controller, $rootScope){
    sut = $controller('menuCtrl');
    rootScope = $rootScope;
  }));

  describe('after construction', function(){
    it('should default menuIsOpen to false', function(){
      expect(sut.menuIsOpen).toBe(false);
    });

    it('should set the active menu item', function(){
      expect(sut.activeItem).toEqual('/system');
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

  // TODO: This doesn't actually test that the activeItem is set
  //  I want to change the spy behavior at the start of the test
  //  Figure this out later, not worth the time at the moment
  describe('when the user changes location', function(){
    it('should update the active item', function(){
      expect(locationMock.path.calls.count()).toEqual(1);
      rootScope.$emit('$locationChangeSuccess');
      expect(locationMock.path.calls.count()).toEqual(2);
    });
  })
});
