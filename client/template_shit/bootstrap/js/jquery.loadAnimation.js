/** 
 * jquery.loadAnimation 0.2
 * 
 * Copyright (c) 2009 Jan Faessler
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php 
 *
 * Launch  : April 2009
 * Version : 0.2
 */
(function($) { 	

	function callFunction(options, name, self)
	{
		var fn = options[name];
		if ($.isFunction(fn))
		{
			try
			{
				return fn.call(self);
			}
			catch (error)
			{
				if (options.eAlert)
					alert("Error calling loadAnimation." + name + ": " + error);
				else
					throw error;		
				
				return false;
			} 			
		}
		return true;			
	}
	
	// mask instance (singleton)
	var mask = null;	

	// animated elements
	var animated, conf = null;
	var origIndex = 0;
	
	// global methods
	$.loadAnimation = {		
		
		getVersion: function()
		{
			return [0, 2, 0];	
		},
		
		getMask: function()
		{
			return mask;	
		},
		
		getAnimated: function()
		{
			return animated;	
		},
		
		getConf: function()
		{
			return conf;	
		},		
		
		isStarted: function()
		{
			return mask && mask.is(":visible");	
		},
		
		start: function(target, options)
		{ 
			
			// already started ?
			if (this.isStarted()) return this;
               
			if (target) {
				animated = target;
				origIndex = animated.eq(0).css("zIndex");
				conf = options;					
			} else {
				target = animated;
				options = conf;
			} 

			if (!target || !target.length) return this;
			
			// setup mask if not already done
			if (!mask)
			{
				mask = $('<div id="'+options.maskId+'"></div>');
				if (options.image.src != '')
					img = $('<img id="'+options.maskId+'_loading_img" />')
							.attr('src',options.image.src)
							.attr('alt',options.image.alt);
			}
			
			// set mask css properties
			mask.css({				
				position: 'absolute', 
				top: target.offset().top, 
				left: target.offset().left,
				width: target.width(),
				height: target.height(),
				display: 'none',
				opacity: 0,					 		
				zIndex: options.zIndex,
				backgroundColor: options.color
			});
			
			// set image css properities			
			img.css({
				zIndex: options.zIndex+1,
				position: 'absolute',
				top: (target.height()/2-options.image.size.height/2),
				left: (target.width()/2-options.image.size.width/2)
			});
			
			// insert image into mask and append mask to body
			mask.html(img);
			$("body").append(mask);

			
			
			// onBeforeLoad
			if (callFunction(options, "onBeforeLoad", this) === false) return this;	
			
			// reveal mask
			if (!this.isStarted())
			{					
				mask.css({opacity: 0, display: 'block'}).fadeTo(options.loadSpeed, options.opacity, function()
				{
					callFunction(options, "onLoad", $.loadAnimation);  						
				});					
			}

			return this;
		}, 
		
		
		end: function()
		{
			
			var self = this;
			
			if (!this.isStarted()) { return self; }   
			
			if (callFunction(conf, "onBeforeClose", self) === false) return self;   
			
			
			mask.fadeOut(conf.closeSpeed, function()
			{          
				animated.css({zIndex: $.browser.msie ? origIndex : null});              
				callFunction(conf, "onClose", self);               
			});        
		}
		
	};
	
	// jQuery plugin initialization
	$.prototype.loadAnimation = function(conf)
	{

		// no elements to expose
		if (!this.length) return this;
		
		var options = {
			eAlert: true,  

			// mask settings
			maskId: 'exposeMask',
			loadSpeed: 'slow',
			closeSpeed: 'fast',
			
			// css settings
			zIndex: 998,
			opacity: 0.9,
			color: '#ccc',
			
			// image settings
			image: {
				src: '',
				alt: 'loading...',
				size: {
					width: 100,
					height: 10
				}
			}
		};
		
		// save critical options
		if (typeof conf == 'string') conf = {color: conf};
		if (typeof conf.image == 'string') conf.image = { src: conf.image, alt: options.image.alt, size: options.image.size };
		if (conf.image.alt == undefined) conf.image.alt = options.image.alt;
		if (conf.image.size == undefined) conf.image.size = options.image.size;
		if (conf.image.size.width == undefined) conf.image.size.width = options.image.size.width;
		if (conf.image.size.height == undefined) conf.image.size.height = options.image.size.height;
		
		
		// extend and overwrite standard options with user config
		$.extend(options, conf);
		
		// start animation	
		$.loadAnimation.start(this, options);
		
		// return jQuery object
		return this;
		
	};  


})(jQuery);