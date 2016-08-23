// catch simple errors
"use strict";

// declare aurora-app namespace if it doesn't already exist
var aurora =  aurora || {};

// note View-name (Header) matches name of template file Header.html
aurora.Header = Backbone.View.extend({
	
    // render the View
    	render: function () {
		// set the view element ($el) HTML content using its template
		this.$el.html(this.template());
		return this;    // support method chaining
    },

	//Adding the class active to buttons that are clicked and removing active from all active classes
	selectMenuItem: function(menuItem){
		$('.active').removeClass("active");
		$(menuItem).addClass("active");
}
});

