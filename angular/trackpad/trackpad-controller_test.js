describe('TrackpadController', function(){
  var mocks = require('angular-mock');
  var sut, DragCalculatorMock, trackpadServiceMock, keyboardServiceMock, evtMock;

  beforeEach(mocks.module(require('../node-remote').name));

  beforeEach(mocks.module(function($provide){
    DragCalculatorMock = function(){
      this.setPrevious = new Function();
      this.calculateDrag = new Function();
    };
    trackpadServiceMock = {
      moveRelative: new Function(),
      leftClick: new Function(),
      doubleClick: new Function(),
      rightClick: new Function()
    };
    keyboardServiceMock = {
      sendText: new Function()
    };
    evtMock = {
      gesture: {
        preventDefault: new Function(),
        touches: [ { clientX: 100, clientY: 200 } ] }
    };

    $provide.value('DragCalculator', DragCalculatorMock);
    $provide.value('trackpadService', trackpadServiceMock);
    $provide.value('keyboardService', keyboardServiceMock);
  }));

  beforeEach(mocks.inject(function($controller){
    sut = $controller('trackpadCtrl');
  }));

  describe('when calling sendText', function(){
    it('should clear the text property', function(){
      sut.text = 'something';
      sut.sendText('something');
      expect(sut.text).toBeNull();
    });

    it('should call through to the keyboard service', function(){
      spyOn(keyboardServiceMock, 'sendText');
      sut.sendText('text!');
      expect(keyboardServiceMock.sendText).toHaveBeenCalledWith('text!');
    });
  });

  describe('when onTrackTouchStart fires', function(){
    it('should set the initial drag coordinates', function(){
      expect(true).toBe(true);
      spyOn(sut.dragCalculator, 'setPrevious');
      sut.onTrackTouchStart(evtMock);
      expect(sut.dragCalculator.setPrevious).toHaveBeenCalledWith({ clientX: 100, clientY: 200 });
    });
  });

  describe('when onTrackDrag fires', function(){
    var drag = { deltaX: 5, deltaY: -10 };
    beforeEach(function(){
      spyOn(sut.dragCalculator, 'calculateDrag').and.returnValue(drag);
    });

    it('should prevent the event default', function(){
      spyOn(evtMock.gesture, 'preventDefault');
      sut.onTrackDrag(evtMock);
      expect(evtMock.gesture.preventDefault).toHaveBeenCalled();
    });

    it('should calculate the drag and call through to the trackpad service', function(){
      spyOn(trackpadServiceMock, 'moveRelative');
      sut.onTrackDrag(evtMock);
      expect(trackpadServiceMock.moveRelative).toHaveBeenCalledWith(drag.deltaX, drag.deltaY);
    });
  });

  describe('when calling leftClick', function(){
    it('should call through to the trackpad service', function(){
      spyOn(trackpadServiceMock, 'leftClick');
      sut.leftClick();
      expect(trackpadServiceMock.leftClick).toHaveBeenCalled();
    });
  });

  describe('when calling rightClick', function(){
    it('should call through to the trackpad service', function(){
      spyOn(trackpadServiceMock, 'rightClick');
      sut.rightClick();
      expect(trackpadServiceMock.rightClick).toHaveBeenCalled();
    });
  });

  describe('when calling doubleClick', function(){
    it('should call through to the trackpad service', function(){
      spyOn(trackpadServiceMock, 'doubleClick');
      sut.doubleClick();
      expect(trackpadServiceMock.doubleClick).toHaveBeenCalled();
    });
  });
});
