class NodeRemoteApp {

  constructor($http) {
    this.$http = $http;
  }

  moveMouse({ deltaX, deltaY }) {
    this.$http({
      method: 'POST',
      url: 'http://10.0.0.17:9001/mouse/move-relative',
      data: { x: deltaX, y: deltaY }
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
