(function($){
  	// Model
  	window.app.Item = Backbone.Model.extend({
    	defaults: {
      		part1: 'hello',
      		part2: 'world'
    	}
  	});

  	window.app.List = Backbone.Collection.extend({
    	model: app.Item
  	});

})(jQuery);