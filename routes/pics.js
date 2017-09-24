var router = require('express').Router();

var pic1 = {
    desc: 'HIDDEN // here is pic 1',
    img: 'images/pic1.jpeg'
};
var pic2 = {
    desc: 'HIDDEN // here is pic 2',
    img: 'images/pic2.jpg'
};
var pic3 = {
    desc: 'HIDDEN // here is pic 3',
    img: 'images/pic3.jpg'
};

var imgArray = [pic1, pic2, pic3];

router.get('/', function(req, res){
    res.send(imgArray);
});

module.exports = router;