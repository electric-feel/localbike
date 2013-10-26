(function($){

	$(function() {
		
		window.app.ProfileView = Backbone.View.extend({
  			el: $('#content'),
  			
  			initialize: function(){
      			_.bindAll(this, 'render');
      			this.render();
    		},
  			
  			render : function() {
				$(this.el).append("Profile");
			}
		});


	});

})(jQuery);