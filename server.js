var mongo = require('mongodb');

var express = require('express'),
    session = require('./routes/sessions');
    path = require('path');
    http = require('http');
	url = require('url');
	BSON = mongo.BSONPure;
 
var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser())
    app.use(express.static(path.join(__dirname, 'www')));
});
app.get('/', session.findAll);
//app.get('/sessions', session.findAll);
app.get('/session/:id', session.findById);
app.get('/session', function(req, res) {
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	console.log(query);
	console.log('Creating session: ' + query.name);
	db.collection('sessions', function(err, collection) {
		collection.insert({name : query.name}, function(err, item) {


			//			res.send(item);
			res.redirect('/sessions');
		});
	});
});
app.get('/sessions', session.findAll);

//app.listen(3000);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});

