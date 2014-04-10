function TrackpadController(DragCalculator, trackpadService){
  this.dragCalculator = new DragCalculator();
  this.trackpadService = trackpadService;
}

TrackpadController.prototype.onTrackTouchStart = function(evt){
  this.dragCalculator.setPrevious(evt.gesture.touches[0]);
};

TrackpadController.prototype.onTrackDrag = function(evt){
  evt.gesture.preventDefault();

  var position = this.dragCalculator.calculateDrag(evt.gesture.touches[0]);
  this.trackpadService.moveRelative(position.deltaX, position.deltaY);
};

module.exports = ['DragCalculator', 'trackpadService', TrackpadController];
