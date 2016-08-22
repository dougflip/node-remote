/**
* Outputs drag movement in the form of { deltaX, deltaY }
* This is designed to be used to send as relative mouse movement.
*/
class Mousepad {
  constructor() {}

  onDrag(evt) {
    const deltaX = evt.velocityX * 10;
    const deltaY = evt.velocityY * 10;
    this.onMove({ evt, deltaX, deltaY });
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
