ddescribe('BrowserController', () => {
  var mocks = require('angular-mock');
  var nullMock = require('../test-utils/null-mock');

  var sut;
  var mocks;

  beforeEach(mocks.module(require('../node-remote').name));

  beforeEach(mocks.module($provide => {
    mocks = {
      browserService: nullMock(require('./browser-service'))
    };

    $provide.value('browserService', mocks.browserService);
  }));

  beforeEach(mocks.inject(function($controller){
    sut = $controller('browserCtrl');
  }));

  describe('construction', () => {

    it('should initialize the launchUrl', () => {
      expect(sut.launchUrl).toBe('');
    })

  });

  describe('launch', () => {

    beforeEach(() => {
      sut.launchUrl = 'www.google.com';
    })

    it('should pass the launchUrl to the service', () => {
      sut.launch();
      expect(mocks.browserService.launch).toHaveBeenCalledWith('www.google.com');
    });

    it('should clear the launch url', () => {
      sut.launch();
      expect(sut.launchUrl).toBe('');
    });

  });

});
