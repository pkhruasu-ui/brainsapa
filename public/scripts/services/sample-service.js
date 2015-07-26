define(["angular","angular-modules"],function(angular,modules){
	modules.services.service("sample-service",function(){
		return "hello";
	});
});