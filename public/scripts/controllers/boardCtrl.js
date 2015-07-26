define(["angular","angular-modules"],function(angular,modules){

	modules.controllers.controller("boardCtrl",["$scope","$location","$routeParams","boardInfoSVC",function($sc,$location,$routeParams,boardInfoSVC){		
		// console.log($routeParams);
		
		boardInfoSVC.getTopics($routeParams.id).success(function(res){						
			$sc.topics = res;
		}).error(function(error){
			console.log("wrong");
		});

		$sc.range = function(n){
			return new Array(n);
		}				
	}]);
});