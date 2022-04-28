$.fn.cambioColor = function (options) {
    var defaults = {
        color: '#FF0000'
    };
    var options = $.extend(defaults, options);
    return this.each(function () {
        $(this).css('color', options.color);
    });
};