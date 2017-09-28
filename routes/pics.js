var router = require('express').Router();
var imgArray = [
    {
        id: 0,
        desc: 'Christmas photo of me and my goofy girl :)',
        img: 'images/pic1.jpg',
        likes: 0,
        comments: []
    },
    {
        id: 1,
        desc: 'I LOVE playing games, and these kids give me quite a challenge...',
        img: 'images/pic2.jpg',
        likes: 0,
        comments: []
    },
    {
        id: 2,
        desc: 'Waterfall in an amazing yellowstone hike',
        img: 'images/pic3.jpg',
        likes: 0,
        comments: []
    },
    {
        id: 3,
        desc: 'My sweet niece Lily is always full of delight',
        img: 'images/pic4.jpg',
        likes: 0,
        comments: []
    },
    {
        id: 4,
        desc: 'Always been an animal lover - me and Lacie, age 7 or so.',
        img: 'images/pic5.jpg',
        likes: 0,
        comments: []
    },
    {
        id: 5,
        desc: 'Young elk that approached us on a nature walk in Colorado - a fav hobby of ours',
        img: 'images/testpic6.jpg',
        likes: 0,
        comments: []
    }
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