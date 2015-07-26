define(["angular","angular-modules"],function(angular,modules){

	modules.controllers.controller("loginCtrl",["$scope","$location",function($sc,$location){		

		$sc.range = function(n){
			return new Array(n);
		}

		$sc.login = function(){
			alert("login");
			$location.path("#/myApp/main");
		}

		$sc.signin = function(){
			alert("signin");
			$location.path("#/myApp/main");
		}		
	}]);
});