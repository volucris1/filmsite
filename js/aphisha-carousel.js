
function change_height(height) {
    $('#aphisha').css('height', height+'px');
}

$('img').on('load', function () {
    let heigh_aphisha = $('.aphisha-item').height();
    change_height(heigh_aphisha+50);
    $(window).resize( function () {
        let heigh_aphisha = $('.aphisha-item').height();
        change_height(heigh_aphisha+50);
    })
})

$('#change-aphisha').click( function () {
    let toggle = 0;
    $('#aphisha').css('height', '100%');
})
