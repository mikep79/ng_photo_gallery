var router = require('express').Router();

var imgArray = [1,2,3];

router.get('/', function(req, res){
    res.send(imgArray);
});

module.exports = router;