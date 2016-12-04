requirejs.config({
	paths: {
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'
	},
	shin: {
		'jquery': {
			exports: 'jQuery'
		}
	}
	
});

require(
	[
		'Controller',
		'Model',
		'View',
		'jquery'
		
		
	],
	function(Controller, Model, View, jQuery) {
		$(function() {
			var data = ['learn JS', 'Do LabWorks & HW', 'Many Cups of coffe'];
			var model = new Model(data);
			var view = new View(model);
			var controller = new Controller(model, view);	
});
		
	}
	
	
	
);