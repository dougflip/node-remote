class SystemController {
  constructor(systemService) {
    this.systemService = systemService;
  }

  closeWindow() {
    this.systemService.closeWindow();
  }

  suspend(){
    this.systemService.suspend();
  }
}

module.exports = ['systemService', SystemController];
