describe('TrackpadService', function(){
  var mocks = require('angular-mock');
  var nodeRemote = require('../node-remote');
  var sut, $httpBackend;

  beforeEach(mocks.module(nodeRemote.name));

  beforeEach(mocks.inject(function(_$httpBackend_, trackpadService){
    sut = trackpadService;
    $httpBackend = _$httpBackend_;
  }));

  describe('when calling moveRelative', function(){

    it('should post to the correct API endpoint', function(){
      $httpBackend.expectPOST('/api/mouse/move-relative', { x: 5, y: 10 }).respond(200);
      sut.moveRelative(5, 10);
      $httpBackend.flush();
    });

  });

  describe('when calling leftClick', function(){

    it('should post to the correct API endpoint', function(){
      $httpBackend.expectPOST('/api/mouse/left-click').respond(200);
      sut.leftClick();
      $httpBackend.flush();
    });

  });

  describe('when calling rightClick', function(){

    it('should post to the correct API endpoint', function(){
      $httpBackend.expectPOST('/api/mouse/right-click').respond(200);
      sut.rightClick();
      $httpBackend.flush();
    });

  });

  describe('when calling doubleClick', function(){

    it('should post to the correct API endpoint', function(){
      $httpBackend.expectPOST('/api/mouse/double-click').respond(200);
      sut.doubleClick();
      $httpBackend.flush();
    });

  });
});
