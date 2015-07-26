define(["angular","angular-route","angular-resource","angular-animate","controllers", "filters","directives","services","angular-ui-bootstrap-tmpl"],
	function(angular){
	'use strict';	
	
	var myApp = angular.module("myApp",["ngRoute","ngAnimate","ngResource","controllers","directives","services","filters","ui.bootstrap"]);

	myApp.config(['$routeProvider','$locationProvider','$httpProvider',function($routeProvider,$locationProvider,$httpProvider){
		//turn html 5 hash off
		$locationProvider.html5Mode(false);

		//$httpProvider.interceptors.push('serviceName');

		$routeProvider
		.when('/myApp/main',{
			templateUrl : '../views/main.html',
			controller : 'mainCtrl'
		})
		.when('/myApp/login',{
			templateUrl : '../views/login.html',
			controller : 'loginCtrl'
		})
		.when('/myApp/board/:id',{
			templateUrl : '../views/board.html',
			controller : 'boardCtrl'
		})
		.otherwise({
			redirectTo : '/myApp/main'
		});
	}]);

	return myApp;
	// angular.bootstrap(document,["myApp"]);

	// window.myApp = myApp;
});