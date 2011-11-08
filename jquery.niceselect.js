jQuery(document).ready(function($) {
    $('select.nice').css('opacity', '0').wrap('<div class="niceSelect"></div>').parent('.niceSelect').prepend('<span class="niceText"></span>');

    $('select.nice').change(function(event) {
        $(this).parent('.niceSelect').children('span.niceText').text($(this).children('option:selected').text());
    }).change();

    $('select.nice').focus(function(event) {
        $(this).parent('.niceSelect').addClass('focus');
    }).blur(function(event) {
        $(this).parent('.niceSelect').removeClass('focus');
    });;
});