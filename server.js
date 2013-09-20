var express = require('express'),
    testRoute = require('./routes/test');
 
var app = express();
  
app.get('/hello', testRoute.hello);
app.get('/goodbye', testRoute.goodbye);
 
app.listen(3000);
console.log('Listening on port 3000...');
