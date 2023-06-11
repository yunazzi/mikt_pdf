$(function(){
    var wrapheight = $('#header').height();
    // var gnbTop = $('.header_wrap').offset().top+wrapheight;
    
    // function fixGnb(){
    //     if($(window).scrollTop()>=gnbTop){
    //         $('.header_wrap').addClass('addfix');
    //     }else{
    //         $('.header_wrap').removeClass('addfix');
    //     }
    // }
    //main motion
    autoPlay();
    function slideList(){
        $('.right_btn').trigger('click');
    }
    function stopPlay(){
        clearInterval(x);
    }
    function autoPlay(){
        x = setInterval(slideList,2000);
    }
    //ul이 움직이게
    $(".right_btn").click(function(){
        $(".main_motionMain").animate({'marginTop':'-98px'}, function(){
            $(".main_motionMain li:first").appendTo(".main_motionMain");
            $(".main_motionMain").css({marginTop:0});
        });
        return false;
    });

    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        console.log(scroll);

        // fixGnb();
        if(scroll>700){
            $('.goTop').fadeIn();
        }
        if(scroll>0 && scroll<700){
            $('.goTop').fadeOut();
        }
/*auto_scroll*/
        if(scroll<1900 && scroll<2500){
            $('#pearl_main').stop().animate({'top':'-1845px'},12000,function(){
                $('#pearl_main').stop().animate({'top':'0'},5000)
            });
        }
        //tian hao
        if(scroll<5400 && scroll<5700){
            $('#tianhao_main').stop().animate({'top':'-676px'},9000,function(){
                $('#tianhao_main').stop().animate({'top':'0'},5000)
            });
        }
        //hana
        if(scroll<6900 && scroll<7200){
            $('#hana_main').stop().animate({'top':'-1134px'},9000,function(){
                $('#hana_main').stop().animate({'top':'0'},5000)
            });
        }

    });
    $('.goTop').click(function(){
        $('html,body').stop().animate({'scrollTop':0},1500);
    });

    //section2

    //section > coding point color
    $('#tipping_korea_coding .cp_line').addClass('lineyellow');
    $('#tipping_korea_coding .coding_point').addClass('yellow');

    $("#mikt_coding .cp_line").addClass("linered");
    $("#mikt_coding .coding_point").addClass("red");

    $("#exhibition_coding .cp_line").addClass("lineblue")
    $("#exhibition_coding .coding_point").addClass("blue")

    $('#hana_coding .cp_line').addClass('linepink');
    $('#hana_coding .coding_point').addClass('pink');

    $('#lush_coding .cp_line').addClass('linegreen');
    $('#lush_coding .coding_point').addClass('green');
    






    $('.nav_btn1').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        var target_pos = $(target).offset().top;
        $('html, body').stop().animate({'scrollTop':target_pos},1000);
    });
    $('.nav_btn2').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        var target_pos = $(target).offset().top-100;
        $('html, body').stop().animate({'scrollTop':target_pos},1000);
    });
    $('.nav_btn3').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        var target_pos = $(target).offset().top-100;
        $('html, body').stop().animate({'scrollTop':target_pos},1500);
    });
    $('.nav_btn4').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        var target_pos = $(target).offset().top-100;
        $('html, body').stop().animate({'scrollTop':target_pos},1500);
    });


    $('.fix_nav a').click(function(){
        $('.fix_nav a img').removeClass('on');
        $(this).children('img').addClass('on');
    });



    //우측 네비게이션
    // var menuHeight = document.querySelector("#menu").offsetHeight;
    // var location = document.querySelector("#move").offsetTop;
    // window.scrollTo({top:location-menuHeight,behavior:'smooth'});

    // $("#menu>li").click(function(e){
        
    // })
    $('.main_img').css({"left":"20%"})


    // $("#menu>li").click(function(e){
    //     $("#menu a").stop().animate({"opacity":"0"},300);
    //     $("#menu>li").removeClass("on");
        
    //     $(this).children("a").stop().animate({"opacity":"1"},0);
    //     $(this).addClass("on");

    //     e.preventDefault();
    //     var target =$(this).children("a").attr("href")
    //     var target_pos = $(target).offset().top;
    //     $("html,body").stop().animate({"scrollTop":target_pos},1000);
    // })

    var $menu = $("#menu li");
    var $contents = $("main").children();
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        $.each($contents, function (idx, item) {
            var $target = $contents.eq(idx),
            i = $target.index(),
            targetTop = $target.offset().top;
        if(targetTop <= scrollTop){
            $menu.removeClass("on");
            $menu.eq(idx).addClass("on");
        }
        if(!(0 <= scrollTop)){
            $menu.removeClass("on");
            // $menu.eq(idx).addClass("on")
        }
        })
    })
    $("#menu li a").on("click",function(){
        var anchorId = $(this).attr("data-anchor");
        scroll_to_that(anchorId);
    })


    // // nav
    //     var $menu = $('nav li');
    //     var $contents = $('main').children();
    //     $(window).scroll(function () {
    //         var scltop = $(window).scrollTop();
    //         $.each($contents, function (idx, item) {
    //         var $target = $contents.eq(idx),
    //             i = $target.index(),
    //             targetTop = $target.offset().top;
    //         if (targetTop <= scltop) {
    //             $menu.removeClass('on');
    //             $menu.eq(idx).addClass('on');
    //         }
    //         if (!(0 <= scltop)) {
    //             $menu.removeClass('on');
    //         }
    //         })
    //     });
    //     $('nav li a').on('click', function () {
    //         var anchorId = $(this).attr('data-anchor');
    //         scroll_to_that(anchorId);
    //     });
    // $("a.next").click(function)
    
    //마우스 스크롤다운표시
    $('.buttonPosition a').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        var target_pos = $(target).offset().top;
        $('html, body').stop().animate({'scrollTop':target_pos},1000);
    });



    // $("#menu .prepare").click(function(){
    //     alert("준비중인 페이지입니다!");
    // })

    $("#menu li").eq(4).click(function(){
        alert("준비중인 페이지입니다!");
    })


    //epilogue--호버시
    $(".e_mail").mouseenter(function(){
        $(".e_text").addClass("pop_text");
    })
    $(".e_mail").mouseleave(function(){
        $(".e_text").removeClass("pop_text");
    })

});