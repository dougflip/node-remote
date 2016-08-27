class NodeRemoteApp {

  constructor($http, API_URL) {
    this.$http = $http;
    this.API_URL = API_URL;
  }

  $onInit() {
    this.isMenuOpen = false;
    this.textToSend = '';
  }

  openMainMenu() {
    this.isMenuOpen = true;
  }

  closeMainMenu() {
    this.isMenuOpen = false;
  }

  moveMouse({ x, y }) {
    this.$http({
      method: 'POST',
      url: `${this.API_URL}/mouse/move-relative`,
      data: { x, y }
    });
  }

  scrollUp(evt) {
    this.$http({ method: 'POST', url: `${this.API_URL}/mouse/scroll-up` });
  }

  scrollDown(evt) {
    this.$http({ method: 'POST', url: `${this.API_URL}/mouse/scroll-down` });
  }

  leftClick() {
    this.$http({
      method: 'POST',
      url: `${this.API_URL}/mouse/left-click`
    });
  }

  rightClick() {
    this.$http({
      method: 'POST',
      url: `${this.API_URL}/mouse/right-click`
    });
  }

  doubleClick() {
    this.$http({
      method: 'POST',
      url: `${this.API_URL}/mouse/double-click`
    });
  }

  submitTextToSend() {
    this.$http({
      method: 'POST',
      url: `${this.API_URL}/keyboard/send-text`,
      data: { text: this.textToSend }
    });
    this.textToSend = '';
  }

  closeWindow() {
    this.$http({
      method: 'POST',
      url: `${this.API_URL}/system/close-window`
    });
  }

  suspend() {
    this.$http({
      method: 'POST',
      url: `${this.API_URL}/system/suspend`
    });
  }

}

export default {
  template: require('./app-component.html'),
  controller: NodeRemoteApp
}
