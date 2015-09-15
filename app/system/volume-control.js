// This control is hard coded to talk directly to the systemService
// Obviously could be much more generic
//  to expose a "volume" property on the scope and it only manipulates that
// But this allows for simpler code right now for a simple use case
function volumeControlDirective(){
  return {
    restrict: 'E',
    templateUrl: 'system/volume-control.html',
    controller: ['systemService', VolumeControl],
    controllerAs: 'ctrl',
    bindToController: true
  }
}

class VolumeControl {
  constructor(systemService) {
    this.systemService = systemService;
  }

  volumeUp() {
    this.systemService.setVolume(this.systemService.volume + 10);
  }

  volumeDown() {
    this.systemService.setVolume(this.systemService.volume - 10);
  }
}

module.exports = [volumeControlDirective];
