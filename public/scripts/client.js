var myApp = angular.module('myApp', []);

myApp.controller('PhotoController', function($http){
    var vm = this;
    //array holds all images from server
    vm.imgArray = [];

    // button click targets pic object and toggles view
    vm.toggle = function(imgObj){
        imgObj.view = !imgObj.view;
    };

    // put req to add likes to server imgs
    vm.like = function(imgId){
        $http({
            method: 'PUT',
            url: '/pics',
            data: {
                id: imgId
            }
        }).then(function(res){
            vm.imgArray = res.data;
        });
        vm.getPics();
    };

    // post req to add comment to img
    vm.postComment = function(imgId){
        var comment = prompt('Please add a comment for this photo.');
        // check for empty comment field
        if (comment === ''){
            return;
        } else {
            $http({
                method: 'POST',
                url: '/pics',
                data: {
                    text: comment,
                    id: imgId
                }
            }).then(function(res){
                console.log(res);
            });
            vm.getPics();
        }
    };

    vm.showComments = function(imgObj){
        imgObj.commentsView = !imgObj.commentsView;
    };

    // get pics array function
    vm.getPics = function(){
        $http({
            method: 'GET',
            url: '/pics'
        }).then(function(res){
            vm.imgArray = res.data;
            for (var i = 0; i < vm.imgArray.length; i++){
                if (vm.imgArray[i].likes === 0){
                    vm.imgArray[i].message = 'No likes yet.';
                } else {
                    var likes = vm.imgArray[i].likes;
                    vm.imgArray[i].message =  likes + ' people have liked this.';
                }
            }
        });
    };

    // get all pics on page load
    vm.getPics();
});