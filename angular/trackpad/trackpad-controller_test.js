describe('TrackpadController', function(){
  var mocks = require('angular-mock');
  var sut, DragCalculatorMock, trackpadServiceMock, evtMock;

  beforeEach(mocks.module(require('../node-remote').name));

  beforeEach(mocks.module(function($provide){
    DragCalculatorMock = function(){
      this.setPrevious = new Function();
      this.calculateDrag = new Function();
    };
    trackpadServiceMock = {
      moveRelative: new Function()
    }
    evtMock = {
      gesture: {
        preventDefault: new Function(),
        touches: [ { clientX: 100, clientY: 200 } ] }
    };

    $provide.value('DragCalculator', DragCalculatorMock);
    $provide.value('trackpadService', trackpadServiceMock);
  }));

  beforeEach(mocks.inject(function($controller){
    sut = $controller('trackpadCtrl');
  }));

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
});
