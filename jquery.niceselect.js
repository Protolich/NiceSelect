(function ($) {
	"use strict";
	// replace 'pluginName' with the name of your plugin
	$.fn.niceSelect = function (options) {

		// plugin default options
		var defaults = {
			default: ''
		};

		// extends defaults with options provided
		if (options) {
			$.extend(defaults, options);
		}

		// iterate over matched elements
		return this.each(function () {
			var select = this,
				_this,
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

			// Set the label and any classes
			var niceselectUpdate = function () {
				if (select.value === defaults.default) {
					_wrapper.addClass('niceselect-default');
				} else {
					_wrapper.removeClass('niceselect-default');
				}
				text = _this.find('option:selected').text();
				_text.text(text);
			};

			// Changes the text in the fake select element to reflect the changes to the real select element
			_this.on('change', niceselectUpdate);

			// Set the initial text instead of triggering the change event
			niceselectUpdate();

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