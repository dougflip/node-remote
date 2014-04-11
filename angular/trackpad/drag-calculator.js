function DragCalculator(){
  this.previous = {
    x: null,
    y: null 
  }
}

DragCalculator.prototype.setPrevious = function(touch){
  this.previous.x = touch.clientX;
  this.previous.y = touch.clientY;
}

DragCalculator.prototype.calculateDrag = function(touch){
  var result = {
    deltaX: (touch.clientX - this.previous.x) * 2,
    deltaY: (touch.clientY - this.previous.y) * 2
  };
  this.setPrevious(touch);

  return result;
}

module.exports = function(){ return DragCalculator };
