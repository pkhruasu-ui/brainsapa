requirejs.config({
	baseUrl : "./scripts"	//paths/shim use this as starting point
	,packages : ["controllers","services","directives","filters"]	//folders contain solution's files, entry point is main.js in each folder
	,paths : {
		app : "app"
		//custom modules
		,"angular-modules" : "angular-modules"
		//lib
		,"angular" : "/bower_components/angular/angular"
		,"angular-animate" : "/bower_components/angular-animate/angular-animate"
		,"angular-resource" : "/bower_components/angular-resource/angular-resource"
		,"angular-route" : "/bower_components/angular-route/angular-route"
		,"angular-ui-router" : "/bower_components/angular-ui-router/angular-ui-router"
		,"angular-ui-bootstrap-tmpl" : "/bower_components/angular-bootstrap/ui-bootstrap-tpls.min"
		,"angular-ui-bootstrap" : "/bower_components/angular-bootstrap/dist/ui-bootstrap.min"
	},
	// priority : ['angular'],
	shim : {	//set a load train...choo choo
		angular : {	exports : 'angular'}
		,"angular-animate" : {	deps : ["angular"], exports : "angular-animate"}
		,"angular-resource" : {	deps : ["angular"], exports : "angular-resource"}
		,"angular-route" : {	deps : ["angular"], exports : "angular-route"}
		,"angular-ui-route" : {	deps : ["angular"], exports : "angular-ui-route"}		
		,bootstrap : {
			deps : ['angular-modules','app']
		}
		,"angular-ui-bootstrap-tmpl" : { deps: ["angular"], exports : "angular-ui-bootstrap-tmpl"}
	}
});