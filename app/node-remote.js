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
  require('./trackpad').name,
  require('./you-tube').name
]);

nodeRemote.config(
  require('./routing')
).config(function($httpProvider){
  $httpProvider.interceptors.push(function(){
    return { request: rewriteApiUrls }
  });
});

function rewriteApiUrls(config){
  if(!/\.html$/i.test(config.url)){
    config.url = (process.env.API_URL || 'localhost:9000') + config.url;
  }
  return config;
}

module.exports = nodeRemote;
