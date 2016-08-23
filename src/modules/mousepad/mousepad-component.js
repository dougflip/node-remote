/**
* Outputs drag movement in the form of { deltaX, deltaY }
* This is designed to be used to send as relative mouse movement.
*/
class Mousepad {
  constructor() {}

  onDrag(evt) {
    const deltaX = evt.velocityX * 50;
    const deltaY = evt.velocityY * 50;
    this.onMove({ mouseInfo: { evt, deltaX, deltaY } });
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
