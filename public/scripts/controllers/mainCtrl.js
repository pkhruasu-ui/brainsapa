define(["angular","angular-modules"],function(angular,modules){

	modules.controllers.controller("mainCtrl",["$scope","boardInfoSVC","$location",function($sc,boardInfoSVC,$location){
		$sc.name = "some app";

		boardInfoSVC.getCategories().success(function(res){
			$sc.topics = res.categories;			
		}).error(function(error){
			console.log("wrong");
		});

		
		$sc.range = function(n){
			return new Array(n);
		}

		$sc.gotoCategory = function(categoryId){
			
			$location.path("/myApp/board/" + categoryId);
		}

	}]);
});