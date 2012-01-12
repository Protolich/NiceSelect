(function ($) {

    // replace 'pluginName' with the name of your plugin
    $.fn.niceSelect = function (options) {
        // plugin default options
        var defaults = {
    };

    // extends defaults with options provided
    if (options) {
        $.extend(defaults, options);
    }

    // iterate over matched elements
    return this.each(function () {
        var $this = $(this);
        // Wraps the element in a div which can be styled to look like the select element
        $this.addClass('niceSelectActive').css('opacity', '0').wrap('<div class="niceSelect"></div>').parent('.niceSelect').prepend('<span class="niceText"></span>');
        var $wrapper = $this.parent('.niceSelect');
        var $text = $('.niceText', $wrapper);

        // Changes the text in the fake select element to reflect the changes to the real select element
        $this.change(function (event) {
            var selectText = $('option:selected', $this).text();
            $text.text(selectText);
        });

        var selectText = $('option:selected', $this).text();
        $text.text(selectText);

        // Adds focus class to wrapper when the select is focused
        $this.focus(function (event) {
            $this.parent('.niceSelect').addClass('focus');
        });

        // Removes focus class on blur
        $this.blur(function (event) {
            $this.parent('.niceSelect').removeClass('focus');
        });
    });

};
})(jQuery);