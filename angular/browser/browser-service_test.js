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
      $httpBackend.expectPOST('/browser/launch', { url: 'url', flags: undefined }).respond(200);
      sut.launch('url');
      $httpBackend.flush();
    });
  });

  describe('when calling closeTab', function(){
    it('should POST to the correct API endpoint', function(){
      $httpBackend.expectPOST('/browser/closeTab').respond(200);
      sut.closeTab();
      $httpBackend.flush();
    });
  });

  describe('when calling nextTab', function(){
    it('should POST to the correct API endpoint', function(){
      $httpBackend.expectPOST('/browser/nextTab').respond(200);
      sut.nextTab();
      $httpBackend.flush();
    });
  });

  describe('when calling zoomIn', function(){
    it('should POST to the correct API endpoint', function(){
      $httpBackend.expectPOST('/browser/zoomIn').respond(200);
      sut.zoomIn();
      $httpBackend.flush();
    });
  });

  describe('when calling zoomOut', function(){
    it('should POST to the correct API endpoint', function(){
      $httpBackend.expectPOST('/browser/zoomOut').respond(200);
      sut.zoomOut();
      $httpBackend.flush();
    });
  });

  describe('when calling actualSize', function(){
    it('should POST to the correct API endpoint', function(){
      $httpBackend.expectPOST('/browser/actualSize').respond(200);
      sut.actualSize();
      $httpBackend.flush();
    });
  });
});
