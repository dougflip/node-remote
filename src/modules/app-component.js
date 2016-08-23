class NodeRemoteApp {

  constructor($http, API_URL) {
    this.$http = $http;
    this.API_URL = API_URL;
  }

  $onInit() {
    this.isMenuOpen = false;
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

}

export default {
  template: require('./app-component.html'),
  controller: NodeRemoteApp
}
