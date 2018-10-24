$(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('#about_me').offset().top; // pixels to the top of div1
        var ht = $('#about_me').height(); // height of div1 in pixels
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if(scroll > os + ht){
            $('a[href="#second_middle"]').addClass('current');
            $('a[href="#about_me"]').removeClass('current');
        }else{
            $('a[href="#second_middle"]').removeClass('current');
            $('a[href="#about_me"]').addClass('current');
        }
    });
});
