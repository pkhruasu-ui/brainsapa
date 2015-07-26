define(["angular","angular-modules"],function(angular,modules){
	modules.services.service("boardInfoSVC",["$http",function($http){
		return {
			getCategories : function(){
				var data = {
					method : "GET",
					url : "../../data/boardCategories.json"
				}

				return $http(data);
			},
			getTopics : function(categoryId){
				var data = {
					method : "GET",
					url : "../../data/pantipboard.json"
				}
				return $http(data);
			}
		}
	}]);
});