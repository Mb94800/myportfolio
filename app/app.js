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


    $( ".hamburger" ).click(function() {
        $( ".contentleft__menu" ).slideToggle( "slow", function() {
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
        });
    });

    $( ".cross" ).click(function() {
        $( ".contentleft__menu" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });

    $(window).resize(function() {
        if($(window).width() < 700){



            $('.hamburger').show();
        }else{
            $('.contentleft__menu').show();
        }
    });

});

$( window ).resize(function() {
    if($(window).width < 700){
        alert("ok")
        $(".content__logoMB").css("display","none")
    }
});


app.controller('MainCtrl', function($scope) {

    $scope.menuItems = ['Home', 'Contact', 'About', 'Other'];
    $scope.activeMenu = $scope.menuItems[0];

    $scope.setActive = function(menuItem) {
        $scope.activeMenu = menuItem
    }
});




