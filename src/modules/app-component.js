class NodeRemoteApp {

  constructor($http) {
    this.$http = $http;
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
      url: 'http://10.0.0.17:9001/mouse/move-relative',
      data: { x, y }
    });
  }

  leftClick() {
    this.$http({
      method: 'POST',
      url: 'http://10.0.0.17:9001/mouse/left-click'
    });
  }

  rightClick() {
    this.$http({
      method: 'POST',
      url: 'http://10.0.0.17:9001/mouse/right-click'
    });
  }

  doubleClick() {
    this.$http({
      method: 'POST',
      url: 'http://10.0.0.17:9001/mouse/double-click'
    });
  }

}

export default {
  template: require('./app-component.html'),
  controller: NodeRemoteApp
}
