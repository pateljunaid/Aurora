// catch simple errors
"use strict";

// declare aurora-app namespace if it doesn't already exist
var aurora =  aurora || {};

//Define Collection
aurora.Movies = Backbone.Collection.extend({
	//identify collection's model
	
	model: aurora.Movie,
	
	//save movie models in localStorage
	//under "aurora" namespace
	localStorage: new Backbone.LocalStorage('aurora'),
});


