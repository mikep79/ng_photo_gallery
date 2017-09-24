var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5111;
var index = require('./routes/index.js');
var pics = require('./routes/pics.js');

app.listen(port, function(){
    console.log('listening on port: ', port);
});

//middleware
app.use(express.static('public'));

//routes
app.use('/', index);
app.use('/pics', pics);