const angular = require('angular');

const passThroughMethods = ['closeTab', 'nextTab', 'zoomIn', 'zoomOut', 'actualSize'];

class BrowserController {
  constructor(ctrlHelper, browserService) {
    this.browserService = browserService;
    ctrlHelper.createPassThroughMethods(passThroughMethods, this, browserService);

    this.launchUrl = '';
  }

  launch() {
    this.browserService.launch(this.launchUrl);
    this.launchUrl = '';
  }
}

module.exports = ['controllerHelper', 'browserService', BrowserController];
