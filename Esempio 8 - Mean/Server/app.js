var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;

var express = require('express');
var app = express();

app.use(express.bodyParser());

/**
 * CORS support.
 */

app.all('*', function(req, res, next){
  if (!req.get('Origin')) return next();
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  // res.set('Access-Control-Allow-Max-Age', 3600);
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});


app.get('/restaurants', function(req, res){
    
    console.log('getall');
    
    mongoClient.connect('mongodb://localhost:27017/angAdvisor', function(err, db) {
    
        db.collection('restaurants').find().toArray(function(err, docs) {
            if(err) throw err;
            
            res.send(docs);
            
            db.close();
        });
    });
});

app.get('/restaurants/:id', function(req, res){
    
    console.log('get by id: ' + req.params.id);
    
    mongoClient.connect('mongodb://localhost:27017/angAdvisor', function(err, db) {
        
        var BSON = mongo.BSONPure;
        var o_id =new BSON.ObjectID(req.params.id);
        
        var query = {'_id':o_id};
        
        db.collection('restaurants').findOne(query, function(err, doc) {
            if(err) throw err;
            
            res.send(doc);
            
            db.close();
        });
    });
});

app.post('/restaurants', function(req, res){
        
    console.log('post: ' + JSON.stringify(req.body));    
    
    mongoClient.connect('mongodb://localhost:27017/angAdvisor', function(err, db) {
        
        db.collection('restaurants').insert(req.body, function(err, inserted) {    
            
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(inserted));
                res.send({'inserted':inserted});
            }
            
            db.close();
        });
    });
});

app.put('/restaurants/:id', function(req, res){
        
    console.log('put: ' + JSON.stringify(req.body));    
    
    mongoClient.connect('mongodb://localhost:27017/angAdvisor', function(err, db) {
    
        var BSON = mongo.BSONPure;
        var o_id =new BSON.ObjectID(req.params.id);
        
    var query = {'_id':o_id};
    var operator = {
                    '$set':
                    {
                        'name': req.body.name,
                        'address': req.body.address,
                        'city': req.body.city,
                        'postalCode': req.body.postalCode,
                        'state': req.body.state,
                        'province': req.body.province
                    }
    };
    
    db.collection('restaurants').update(query, operator, function(err, updated) {
        
        if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(updated));
                res.send({'updated':updated});
            }
        
            db.close();
        });
    });
});

app.delete('/restaurants/:id', function(req, res){
        
    console.log('delete: ' + JSON.stringify(req.body));    
    
    mongoClient.connect('mongodb://localhost:27017/angAdvisor', function(err, db) {
    if(err) throw err;
    
        var BSON = mongo.BSONPure;
        var o_id =new BSON.ObjectID(req.params.id);
        
    var query = {'_id':o_id};
    
    db.collection('restaurants').remove(query, function(err, deleted) {
        
        if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(deleted));
                res.send({'deleted':deleted});
            }
        
            db.close();
        });
    });
});

app.put('/restaurants/:id/addcomment', function(req, res){
        
    console.log('put comment: ' + JSON.stringify(req.body));    
    
    mongoClient.connect('mongodb://localhost:27017/angAdvisor', function(err, db) {
    
        var BSON = mongo.BSONPure;
        var o_id =new BSON.ObjectID(req.params.id);
        
    var query = {'_id':o_id};
    var operator = {
                    '$push':
                    {
                        'comments': req.body,
                    }
    };
    
    db.collection('restaurants').update(query, operator, function(err, updated) {
        
        if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(updated));
                res.send({'updated':updated});
            }
        
            db.close();
        });
    });
});


app.listen(3000);