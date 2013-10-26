(function($){

	$(function() {
		
		window.app.HelpView = Backbone.View.extend({
  			el: $('body'),
  			
  			initialize: function(){
      			_.bindAll(this, 'render');
      			this.render();
    		},
  			
  			render : function() {
				$(this.el).append("HELP");
			}
		});


	});

})(jQuery);