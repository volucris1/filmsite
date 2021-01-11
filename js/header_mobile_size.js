function header_resize() {
        let header_width = $('header').width();
        if (header_width <= 630) {
            $('.header-nav-item').css({
                'display':'none',
            })
            $('.mobile-nav-icon').css({
                'display':'inline-block',
            })
        } else {
            $('.header-nav-item').css({
                'display':'inline',
            })
            $('.mobile-nav-icon').css({
                'display':'none',
            })
        }

        console.log(header_width)
}

$(document).ready( function () {
    let header_width = $('header').width();

    header_resize();

    $('header').resize( function () {
        header_resize();
        console.log(header_width);

    })

})
