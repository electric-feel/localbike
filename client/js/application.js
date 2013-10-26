(function($){

	$(function() {
	
		Backbone.sync = function(method, model, success, error){
    		success();
  		}
		
		window.app.AppRouter = Backbone.Router.extend({

  			routes: {
  			    "":     "home",
      			"profile": "profile",
      			"bikes": "bikes",
      			"find": "find"
      		},
      		
      		home: function () {
      			var view = new app.HomeView();
      		},
  
  			profile: function () {
  				var view = new app.ProfileView();
  			},

			bikes: function() {
				var view = new app.BikesView();
  			},
  			
  			find: function() {
				var view = new app.FindView();
  			}

		});
		
		window.app = window.app || { };
			
		var app_router = new app.AppRouter;
		Backbone.history.start();

	});

})(jQuery);