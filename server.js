var express = require('express');
var request = require('request');
var path = require('path')
var app = express();

var rgxProxyPattern = /^\/api\//;
var apiHost = process.env.API_HOST || 'localhost';
var apiPort = process.env.API_PORT || 9001;

function apiProxy(host, port) {
  return function(req, res, next) {
    if(req.url.match(rgxProxyPattern)) {
      var url = 'http://' + apiHost + ':' + apiPort + req.url.replace('/api', '');
      req.pipe(request(url)).pipe(res);
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
