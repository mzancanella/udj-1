var express = require('express'),
    testRoute = require('./routes/test');
    path = require('path');
    http = require('http');
 
var app = express();
app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'www')));
});

app.get("/#about", function(req, res) {
    console.log("About clicked");
});

app.get("/#", function(req, res) {
    console.log("home");
});

app.get("/hello", function(req, res) {
    console.log("hello");
});

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
