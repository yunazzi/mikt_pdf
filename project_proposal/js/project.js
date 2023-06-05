$(function(){
    //goTop
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        console.log(scroll);
        if(scroll>400){
            $('.goTop').fadeIn();
        };
        if(scroll>0 && scroll<400){
            $('.goTop').fadeOut();
        };
    });
    $('.goTop').click(function(){
        $('html, body').stop().animate({'scrollTop': 0},1500);
    });
})