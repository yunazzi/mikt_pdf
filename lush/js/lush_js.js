$(function(){
    var i=0;
    var len = $('.product>li').length;
    var isAnimate = false;
    var timer;
    
    start(i);

    function start(i){
        timer = setInterval(function(){
            if(i == len-1){
                i = 0;
            }else{
                i++;
            }
            doNext(i);
        },3000);
    }

    function stop(){
        clearInterval(timer);
    }

    
    function activeBtn(i){
        $('.btn img').removeClass('on');
        $('.btn>li').eq(i).children('a').children('img').addClass('on');
    }

    $('.btn>li').on('click', function(e){
        e.preventDefault();
        var curNum = $('.product>li.on').index();
        i = $(this).index();

        stop();
        if(curNum>i){
            doPrev(i);
        }else{
            doNext(i);
        }
    });

    $('.stop').on('click', function(e){//stop버튼을 누르면
        e.preventDefault();
        stop(); // stop()함수를 불러와 자동실행을 멈춰라
    });
    $('.start').on('click', function(e){
        e.preventDefault();
        start(i);
    });

    
    $('.right_btn').on('click', function(e){
        e.preventDefault();//링크방지
        i = $('.product>li.on').index(); //0부터시작 0123 0123 0123
        if(i == len-1){//i가 3이되면 i에다가 0을 대입
            i = 0;
        }else{
            i++;
        }
        stop();
        doNext(i);
    });

    function doNext(i){
        if(!isAnimate){//isAnimate가 false이면
            isAnimate = true; //true를 저장해 놓고
            nextSlide(i); // 다음슬라이드로 넘어가는 함수 호출
            activeBtn(i); //
        }
    }
    function nextSlide(i){
        $('.product>li').not('.on').css('left', '100%');
        $('.product>li.on').stop().animate({'left':'-100%'}, 1000, function(){
            $(this).removeClass('on');
        });
        $('.product>li').eq(i).stop().animate({'left':'0%'},1000, function(){
            $(this).addClass('on');

            isAnimate = false;
        });
    }
    
});