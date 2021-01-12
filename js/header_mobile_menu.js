$(document).ready( function (){
    let checked = false; //меню скрыто по дефолту
    function open_mobile_menu() {
            $('.mobile-nav').css({ //мобильное меню выезжает
                'left':'0',
            })

            $('body').css({ //запрещаем скролл страницы
                'overflow':'hidden',
            })

            $('.mobile-nav-icon').css({ //переворачиваем иконку
                'transform':'rotate(90deg)',
            })

            checked = true; //статус мобильного меню - открыто
    }
    function close_mobile_menu() {
        $('.mobile-nav').css({//прячем мобильного меню
            'left':'-100%',
        })
        $('body').css('overflow','auto')//разрешаем скролл страницы

        $('.mobile-nav-icon').css({//иконку мобильного меню возвращаем в нормальное положение
            'transform':'rotate(0deg)',
        })
        checked = false; //статус мобильного меню сстановится - закрыто
    }

    $('.mobile-nav-icon').click( function () {
        if (checked === false) { //если меню скрыто, откроем его
            open_mobile_menu();
        } else {
            close_mobile_menu();
        }
    })
    $(window).resize( function () {//если
        close_mobile_menu();
    })

    $(document).mouseup(function (event){ // событие клика по веб-документу
        let div = $("header"); // тут указываем ID элемента
        if (!div.is(event.target) && div.has(event.target).length === 0) { // и не по его дочерним элементам
            close_mobile_menu();
        }
    });


    let touch_start = '';
    let touch_end = '';
    let touch_move = '';

    document.body.addEventListener('touchstart', function(event){
    touch_start = event.changedTouches[0].pageX;
    }, false)

    document.body.addEventListener('touchend', function (event) {
        touch_end = event.changedTouches[0].pageX;
        touch_move = touch_start - touch_end;
        if (touch_move >= 100 && touch_start > touch_end) {
            close_mobile_menu();
        } else if (touch_start < touch_end) {
            open_mobile_menu();
        }
    }, false)

})



