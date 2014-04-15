describe('Running NodeRemote', function(){
  var testHelper = require('./test-helper');
  var systemPage, headerModule, menuModule, browserModule, netflixModule, trackpadModule;

  beforeEach(function(){
    testHelper.getIndex();
    systemPage = new testHelper.SystemModule();
    headerModule = new testHelper.HeaderModule();
    menuModule = new testHelper.MenuModule();
    browserModule = new testHelper.BrowserModule();
    netflixModule = new testHelper.NetflixModule();
    trackpadModule = new testHelper.TrackpadModule();
  });

  describe('setting volume up and down', function(){
    it('should reflect changes in the UI', function(){
      expect(systemPage.volumeInput().getAttribute('value')).toEqual('50');

      systemPage.volumeUpBtn().click();
      expect(systemPage.volumeInput().getAttribute('value')).toEqual('60');

      systemPage.volumeDownBtn().click();
      expect(systemPage.volumeInput().getAttribute('value')).toEqual('50');
    });
  });

  describe('muting the volume', function(){
    it('should update the system view', function(){
      expect(systemPage.volumeInput().getAttribute('value')).toEqual('50');

      headerModule.muteButton().click();
      expect(systemPage.volumeInput().getAttribute('value')).toEqual('0');
    });
  });

  describe('navigating to other pages', function(){
    it('should navigate to the browser module', function(){
      headerModule.mainMenuButton().click();
      menuModule.browserLink().click();
      expect(menuModule.browserLink().getAttribute('class')).toMatch('active');
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
