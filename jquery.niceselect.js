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
			
			// Wraps the element in a div which can be styled to look like the select element
            $(this).css('opacity', '0').wrap('<div class="niceSelect"></div>').parent('.niceSelect').prepend('<span class="niceText"></span>');
			
			// Changes the text in the fake select element to reflect the changes to the real select element
			$(this).change(function(event) {
				$(this).parent('.niceSelect').children('span.niceText').text($(this).children('option:selected').text());
			}).change();
			
			// Adds focus class to wrapper when the select is focused
			$(this).focus(function(event) {
				$(this).parent('.niceSelect').addClass('focus');
			});
			
			// Removes focus class on blur
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