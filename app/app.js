'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);


$(function() {                       //run when the DOM is ready
    $(".menu li").click(function() {  //use a class, since your ID gets mangled
        $(".menu li").removeClass("tabmenu__active");
        $(this).addClass("tabmenu__active");      //add the class to the clicked element
    });
});

app.controller('MainCtrl', function($scope) {

    $scope.menuItems = ['Home', 'Contact', 'About', 'Other'];
    $scope.activeMenu = $scope.menuItems[0];

    $scope.setActive = function(menuItem) {
        $scope.activeMenu = menuItem
    }
});


