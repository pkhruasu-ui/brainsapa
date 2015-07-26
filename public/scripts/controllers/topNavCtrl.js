define(["angular","angular-modules"],function(angular,modules){

	modules.controllers.controller("topNavCtrl",["$scope","$location",function($sc,$location){		
		$sc.activeLink = "dashboard";
	}]);
});