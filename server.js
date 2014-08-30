var express = require('express');
var httpProxy = require('http-proxy');
var path = require('path')
var app = express();

var rgxProxyPattern = /^\/api\//;
var apiHost = process.env.API_HOST || 'localhost';
var apiPort = process.env.API_PORT || 9001;

function apiProxy(host, port) {
  return function(req, res, next) {
    if(req.url.match(rgxProxyPattern)) {
      console.log('proxy', req.url, 'to', host);
      proxy.proxyRequest(req, res, {host: host, port: port});
    } else {
      next();
    }
  }
}

app.use(express.static(path.join(__dirname, 'app')));
app.use(apiProxy(apiHost, apiPort));

app.listen(9000, function(){
  console.log('serving', path.join(__dirname, 'app'), 'on port 9000 and proxying API calls to', apiHost, 'on port', apiPort);
});
