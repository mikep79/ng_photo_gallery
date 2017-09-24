var myApp = angular.module('myApp', []);

myApp.controller('PhotoController', function($http){
    var vm = this;
    vm.imgArray = [];

    // image objects
    vm.pic1 = {
        desc: 'HIDDEN // here is pic 1',
        img: 'images/pic1.jpeg'
    };
    vm.pic2 = {
        desc: 'HIDDEN // here is pic 2',
        img: 'images/pic2.jpg'
    };
    vm.pic3 = {
        desc: 'HIDDEN // here is pic 3',
        img: 'images/pic3.jpg'
    };

    // get pics array function
    vm.getPics = function(){
        $http({
            method: 'GET',
            url: '/pics'
        }).then(function(res){
            console.log('Res from server: ', res.data);
            vm.imgArray = res.data;
        });
    }; // end get pics array function
    vm.getPics();
});