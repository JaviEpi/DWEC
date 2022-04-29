$.fn.cambioColor = function (options) {
    const defaults = {
        color: '#FF0000'
    };
    const options = $.extend(defaults, options);
    return this.each(function () {
        $(this).css('color', options.color);
    });
};