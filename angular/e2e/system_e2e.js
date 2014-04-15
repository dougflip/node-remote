describe('Running NodeRemote', function(){
  var testHelper = require('./test-helper');

  describe('setting volume up and down', function(){
    var systemPage;
    beforeEach(function(){
      systemPage = new testHelper.SystemModule();
    });

    it('should reflect changes in the UI', function(){
      testHelper.getIndex();
      expect(systemPage.volumeInput().getAttribute('value')).toEqual('50');

      systemPage.volumeUpBtn().click();
      expect(systemPage.volumeInput().getAttribute('value')).toEqual('60');

      systemPage.volumeDownBtn().click();
      expect(systemPage.volumeInput().getAttribute('value')).toEqual('50');
    });
  });

  describe('navigating to other pages', function(){
    var headerModule, menuModule, browserModule, netflixModule, trackpadModule;
    beforeEach(function(){
      headerModule = new testHelper.HeaderModule();
      menuModule = new testHelper.MenuModule();
      browserModule = new testHelper.BrowserModule();
      netflixModule = new testHelper.NetflixModule();
      trackpadModule = new testHelper.TrackpadModule();
    });

    it('should navigate to the browser module', function(){
      headerModule.mainMenuButton().click();
      menuModule.browserLink().click();
      expect(browserModule.launchInput().isPresent()).toBe(true);
    });

    it('should navigate to the netflix module', function(){
      headerModule.mainMenuButton().click();
      menuModule.netflixLink().click();
      expect(netflixModule.searchInput().isPresent()).toBe(true);
    });

    it('should navigate to the trackpad module', function(){
      headerModule.mainMenuButton().click();
      menuModule.trackpadLink().click();
      expect(trackpadModule.sendTextInput().isPresent()).toBe(true);
    });
  });
});
