var router = require('express').Router();
var imgArray = [
    {
        id: 0,
        desc: 'HIDDEN // here is pic 1',
        img: 'images/pic1.jpeg',
        likes: 0,
        comments: []
    },
    {
        id: 1,
        desc: 'HIDDEN // here is pic 2',
        img: 'images/pic2.jpg',
        likes: 0,
        comments: []
    },
    {
        id: 2,
        desc: 'HIDDEN // here is pic 3',
        img: 'images/pic3.jpg',
        likes: 0,
        comments: []
    },
    {
        id: 3,
        desc: 'Picture of Lily.',
        img: 'images/pic4.jpg',
        likes: 0,
        comments: []
    },
];

router.get('/', function(req, res){
    res.send(imgArray);
});

router.put('/', function(req, res){
    // grab img index
    var imgIndex = req.body.id;
    // increment likes of selected img
    imgArray[imgIndex].likes++;
    res.send(imgArray);
});

router.post('/', function (req, res){
    var newComment = req.body.text;
    var imgIndex = req.body.id;
    // add newComment to array
    imgArray[imgIndex].comments.push('"' + newComment + '"');
    res.send(imgArray);
});

module.exports = router;