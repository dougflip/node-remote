var ng = require('angular');

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
