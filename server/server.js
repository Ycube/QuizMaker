var express = require('express');
var app = express();

var PORT = 4444;

app.use(express.static('public'));

app.set('port', PORT); 

app.listen(PORT, function () {
  console.log('Example app listening on port', PORT);
});

