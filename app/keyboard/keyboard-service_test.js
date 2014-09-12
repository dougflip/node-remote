describe('KeyboardService', function(){
  var mock = require('angular-mock');
  var sut, $httpBackend;

  beforeEach(mock.module(require('../node-remote').name));

  beforeEach(mock.inject(function(_$httpBackend_, keyboardService){
    sut = keyboardService;
    $httpBackend = _$httpBackend_;
  }));

  describe('when calling sendKeys', function(){
    it('should post to the correct API endpoint', function(){
      $httpBackend.expectPOST('/api/keyboard/send-keys', { keys: 'f' }).respond(200);
      sut.sendKeys('f');
      $httpBackend.flush();
    });
  });

  describe('when calling sendText', function(){
    it('should post to the correct API endpoint', function(){
      $httpBackend.expectPOST('/api/keyboard/send-text', { text: 'something!' }).respond(200);
      sut.sendText('something!');
      $httpBackend.flush();
    });
  });
});
