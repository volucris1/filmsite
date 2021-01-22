let window_height = $(window).height();
let window_width = $(window).width();

$(document).ready( function () {
    function get_window_size() {
        window_height = $(window).width();
        window_width = $(window).height();

        $('body').css({
            '--window-height': (window_height + 'px'),
            '--window-width': (window_width + 'px'),
        });
    }

    get_window_size();

    $(window).resize(function () {
        get_window_size();
        console.log(window_width, window_height);
    })

})