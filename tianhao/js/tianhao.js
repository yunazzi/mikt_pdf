$(function(){
    //main banner beverage animate
    $('.Beverage1').fadeIn(1000,function(){
        $('.Beverage3').fadeIn(500,function(){
            $('.Beverage2').fadeIn(500);
        })
    })
    //submenu
    $('#gnb').mouseenter(function(){
        $('.sub_menu').animate({'opacity':'1'},1000);
    })
    //gnb
    $('#gnb>li').on('mouseenter',function(){
        $('#gnb>li>a').removeClass('on');
        $('.sub_menu').stop(true,true).slideDown();
        $(this).children('a').addClass('on');
    });
    $('#header').on('mouseleave',function(){
        $('.sub_menu').stop(true,true).slideUp();
        $(this).children('a').removeClass('on');
    });
    //go_top btn
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        console.log(scroll);
        if(scroll>400){
            $('.goTop_btn').fadeIn();
        }
        if(scroll>0 && scroll<400){
            $('.goTop_btn').fadeOut();
        }
    });
    $('.goTop_btn').click(function(){
        $('html, body').stop().animate({'scrollTop': 0},1500);
    });
});