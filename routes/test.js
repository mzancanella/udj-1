var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('udjDB', server);
 
db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'udjDB' database");
    }
});