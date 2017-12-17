$(function() {
    $(window).scroll(function() {
        $('.animation').each(function() {
            console.log($(this).offset().top - $(window).scrollTop());
            if (($(this).offset().top - $(window).scrollTop()) < window.innerHeight) {
                $(this).addClass('animation2');
            }
        });
    });
})