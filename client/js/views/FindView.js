(function($){

	$(function() {
		
		window.app.FindView = Backbone.View.extend({
  			el: $('#content'),
  			
  			initialize: function(){
      			_.bindAll(this, 'render');
      			this.render();
    		},
  			
  			render : function() {
				$(this.el).append("Find");
			}
		});


	});

})(jQuery);