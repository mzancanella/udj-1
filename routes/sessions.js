var mongo = require('mongodb');

var Server = mongo.Server,
	Db = mongo.Db,
	BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('sessiondb', server);

db.open(function(err, db) {
	if(!err) {
		console.log("Connected to 'sessiondb' database");
		db.collection('sessions', {strict:true}, function(err, colletion) {
			populateDB();
			if(err) {
				console.log("The 'sessions' collection doesn't exist. Creating it now...");
			}
		});
	}
});

exports.findById = function(req, res) {
	var id = req.params.id;
	console.log('Retrieving session: ' + id);
	db.collection('sessions', function(err, collection) {
		collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
			res.send(item);
		});
	});
};

exports.findAll = function(req, res) {
	console.log('retreiving all sessions');
	db.collection('sessions', function(err, collection) {
		collection.find().toArray(function(err, items) {
			res.send(items);
		});
	});
}

var populateDB = function() {
	db.collection('sessions', function(err, collection) {
		collection.remove();
	//	collection.insert(sessions, {safe:true}, function(err, result){});
	});
};
