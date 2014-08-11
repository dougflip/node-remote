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
