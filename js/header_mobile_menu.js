$(document).ready( function (){
    let checked = false; //меню скрыто по дефолту
    $('.mobile-nav-icon').click( function () {
        if (checked === false) {
            $('.mobile-nav').css({
                'top':'43px',
            })

            $('body').css({
                'overflow':'hidden',
            })

            $('.mobile-nav-icon').css({
                'transform':'rotate(90deg)',
            })

            checked = true;
        } else {
            $('.mobile-nav').css({
                'top':'-100%',
            })
            $('body').css('overflow','auto')

            $('.mobile-nav-icon').css({
                'transform':'rotate(0deg)',
            })
            checked = false;
        }
    })
    $(window).resize( function () {
        $('.mobile-nav').css({
            'top':'-100%',
        })
        $('body').css('overflow','auto')
        $('.mobile-nav-icon').css({
            'transform':'rotate(0deg)',
        })
        checked = false;
    })
    $(document).mouseup(function (event){ // событие клика по веб-документу
        let div = $("header"); // тут указываем ID элемента
        if (!div.is(event.target) && div.has(event.target).length === 0) { // и не по его дочерним элементам
            $('.mobile-nav').css({
                'top':'-100%',
            })
            $('body').css('overflow','auto')

            $('.mobile-nav-icon').css({
                'transform':'rotate(0deg)',
            })
            checked = false;
        }
    });
})



