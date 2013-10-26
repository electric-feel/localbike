(function($){

	$(function() {
	
		Backbone.sync = function(method, model, success, error){
    		success();
  		}
		
		window.app.AppRouter = Backbone.Router.extend({

  			routes: {
  			    "":     "standard",
      			"help": "help",
      			"list": "list"
      		},
      		
      		standard: function () {
      			
      		},
  
  			list: function () {
  				var listView = new app.ListView();
  			},

			help: function() {
				var helpView = new app.HelpView();
  			}

		});


    	// Initiate the router
		var app_router = new app.AppRouter;
		Backbone.history.start();
	});

})(jQuery);