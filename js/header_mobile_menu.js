$(document).ready( function (){
    let checked = false; //меню скрыто по дефолту
    $('.mobile-nav-icon').click( function () {
        if (checked === false) {
            $('.mobile-nav').css({
                'top':'43px',

            })
            $('body').css({
                'overflow':'hidden',
                'z-index':'-1111111',
            })


            checked = true;
        } else {
            $('.mobile-nav').css({
                'top':'-100%',
            })
            $('body').css('overflow','auto')

            checked = false;
        }
    })
    $(window).resize( function () {
        $('.mobile-nav').css({
            'top':'-100%',
        })
        $('body').css('overflow','auto')
        checked = false;

    })
})



