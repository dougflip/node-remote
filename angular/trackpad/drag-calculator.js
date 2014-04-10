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
    deltaX: touch.clientX - this.previous.x,
    deltaY: touch.clientY - this.previous.y
  };
  this.setPrevious(touch);

  return result;
}

module.exports = function(){ return DragCalculator };
