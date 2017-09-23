var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5111;
var index = require('./routes/index.js');

app.listen(port, function(){
    console.log('listening on port: ', port);
});

//middleware
app.use(express.static('public'));

//routes
app.use('/', index);