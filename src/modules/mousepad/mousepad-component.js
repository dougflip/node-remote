/**
* Outputs drag movement in the form of { deltaX, deltaY }
* This is designed to be used to send as relative mouse movement.
*/
class Mousepad {
  constructor() {}

  onDrag(evt) {
    const x = evt.velocityX * 75;
    const y = evt.velocityY * 75;
    this.onMove({ $event: { evt, x, y } });
  }

  onPinchMove(evt) {
    return evt.overallVelocity <= 0
      ? this.onScrollUp({ $event: evt })
      : this.onScrollDown({ $event: evt });
  }
}

export default {
  template: require('./mousepad-component.html'),
  controller: Mousepad,
  bindings: {
    onMove: '&',
    onScrollUp: '&',
    onScrollDown: '&',
    onLeftClick: '&',
    onRightClick: '&'
  }
};
