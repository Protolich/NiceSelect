(function($) {

	// replace 'pluginName' with the name of your plugin
    $.fn.niceSelect = function(options) {
		// plugin default options
        var defaults = {
        };

		// extends defaults with options provided
        if (options) {
			$.extend(defaults, options);
		}

		// iterate over matched elements
        return this.each(function() {
	
            $(this).css('opacity', '0').wrap('<div class="niceSelect"></div>').parent('.niceSelect').prepend('<span class="niceText"></span>');

			$(this).change(function(event) {
				$(this).parent('.niceSelect').children('span.niceText').text($(this).children('option:selected').text());
			}).change();
			
			$(this).focus(function(event) {
				$(this).parent('.niceSelect').addClass('focus');
			});
			
			$(this).blur(function(event) {
				$(this).parent('.niceSelect').removeClass('focus');
			});
        });

    };

	// public functions definition
	$.fn.niceSelect.functionName = function(foo) {
		return this;
	};

	// private functions definition
	function foobar() {}

})(jQuery);