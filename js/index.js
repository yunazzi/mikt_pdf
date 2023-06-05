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

    $('#section10 .cp_line').addClass('linepink');
    $('#section10 .coding_point').addClass('pink');

    $('#section12 .cp_line').addClass('linegreen');
    $('#section12 .coding_point').addClass('green');
    






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

    //wave

    // var cnt=document.getElementById("count"); 
    // var water=document.getElementById("water");
    // var percent=cnt.innerText;
    // var interval;
    // interval=setInterval(function(){ 
    //   percent++; 
    //   water.style.transform='translate(0'+','+(100-percent)+'%)';
    //   if(percent==100){
    //     clearInterval(interval);
    //   }
    // },60);
 



    //이미지화면 가운데->왼쪽으로 정렬

    // $(window).on("scroll", onScroll);

    // function onScroll(){
    //     var scrollHeight=$(document).scrollTop()
        
    //     if(scrollHeight>=50){
    //         $('.main_img').addClass("trans")
    //     }
    // }

    $('.main_img').css({"left":"20%"})
    

    //우측 네비게이션
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



    // text curved
    // $.fn.circleType = function(options) {

    //     var settings = {
    //         dir: 1,
    //         position: 'relative'
    //     };
    //     if (typeof($.fn.lettering) !== 'function') {
    //         console.log('Lettering.js is required');
    //         return;
    //     }
    //     return this.each(function () {
        
    //         if (options) { 
    //             $.extend(settings, options);
    //         }
    //         var elem = this, 
    //             delta = (180 / Math.PI),
    //             ch = parseInt($(elem).css('line-height'), 10),
    //             fs = parseInt($(elem).css('font-size'), 10),
    //             txt = elem.innerHTML.replace(/^\s+|\s+$/g, '').replace(/\s/g, '&nbsp;'),
    //             letters, 
    //             center;
            
    //         elem.innerHTML = txt
    //         $(elem).lettering();
    
    //         elem.style.position =  settings.position;
    
    //         letters = elem.getElementsByTagName('span');
    //         center = Math.floor(letters.length / 2)
                    
    //         var layout = function () {
    //             var tw = 0, 
    //                 i,
    //                 offset = 0,
    //                 minRadius, 
    //                 origin, 
    //                 innerRadius,
    //                 l, style, r, transform;
                                                    
    //             for (i = 0; i < letters.length; i++) {
    //                 tw += letters[i].offsetWidth;
    //             }
    //             minRadius = (tw / Math.PI) / 2 + ch;
                
    //             if (settings.fluid && !settings.fitText) {
    //                 settings.radius = Math.max(elem.offsetWidth / 2, minRadius);
    //             }    
    //             else if (!settings.radius) {
    //                 settings.radius = minRadius;
    //             }   
                
    //             if (settings.dir === -1) {
    //                 origin = 'center ' + (-settings.radius + ch) / fs + 'em';
    //             } else {
    //                 origin = 'center ' + settings.radius / fs + 'em';
    //             }
    
    //             innerRadius = settings.radius - ch;
                    
    //             for (i = 0; i < letters.length; i++) {
    //                 l = letters[i];
    //                 offset += l.offsetWidth / 2 / innerRadius * delta;
    //                 l.rot = offset;                      
    //                 offset += l.offsetWidth / 2 / innerRadius * delta;
    //             }   
    //             for (i = 0; i < letters.length; i++) {
    //                 l = letters[i]
    //                 style = l.style
    //                 r = (-offset * settings.dir / 2) + l.rot * settings.dir            
    //                 transform = 'rotate(' + r + 'deg)';
                        
    //                 style.position = 'absolute';
    //                 style.left = '50%';
    //                 style.marginLeft = -(l.offsetWidth / 2) / fs + 'em';
    
    //                 style.webkitTransform = transform;
    //                 style.MozTransform = transform;
    //                 style.OTransform = transform;
    //                 style.msTransform = transform;
    //                 style.transform = transform;
    
    //                 style.webkitTransformOrigin = origin;
    //                 style.MozTransformOrigin = origin;
    //                 style.OTransformOrigin = origin;
    //                 style.msTransformOrigin = origin;
    //                 style.transformOrigin = origin;
    //                 if(settings.dir === -1) {
    //                     style.bottom = 0;
    //                 }
    //             }
                
    //             if (settings.fitText) {
    //                 if (typeof($.fn.fitText) !== 'function') {
    //                     console.log('FitText.js is required when using the fitText option');
    //                 } else {
    //                     $(elem).fitText();
    //                     $(window).resize(function () {
    //                         updateHeight();
    //                     });
    //                 }
    //             }    
    //             updateHeight();
    //         };
            
    //         var getBounds = function (elem) {
    //             var docElem = document.documentElement,
    //                 box = elem.getBoundingClientRect();
    //             return {
    //                 top: box.top + window.pageYOffset - docElem.clientTop,
    //                 left: box.left + window.pageXOffset - docElem.clientLeft,
    //                 height: box.height
    //             };
    //         };        
            
    //         var updateHeight = function () {
    //             var mid = getBounds(letters[center]),
    //                 first = getBounds(letters[0]),
    //                 h;
    //             if (mid.top < first.top) {
    //                 h = first.top - mid.top + first.height;
    //             } else {
    //                 h = mid.top - first.top + first.height;
    //             }
    //             elem.style.height = h + 'px';  
    //         }
    
    //         if (settings.fluid && !settings.fitText) {
    //             $(window).resize(function () {
    //                 layout();
    //             });
    //         }    
    
    //         if (document.readyState !== "complete") {
    //             elem.style.visibility = 'hidden';
    //             $(window).load(function () {
    //                 elem.style.visibility = 'visible';
    //                 layout();
    //             });
    //         } else {
    //             layout();
    //         }
    //     });
    // };
    // $('#curved2').circleType({position: 'absolute', dir: 1, radius: 200});
});