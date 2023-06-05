$(function(){
    var s1=0;
    var s2=0;
    var s3=0;
    var s4=0;
    slider_move1();
    function slider_move1(){
        s1=1;
        s2=0;
        s3=0;
        s4=0;
        $('.btn1').addClass('on');
        $('.btn2').removeClass('on');
        $('.btn3').removeClass('on');
        $('.btn4').removeClass('on');

        $('.slide').eq(0).stop().animate({'left':'0'},1000);
        $('.slide').eq(1).stop().animate({'left':'100%'},1000);
        $('.slide').eq(2).stop().animate({'left':'200%'},1000);
        $('.slide').eq(3).stop().animate({'left':'300%'},1000);
    }
    function slider_move2(){
        s1=0;
        s2=1;
        s3=0;
        s4=0;
        $('.btn1').removeClass('on');
        $('.btn2').addClass('on');
        $('.btn3').removeClass('on');
        $('.btn4').removeClass('on');

        $('.slide').eq(0).stop().animate({'left':'-100%'},1000);
        $('.slide').eq(1).stop().animate({'left':'0%'},1000);
        $('.slide').eq(2).stop().animate({'left':'100%'},1000);
        $('.slide').eq(3).stop().animate({'left':'200%'},1000);
    }
    function slider_move3(){
        s1=0;
        s2=0;
        s3=1;
        s4=0;
        $('.btn1').removeClass('on');
        $('.btn2').removeClass('on');
        $('.btn3').addClass('on');
        $('.btn4').removeClass('on');

        $('.slide').eq(0).stop().animate({'left':'-200%'},1000);
        $('.slide').eq(1).stop().animate({'left':'-100%'},1000);
        $('.slide').eq(2).stop().animate({'left':'0%'},1000);
        $('.slide').eq(3).stop().animate({'left':'100%'},1000);
    }
    function slider_move4(){
        s1=0;
        s2=0;
        s3=0;
        s4=1;
        $('.btn1').removeClass('on');
        $('.btn2').removeClass('on');
        $('.btn3').removeClass('on');
        $('.btn4').addClass('on');

        $('.slide').eq(0).stop().animate({'left':'-300%'},1000);
        $('.slide').eq(1).stop().animate({'left':'-200%'},1000);
        $('.slide').eq(2).stop().animate({'left':'-100%'},1000);
        $('.slide').eq(3).stop().animate({'left':'0%'},1000);
    }
    $('.btn1').click(function(){
        slider_move1();
    })
    $('.btn2').click(function(){
        slider_move2();
    })
    $('.btn3').click(function(){
        slider_move3();
    })
    $('.btn4').click(function(){
        slider_move4();
    })
    function autoslider(){
        $()
    }
});