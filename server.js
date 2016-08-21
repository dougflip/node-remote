var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(9000, function(){
  console.log('serving', path.join(__dirname, 'dist'), 'on port 9000');
});
