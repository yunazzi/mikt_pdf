$(function(){
    //햄버거바
    
    // $('.nav').hide();
    $('.nav_menu .hamburbars').on('click',function(){
        // $(this).toggleClass('on');
        // $('.nav_menu').toggleClass('on');
        // $('.nav_menu').toggleClass('emphasized');
        // $('nav').show();
        $(this).toggleClass('on');
        // $('.nav_menu').toggleClass('on');
        $('.nav').toggleClass('on');

    });

    // $('.nav_menu .hamburbars').on('click',function(){
    //     $(this).toggleClass('on');
    //     $('.nav_menu').toggleClass('on');
    //     $('.nav_menu').toggleClass('emphasized');
    // });
    
    // //이미지크기조절
    // $("#post_content img, .resizablebox").each(function() {
    //     var oImgWidth = $(this).width();
    //     var oImgHeight = $(this).height();
    //     $(this).css({
    //         'max-width':oImgWidth+'px',
    //         'max-height':oImgHeight+'px',
    //         'width':'100%',
    //         'height':'100%'
    //     });
    // });


    

    //goTop
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        console.log(scroll);
        if(scroll>1100){
            $('.goTop').fadeIn();
            // $('.goTop').css({'opacity':'1'},20000000);
        };
        if(scroll>0 && scroll<1100){
            $('.goTop').fadeOut();
            // $('.goTop').css({'opacity':'0'},20000000);
        };
    });
    $('.goTop').click(function(){
        $('html, body').stop().animate({'scrollTop': 0},1500);
    });
    
    //스크롤다운시 햄버거바 사라짐
    var scrollsize = $('.nav_menu').height();
    $(window).scroll(function(){  // 윈도우 스크롤 기능 작동
        var hamburx = $(this).scrollTop() >= scrollsize; 
        if(hamburx){
            $('.nav_menu .hamburbars').css('display','none');
        }
        else{
            $('.nav_menu .hamburbars').css('display','block');
        }
    });
});