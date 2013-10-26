(function($){

	$(function() {
		
		window.app.BikesView = Backbone.View.extend({
  			el: $('#content'),
  			
  			initialize: function(){
      			_.bindAll(this, 'render');
      			this.render();
    		},
  			
  			render : function() {
				$(this.el).append("Bikes");
			}
		});


	});

})(jQuery);