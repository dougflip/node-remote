(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = angular;

},{}],2:[function(require,module,exports){
var ng = require('../angular');

module.exports = ng.module('menu', [])
  .controller('menuCtrl', require('./menu-controller.js'))
},{"../angular":1,"./menu-controller.js":3}],3:[function(require,module,exports){
module.exports = function(){
  
};

},{}],4:[function(require,module,exports){
var ng = require('./angular');

var nodeRemote = ng.module('nodeRemote', [
  'ui.router',
  require('./menu').name,
  require('./system').name
]);

nodeRemote.config(
  require('./routing')
)

},{"./angular":1,"./menu":2,"./routing":5,"./system":6}],5:[function(require,module,exports){
module.exports = function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/system");

  $stateProvider.state('system', {
    url: '/system',
    templateUrl: '/system/system.html',
    controller: 'systemCtrl as systemCtrl'
  });
};

},{}],6:[function(require,module,exports){
var ng = require('../angular');

module.exports = ng.module('system', [])
  .controller('systemCtrl', require('./system-controller.js'));

},{"../angular":1,"./system-controller.js":7}],7:[function(require,module,exports){
module.exports = function(){
  this.volume = 50;
};

},{}]},{},[4])