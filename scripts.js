$(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('#about_me').offset().top; // pixels to the top of div1
        var ht = $('#about_me').height(); // height of div1 in pixels
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if(scroll > os + ht){
            $('a[href="#previous_works"]').addClass('current');
            $('a[href="#about_me"]').removeClass('current');
        }else{
            $('a[href="#previous_works"]').removeClass('current');
            $('a[href="#about_me"]').addClass('current');
        }
    });
});

$("a[href*='#']").click(function() {
    var scrollDiv = $(this).attr('href');
    var os = $(scrollDiv).offset().top - 200;
    $('html, body').animate({scrollTop:os}, 'slow');
});  