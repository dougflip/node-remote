function createMousePad(){
  return {
    templateUrl: 'trackpad/mouse-pad.html',
    controller: ['trackpadService', MousePadController],
    controllerAs: 'ctrl',
    bindToController: true,
    scope: true
  }
}

class MousePadController {
  constructor(trackpadService) {
    this.trackpadService = trackpadService;
  }

  leftClick() {
    this.trackpadService.leftClick();
  }

  rightClick() {
    this.trackpadService.rightClick();
  }

  doubleClick() {
    this.trackpadService.doubleClick();
  }
}

module.exports = [createMousePad];
