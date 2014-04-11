describe('DragCalculator', function(){
  var DragCalculator = require('./drag-calculator')();
  var sut, sampleTouch;

  beforeEach(function(){
    sut = new DragCalculator();
    sampleTouch = { clientX: 100, clientY: 300 };
  });

  describe('when constructing', function(){
    it('should default to null previous coordinates', function(){
      expect(sut.previous).toEqual({ x: null, y: null });
    });
  });

  describe('when setting previous coordinates', function(){
    it('should update instance variables', function(){
      sut.setPrevious(sampleTouch);
      expect(sut.previous).toEqual({ x: 100, y: 300 });
    });
  });

  describe('when calculating drag', function(){
    it('should update previous coordinates', function(){
      sut.calculateDrag(sampleTouch);
      expect(sut.previous).toEqual({ x: 100, y: 300 });
    });

    it('should return a calculated delta of the drag', function(){
      sut.setPrevious(sampleTouch);
      result = sut.calculateDrag({ clientX: 105, clientY: 295 });
      expect(result).toEqual({ deltaX: 10, deltaY: -10 });
    });
  });
});
