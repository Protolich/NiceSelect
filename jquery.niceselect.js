(function ($) {
	// replace 'pluginName' with the name of your plugin
	$.fn.niceSelect = function (options) {

		// plugin default options
		var defaults = {};

		// extends defaults with options provided
		if (options) {
			$.extend(defaults, options);
		}

		// iterate over matched elements
		return this.each(function () {
			var _this,
				_wrapper,
				_text,
				text;

			_this = $(this);
			// Wraps the element in a div which can be styled to look like the select element
			_this
				.addClass('niceselect-activated')
				.wrap('<div class="niceselect-wrapper"></div>')
				.parent('.niceselect-wrapper')
				.prepend('<span class="niceselect-text"></span>');

			_wrapper = _this.parent('.niceselect-wrapper');
			_text = $('.niceselect-text', _wrapper);

			// Changes the text in the fake select element to reflect the changes to the real select element
			_this.on('change', function (event) {
				text = _this.find('option:selected').text();
				_text.text(text);
			});

			text = _this.find('option:selected').text();
			_text.text(text);

			// Adds focus class to wrapper when the select is focused
			_this.on('focus', function (event) {
				_wrapper.addClass('focus');
			});

			// Removes focus class on blur
			_this.on('blur', function (event) {
				_wrapper.removeClass('focus');
			});
		});

	};
})(jQuery);