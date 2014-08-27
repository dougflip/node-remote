(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function BrowserController(browserService){
  this.browserService = browserService;
  this.launchUrl = null;
}

BrowserController.prototype.launch = function(){
  this.browserService.launch(this.launchUrl);
  this.launchUrl = null;
};

BrowserController.prototype.closeTab = function(){
  this.browserService.closeTab();
};

BrowserController.prototype.nextTab = function(){
  this.browserService.nextTab();
};

BrowserController.prototype.zoomIn = function(){
  this.browserService.zoomIn();
};

BrowserController.prototype.zoomOut = function(){
  this.browserService.zoomOut();
};

BrowserController.prototype.actualSize = function(){
  this.browserService.actualSize();
};

module.exports = ['browserService', BrowserController]

},{}],2:[function(require,module,exports){
function BrowserService($http){
  this.http = $http;
}

BrowserService.prototype.launch = function(url, flags){
  return this.http.post('/browser/launch', { url: url, flags: flags });
}

BrowserService.prototype.closeTab = function(){
  return this.http.post('/browser/close-tab');
}

BrowserService.prototype.nextTab = function(){
  return this.http.post('/browser/next-tab');
}

BrowserService.prototype.zoomIn = function(){
  return this.http.post('/browser/zoom-in');
}

BrowserService.prototype.zoomOut = function(){
  return this.http.post('/browser/zoom-out');
}

BrowserService.prototype.actualSize = function(){
  return this.http.post('/browser/actual-size');
}

module.exports = ['$http', BrowserService];

},{}],3:[function(require,module,exports){
var ng = (window.angular);

module.exports = ng.module('browser', [])
  .controller('browserCtrl', require('./browser-controller'))
  .service('browserService', require('./browser-service'));

},{"./browser-controller":1,"./browser-service":2}],4:[function(require,module,exports){
function HeaderController($rootScope, systemService){
  this.rootScope = $rootScope;
  this.systemService = systemService;
}

HeaderController.prototype.openMainMenu = function(){
  this.rootScope.$emit('menu:open');
};

HeaderController.prototype.mute = function(){
  this.systemService.mute();
};

module.exports = ['$rootScope', 'systemService', HeaderController];

},{}],5:[function(require,module,exports){
var ng = (window.angular);

module.exports = ng.module('header', [])
  .controller('headerCtrl', require('./header-controller'));

},{"./header-controller":4}],6:[function(require,module,exports){
var ng = (window.angular);

module.exports = ng.module('keyboard', [])
  .service('keyboardService', require('./keyboard-service'));

},{"./keyboard-service":7}],7:[function(require,module,exports){
function KeyboardService($http){
  this.http = $http;
}

KeyboardService.prototype.sendKeys = function(keys){
  return this.http.post('/keyboard/send-keys', { keys: keys });
};

KeyboardService.prototype.sendText = function(text){
  return this.http.post('/keyboard-send-text', { text: text });
};

module.exports = ['$http', KeyboardService];

},{}],8:[function(require,module,exports){
function ControllerHelper(){}

ControllerHelper.prototype.createPassThroughMethods = function(methods, ctrl, svc){
  methods.forEach(function(method){
    ctrl[method] = svc[method].bind(svc);
  });
};

module.exports = [ControllerHelper];

},{}],9:[function(require,module,exports){
var EventEmitter = require('events').EventEmitter;

function Events(){
  this.emitter = new EventEmitter();
}

Events.prototype.on = function(name, scope, cb){
  this.emitter.on(name, cb);
  var self = this;
  scope.$on('$destroy', function(){
    self.emitter.removeListener(name, cb);
  });
};

module.exports = function(){
  return Events;
};

},{"events":25}],10:[function(require,module,exports){
var ng = (window.angular);

module.exports = ng.module('lib', [])
  .factory('Events', require('./events.js'))
  .service('controllerHelper', require('./controller-helper'));

},{"./controller-helper":8,"./events.js":9}],11:[function(require,module,exports){
var ng = (window.angular);

module.exports = ng.module('menu', [])
  .controller('menuCtrl', require('./menu-controller.js'))
},{"./menu-controller.js":12}],12:[function(require,module,exports){
function MenuController($rootScope, $location){
  this.menuIsOpen = false;
  var self = this;
  $rootScope.$on('menu:open', function(){
    self.openMenu();
  });
  $rootScope.$on('$locationChangeSuccess', function(){
    self.setActiveItem($location.path());
  });
  this.setActiveItem($location.path())
}

MenuController.prototype.setActiveItem = function(item){
  this.activeItem = item;
}

MenuController.prototype.openMenu = function(){
  this.menuIsOpen = true;
};

MenuController.prototype.closeMenu = function(){
  this.menuIsOpen = false;
};

module.exports = ['$rootScope', '$location', MenuController];

},{}],13:[function(require,module,exports){
var ng = (window.angular);

module.exports = ng.module('netflix', [])
  .controller('netflixCtrl', require('./netflix-controller.js'))
  .service('netflixService', require('./netflix-service'));

},{"./netflix-controller.js":14,"./netflix-service":15}],14:[function(require,module,exports){
var angular = (window.angular);

var passThroughMethods = [
  'fullScreen', 'exitFullScreen', 'rewind', 'pause', 'play', 'fastForward',
  'frameBack', 'toggleKeyframeMode', 'frameForward', 'launchMedia'
];

function NetflixCtrl(netflixService){
  this.searchQuery = null;
  this.netflixService = netflixService;

  this.media = netflixService.media;
}

NetflixCtrl.prototype.search = function(query){
  this.netflixService.search(query);
  this.searchQuery = null;
};

function createNetflixCtrl(controllerHelper, netflixService){
  controllerHelper.createPassThroughMethods(passThroughMethods, NetflixCtrl.prototype, netflixService)

  return new NetflixCtrl(netflixService);
}

module.exports = ['controllerHelper', 'netflixService', createNetflixCtrl];

},{}],15:[function(require,module,exports){
function NetflixService($http){
  this.http = $http;

  // TODO: eventually load this from the server
  this.media = [
    { id: '70136120', imageUrl: 'http://cdn4.nflximg.net/webp/0604/3360604.webp' },
    { id: '70136141', imageUrl: 'http://cdn6.nflximg.net/webp/9386/869386.webp' },
    { id: '70136138', imageUrl: 'http://cdn3.nflximg.net/webp/0823/2110823.webp' },
  ];
}

NetflixService.prototype.search = function(query){
  return this.http.post('/netflix/search', { searchTerm: query });
};

NetflixService.prototype.launchMedia = function(id){
  return this.http.post('/netflix/launch-media-item', { mediaId: id });
};

NetflixService.prototype.togglePlayPause = function(){
  return this.http.post('/netflix/toggle-play-pause');
};

NetflixService.prototype.play = function(){
  return this.http.post('/netflix/play');
};

NetflixService.prototype.pause = function(){
  return this.http.post('/netflix/pause');
};

NetflixService.prototype.fullScreen = function(){
  return this.http.post('/netflix/full-screen');
};

NetflixService.prototype.exitFullScreen = function(){
  return this.http.post('/netflix/exit-full-screen');
};

NetflixService.prototype.rewind = function(){
  return this.http.post('/netflix/rewind');
};

NetflixService.prototype.fastForward = function(){
  return this.http.post('/netflix/fast-forward');
};

NetflixService.prototype.toggleKeyframeMode = function(){
  return this.http.post('/netflix/toggle-keyframe-mode');
};

NetflixService.prototype.frameBack = function(){
  return this.http.post('/netflix/frame-back');
};

NetflixService.prototype.frameForward = function(){
  return this.http.post('/netflix/frame-forward');
};

module.exports = ['$http', NetflixService];

},{}],16:[function(require,module,exports){
var ng = (window.angular);

var nodeRemote = ng.module('nodeRemote', [
  'ui.router',
  'hmTouchEvents',
  require('./browser').name,
  require('./header').name,
  require('./keyboard').name,
  require('./lib').name,
  require('./menu').name,
  require('./netflix').name,
  require('./system').name,
  require('./trackpad').name
]);

nodeRemote.config(
  require('./routing')
).config(function($httpProvider){
  $httpProvider.interceptors.push(function(){
    return {
      request: function(config){
        if(!/\.html$/i.test(config.url)){
          config.url = 'http://localhost:9001' + config.url;  
        }
        return config;
      }
    }
  })
});

module.exports = nodeRemote;

},{"./browser":3,"./header":5,"./keyboard":6,"./lib":10,"./menu":11,"./netflix":13,"./routing":17,"./system":18,"./trackpad":22}],17:[function(require,module,exports){
module.exports = function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/system");

  $stateProvider
    .state('browser', {
      url: '/browser',
      templateUrl: '/browser/browser.html',
      controller: 'browserCtrl as browserCtrl'
    })
    .state('netflix', {
      url: '/netflix',
      templateUrl: '/netflix/netflix.html',
      controller: 'netflixCtrl as netflixCtrl'
    })
    .state('system', {
      url: '/system',
      templateUrl: '/system/system.html',
      controller: 'systemCtrl as systemCtrl'
    })
    .state('trackpad', {
      url: '/trackpad',
      templateUrl: '/trackpad/trackpad.html',
      controller: 'trackpadCtrl as trackpadCtrl'
    });
};

},{}],18:[function(require,module,exports){
var ng = (window.angular);

module.exports = ng.module('system', [])
  .controller('systemCtrl', require('./system-controller.js'))
  .service('systemService', require('./system-service'));

},{"./system-controller.js":19,"./system-service":20}],19:[function(require,module,exports){
var ng = (window.angular);

function SystemCtrl($scope, systemService){
  this.systemService = systemService;
  this.volume = this.systemService.volume;

  this.systemService.onVolumeChange(
    $scope,
    ng.bind(this, this.onVolumeChange)
  );
}

SystemCtrl.prototype.onVolumeChange = function(evt){
  this.volume = evt.volume;
}

SystemCtrl.prototype.setVolume = function(level){
  this.systemService.setVolume(level);
};

SystemCtrl.prototype.closeWindow = function(){
  this.systemService.closeWindow();
};

SystemCtrl.prototype.suspend = function(){
  this.systemService.suspend();
};

module.exports = ['$scope', 'systemService', SystemCtrl];

},{}],20:[function(require,module,exports){
var ng           = (window.angular);

var EVT_VOLUME_CHANGE = 'system:volumeChange';

function SystemService($http, Events){
  this.volume = 50;
  this.http = $http;
  this.events = new Events();
}

SystemService.prototype.onVolumeChange = function(scope, cb){
  this.events.on(EVT_VOLUME_CHANGE, scope, cb);
};

SystemService.prototype.emitVolumeChange = function(){
  this.events.emitter.emit(EVT_VOLUME_CHANGE, { volume: this.volume });
};

SystemService.prototype.mute = function(){
  this.volume = 0;
  this.emitVolumeChange();
  return this.http.post('/system/mute');
};

SystemService.prototype.setVolume = function(level){
  level = parseNewLevel(level);
  if(level === null){
    return this.emitVolumeChange();
  }

  this.volume = level;
  this.emitVolumeChange();
  return this.http.post('/system/set-volume', { level: this.volume });
};

SystemService.prototype.closeWindow = function(){
  return this.http.post('/system/close-window');
};

SystemService.prototype.suspend = function(){
  return this.http.post('/system/suspend');
};

function parseNewLevel(level){
  level = parseInt(level);
  if(!ng.isNumber(level) || ng.equals(level, NaN)){
    return null;
  }

  if(level <= 0){
    return 0;
  }
  if(level >= 100){
    return 100;
  }

  return level;
}

module.exports = ['$http', 'Events', SystemService];

},{}],21:[function(require,module,exports){
function DragCalculator(){
  this.previous = {
    x: null,
    y: null 
  }
}

DragCalculator.prototype.setPrevious = function(touch){
  this.previous.x = touch.clientX;
  this.previous.y = touch.clientY;
}

DragCalculator.prototype.calculateDrag = function(touch){
  var result = {
    deltaX: (touch.clientX - this.previous.x) * 2,
    deltaY: (touch.clientY - this.previous.y) * 2
  };
  this.setPrevious(touch);

  return result;
}

module.exports = function(){ return DragCalculator };

},{}],22:[function(require,module,exports){
var ng = (window.angular);

module.exports = ng.module('trackpad', [])
  .controller('trackpadCtrl', require('./trackpad-controller'))
  .factory('DragCalculator', require('./drag-calculator'))
  .service('trackpadService', require('./trackpad-service'));

},{"./drag-calculator":21,"./trackpad-controller":23,"./trackpad-service":24}],23:[function(require,module,exports){
function TrackpadController(DragCalculator, trackpadService, keyboardService){
  this.dragCalculator = new DragCalculator();
  this.trackpadService = trackpadService;
  this.keyboardService = keyboardService;

  this.text = null;
}

TrackpadController.prototype.sendText = function(text){
  this.keyboardService.sendText(text);
  this.text = null;
};

TrackpadController.prototype.onTrackTouchStart = function(evt){
  this.dragCalculator.setPrevious(evt.gesture.touches[0]);
};

TrackpadController.prototype.onTrackDrag = function(evt){
  evt.gesture.preventDefault();

  var position = this.dragCalculator.calculateDrag(evt.gesture.touches[0]);
  this.trackpadService.moveRelative(position.deltaX, position.deltaY);
};

TrackpadController.prototype.leftClick = function(){
  return this.trackpadService.leftClick();
};

TrackpadController.prototype.rightClick = function(){
  return this.trackpadService.rightClick();
};

TrackpadController.prototype.doubleClick = function(){
  return this.trackpadService.doubleClick();
};

module.exports = ['DragCalculator', 'trackpadService', 'keyboardService', TrackpadController];

},{}],24:[function(require,module,exports){
function TrackpadService($http){
  this.http = $http;
}

TrackpadService.prototype.moveRelative = function(x, y){
  return this.http.post('/mouse/move-relative', { x: x, y: y });
};

TrackpadService.prototype.leftClick = function(){
  return this.http.post('/mouse/left-click');
};

TrackpadService.prototype.rightClick = function(){
  return this.http.post('/mouse/right-click');
};

TrackpadService.prototype.doubleClick = function(){
  return this.http.post('/mouse/double-click');
};

module.exports = ['$http', TrackpadService];

},{}],25:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        throw TypeError('Uncaught, unspecified "error" event.');
      }
      return false;
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      console.trace();
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}]},{},[16])