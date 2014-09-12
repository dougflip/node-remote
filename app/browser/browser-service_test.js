describe('BrowserService', function(){
  var mocks = require('angular-mock');
  var nodeRemote = require('../node-remote');
  var sut, $httpBackend;

  beforeEach(mocks.module(nodeRemote.name));

  beforeEach(mocks.inject(function(_$httpBackend_, browserService){
    sut = browserService;
    $httpBackend = _$httpBackend_;
  }));

  describe('when calling launch', function(){
    it('should POST to the correct API endpoint', function(){
      $httpBackend.expectPOST('/api/browser/launch', { url: 'url', flags: undefined }).respond(200);
      sut.launch('url');
      $httpBackend.flush();
    });
  });

  describe('when calling closeTab', function(){
    it('should POST to the correct API endpoint', function(){
      $httpBackend.expectPOST('/api/browser/close-tab').respond(200);
      sut.closeTab();
      $httpBackend.flush();
    });
  });

  describe('when calling nextTab', function(){
    it('should POST to the correct API endpoint', function(){
      $httpBackend.expectPOST('/api/browser/next-tab').respond(200);
      sut.nextTab();
      $httpBackend.flush();
    });
  });

  describe('when calling zoomIn', function(){
    it('should POST to the correct API endpoint', function(){
      $httpBackend.expectPOST('/api/browser/zoom-in').respond(200);
      sut.zoomIn();
      $httpBackend.flush();
    });
  });

  describe('when calling zoomOut', function(){
    it('should POST to the correct API endpoint', function(){
      $httpBackend.expectPOST('/api/browser/zoom-out').respond(200);
      sut.zoomOut();
      $httpBackend.flush();
    });
  });

  describe('when calling actualSize', function(){
    it('should POST to the correct API endpoint', function(){
      $httpBackend.expectPOST('/api/browser/actual-size').respond(200);
      sut.actualSize();
      $httpBackend.flush();
    });
  });
});
