function createTouchPad(){
  return {
    templateUrl: 'trackpad/touchpad.html',
    controller: ['trackpadService', TouchPadController],
    controllerAs: 'ctrl',
    bindToController: true,
    scope: true
  }
}

class TouchPadController {
  constructor(trackpadService) {
    this.trackpadService = trackpadService;

    this.previous = getPreviousFromTouch();
  }

  onTouchStart(evt) {
    this.previous = getPreviousFromTouch(evt.gesture.touches[0]);
  }

  onDrag(evt) {
    evt.gesture.preventDefault();

    const touch = evt.gesture.touches[0];
    this.trackpadService.moveRelative(
      (touch.clientX - this.previous.x) * 2,
      (touch.clientY - this.previous.y) * 2
    );

    this.previous = getPreviousFromTouch(touch);
  }
}

function getPreviousFromTouch(touch = { clientX: null, clienyY: null }){
  return  { x: touch.clientX, y: touch.clientY };
}

module.exports = [createTouchPad];
