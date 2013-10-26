(function($){

	$(function() {
		
		window.app.HomeView = Backbone.View.extend({
  			el: $('#content'),
  			
  			initialize: function(){
      			_.bindAll(this, 'render');
      			$(this.el).html();
      			this.render();
    		},
  			
  			render : function() {
				$(this.el).append('<div id="home">');
				$(this.el).append('<p><a class="btn btn-primary btn-block">find bike</a></p>');
				$(this.el).append('<p><a class="btn btn-primary btn-block">my bikes</a></p>');
				$(this.el).append('<p><a class="btn btn-primary btn-block">profile</a></p>');
				$(this.el).append('</div>');
			}
		});


	});

})(jQuery);