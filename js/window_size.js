let window_height = $(window).height();
let window_width = $(window).width();

$(document).ready( function () {
    $('body').css({
        '--window-height':(window_height + 'px'),
        '--window-width':(window_width + 'px'),
    });
    // $(window).resize( function () {
    //     window_height = $(window).width();
    //     window_width = $(window).height();
    //     $('body').css({
    //         '--window-height':(window_height + 'px'),
    //         '--window-width':(window_width + 'px'),
    //     });
    })
