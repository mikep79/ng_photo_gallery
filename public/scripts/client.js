var myApp = angular.module('myApp', []);

myApp.controller('PhotoController', function($http){
    var vm = this;
    vm.imgArray = [];

    // button click targets pic object and toggles view
    vm.toggle = function(imgObj){
        imgObj.view = !imgObj.view;
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