var express = require('express');
var request = require('request');
var path = require('path');
var domain = require('domain');
var app = express();

var rgxProxyPattern = /^\/api\//;
var apiHost = process.env.API_HOST || 'localhost';
var apiPort = process.env.API_PORT || 9001;

function apiProxy(host, port) {
  return function(req, res, next) {
    if(req.url.match(rgxProxyPattern)) {
      var url = 'http://' + host + ':' + port + req.url.replace('/api', '');
      var d = domain.create();
      d.on('error', function(){
        res.status('500').end();
      });
      d.run(function(){
        req.pipe(request(url)).pipe(res);
      });
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
