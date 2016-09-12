class NodeRemoteApp {

  constructor(nodeRemoteCoreApi) {
    this.nodeRemoteCoreApi = nodeRemoteCoreApi;

    this.isLoading = true;
    nodeRemoteCoreApi.getVolume()
      .then(this.initData.bind(this))
      .finally(() => this.isLoading = false);
  }

  $onInit() {
    this.isMenuOpen = false;
    this.textToSend = '';
  }

  initData({ volume }) {
    this.systemVolume = volume;
  }

  openMainMenu() {
    this.isMenuOpen = true;
  }

  closeMainMenu() {
    this.isMenuOpen = false;
  }

  onVolumeLevelChange({ level }) {
    this.nodeRemoteCoreApi.setVolume(level);
  }

  moveMouse(evt) {
    this.nodeRemoteCoreApi.moveMouse(evt);
  }

  scrollUp(evt) {
    this.nodeRemoteCoreApi.scrollUp();
  }

  scrollDown(evt) {
    this.nodeRemoteCoreApi.scrollDown();
  }

  leftClick() {
    this.nodeRemoteCoreApi.leftClick();
  }

  rightClick() {
    this.nodeRemoteCoreApi.rightClick();
  }

  doubleClick() {
    this.nodeRemoteCoreApi.doubleClick();
  }

  submitTextToSend() {
    this.nodeRemoteCoreApi.sendAndEnterText(this.textToSend);
    this.textToSend = '';
  }

  closeWindow() {
    this.nodeRemoteCoreApi.closeWindow();
  }

  suspend() {
    this.nodeRemoteCoreApi.suspend();
  }

}

export default {
  template: require('./app-component.html'),
  controller: NodeRemoteApp
}
