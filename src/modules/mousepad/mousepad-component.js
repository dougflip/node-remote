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
}

export default {
  template: require('./mousepad-component.html'),
  controller: Mousepad,
  bindings: {
    onMove: '&',
    onLeftClick: '&',
    onDoubleClick: '&',
    onRightClick: '&'
  }
};
