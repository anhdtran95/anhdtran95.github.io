$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var ab_me_os = $('#about_me').offset().top; // pixels to the top of div1
        var ab_me_ht = $('#about_me').height(); // height of div1 in pixels
        var ex_me_os = $('#experiences').offset().top; // pixels to the top of div1
        var ex_me_ht = $('#experiences').height(); // height of div1 in pixels
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if (scroll > ab_me_os + ab_me_ht) {
            // if scroll past first sect
            if (scroll > ex_me_os + ex_me_ht) {
                // if not scroll past last sec
                $('a[href="#experiences"]').removeClass('current');
                $('a[href="#related_links"]').addClass('current');
                $('a[href="#about_me"]').removeClass('current');
            } else {
                $('a[href="#experiences"]').addClass('current');
                $('a[href="#related_links"]').removeClass('current');
                $('a[href="#about_me"]').removeClass('current');
            }
        } else {
            $('a[href="#experiences"]').removeClass('current');
            $('a[href="#related_links"]').removeClass('current');
            $('a[href="#about_me"]').addClass('current');
        }
    });
});

$("a[href*='#']").click(function () {
    var scrollDiv = $(this).attr('href');
    var os = $(scrollDiv).offset().top - 200;
    $('html, body').animate({ scrollTop: os }, 'slow');
});  