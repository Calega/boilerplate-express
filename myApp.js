
var express = require('express');
var app = express();
var absolutePath = __dirname + '/views/index.html';
var staticAssets = __dirname + '/public';

// --> 7)  Mount the Logger middleware here
app.use(function(req,res,next) {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
})

// --> 11)  Mount the body-parser middleware  here

/** 1) Meet the node console. */
console.log('hello world');

/** 2) A first working Express Server */
// app.get('/', function(req, res) {
// 	res.send('Hello Express');
// });

/** 3) Serve an HTML file */
app.get('', function(req, res) {
	res.sendFile(absolutePath);
})

/** 4) Serve static assets  */
app.use('/',express.static(staticAssets));

/** 5) serve JSON on a specific route */
/** 6) Use the .env file to configure the app */
app.get('/json', function(req,res) {
  
  var m = {};
  
  m.message = process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json";
  
	res.json(m);
})
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !

/** 8) Chaining middleware. A Time server */
app.get('/now', function(req,res,next) {
  req.time = new Date().toString();
  next();
}, function(req,res) {
  
  var t = {
    "time" : req.time
  };
  
  res.json(t);
})

/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
// app.listen(process.env.PORT || 3000 );

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
