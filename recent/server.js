/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name:  Jinning Zhang
 * Email: zhangji5@oregonstatet.edu
 */

var exphbs  = require('express-handlebars');
var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var data = require('./postData.json');
var MongoClient = require('mongodb').MongoClient;
/*added************************************/
var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB;

var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword +
  '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;

var mongoConnection = null;
/*added************************************/

app.engine('handlebars', exphbs({defaultLayout: __dirname + '/public/templates/layout',
partialsDir: __dirname + '/public/templates'
}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.status(200).render(__dirname + '/public/templates/post',{data:data});
});

app.get('/posts/:id(\\d+)/', function (req, res){
  var id;
  if(req.originalUrl.split("/").length>2){
    id = req.originalUrl.split("/")[2];
    if(id>-1 && id<8){
      res.status(200).render(__dirname + '/public/templates/newPost',data[id]);
    }else{
      res.status(404).render(__dirname + '/public/templates/404');
    }
  }else{
    res.status(404).render(__dirname + '/public/templates/404');
  }
});

//app.use(express.static();
app.use(express.static('public'));

app.get('*', function (req, res) {
  res.status(404).render(__dirname + '/public/templates/404');
});

/*added*********************************/
MongoClient.connect(mongoURL, function (err, connection) {
  if (err) {
    throw err;
  }
  mongoConnection = connection;
  app.listen(port, function () {
    console.log("== Server listening on port:", port);
  });
});
/*added*********************************/
