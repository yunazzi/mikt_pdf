$(function(){
    /*
    1-1. next버튼(우->좌로 이동)슬라이드함수()
    1-2. prev버튼(좌->우로 이동)슬라이드함수()
    2. 좌/우화살버튼 클릭이벤트
    3-1. 슬라이드 하단의 둥근이미지 버튼클릭이벤트
    3-2. 버튼 리셋함수
    3-3. 슬라이드진행시 : 아이콘초기화, 해당아이콘 on
    4-1. 강제실행 (trigger)
    4-2. 자동실행함수 setinterval
    4-3. 마우스를 버튼,하단버튼에 올리면 자동실행정지 clearinterval
    4-4. 롤오버시 정지이벤트
        (마우스 올리면 정지, 마우스내리면 자동실행)
    5. stop-play토글버튼 클릭이벤트
        정지버튼 클릭하면 만일 y=0이면, 아이콘 변경
        y가 0이 아니면 자동실행, 원래 아이콘으로 변경, y=0으로 대입
    */
   var s=[],x,y;
   //1-1. next버튼(우->좌로 이동)슬라이드함수()
   next0();
   autoPlay();
    function next0(){
        s[0]=1;
        s[1]=0;
        s[2]=0;
        $('slide').eq(0).stop().animate({'left':'100%'},0).animate({'left':'0%'},600);
        $('slide').eq(1).stop().animate({'left':'200%'},0).animate({'left':'200%'},600);
        $('slide').eq(2).stop().animate({'left':'0%'},0).animate({'left':'-100%'},600);
    }
    function next1(){
        s[0]=0;
        s[1]=1;
        s[2]=0;
        $('slide').eq(0).stop().animate({'left':'0%'},0).animate({'left':'-100%'},600);
        $('slide').eq(1).stop().animate({'left':'100%'},0).animate({'left':'0%'},600);
        $('slide').eq(2).stop().animate({'left':'200%'},0).animate({'left':'100%'},600);
    }
    function next2(){
        s[0]=0;
        s[1]=0;
        s[2]=1;
        $('slide').eq(0).stop().animate({'left':'200%'},0).animate({'left':'100%'},600);
        $('slide').eq(1).stop().animate({'left':'0%'},0).animate({'left':'-100%'},600);
        $('slide').eq(2).stop().animate({'left':'100%'},0).animate({'left':'0%'},600);
    }
    //1-2. prev버튼(좌->우로 이동)슬라이드함수()
    function prev0(){
        s[0]=1;
        s[1]=0;
        s[2]=0;
        $('slide').eq(0).stop().animate({'left':'-100%'},0).animate({'left':'0%'},600);
        $('slide').eq(1).stop().animate({'left':'0%'},0).animate({'left':'100%'},600);
        $('slide').eq(2).stop().animate({'left':'-200%'},0).animate({'left':'-100%'},600);
    }
    function prev1(){
        s[0]=0;
        s[1]=1;
        s[2]=0;
        $('slide').eq(0).stop().animate({'left':'-200%'},0).animate({'left':'-100%'},600);
        $('slide').eq(1).stop().animate({'left':'-100%'},0).animate({'left':'0%'},600);
        $('slide').eq(2).stop().animate({'left':'0%'},0).animate({'left':'100%'},600);
    }
    function prev2(){
        s[0]=0;
        s[1]=0;
        s[2]=2;
        $('slide').eq(0).stop().animate({'left':'0%'},0).animate({'left':'100%'},600);
        $('slide').eq(1).stop().animate({'left':'-200%'},0).animate({'left':'-100%'},600);
        $('slide').eq(2).stop().animate({'left':'-100%'},0).animate({'left':'0%'},600);
    }
    //2. 좌/우화살버튼 클릭이벤트
    $('.left_btn').click(function(){
        if(s[0]==1){
            prev2();
        }else if(s[1]==1){
            prev0();
        }else if(s[2]==1){
            prev1();
        }
    });
    $('.right_btn').click(function(){
        if(s[0]==1){
            next1();
        }else if(s[1]==1){
            next2();
        }else if(s[2]==1){
            next0();
        }
    });
    //3-1. 슬라이드 하단의 둥근이미지 버튼클릭이벤트
    //3-3. 슬라이드진행시 : 아이콘초기화, 해당아이콘 on
    function icon1(){
        btnReset();
        $('.btn1').attr('src','img_1/intro_indi_1_on.png');
    }
    function icon2(){
        btnReset();
        $('.btn2').attr('src','img_1/intro_indi_2_on.png');
    }
    function icon3(){
        btnReset();
        $('.btn3').attr('src','img_1/intro_indi_3_on.png');
    }
    //3-2. 버튼 리셋함수
    function btnReset(){
        $('.btn1').attr('src','img_1/intro_indi_1.png');
        $('.btn2').attr('src','img_1/intro_indi_2.png');
        $('.btn3').attr('src','img_1/intro_indi_3.png');
    }
    //4-1. 강제실행 (trigger)
    function keepPlay(){
        $('.right_btn').trigger('click');
    }
    //4-2. 자동실행함수 setinterval
    function autoPlay(){
        x = setInterval(keepPlay,1000);
    }
    //4-3. 마우스를 버튼,하단버튼에 올리면 자동실행정지 clearinterval
    function stopPlay(){
        clearInterval(x);
    }
    $('.icon_btn').on({
        mouseenter : function(){
            stopPlay();
        },
        mouseleave :function(){
            autoPlay();
        }
    })
    //4-4. 롤오버시 정지이벤트(마우스 올리면 정지, 마우스내리면 자동실행)
    $('.btn1').click(function(){
        icon1();
        prev0();
    })
    $('.btn2').click(function(){
        if(s[0]==1){
            next1();
        }else{
            prev1();
        }
        icon2();
    })
    $('.btn3').click(function(){
        icon3();
        next2();
    })
    //5. stop-play토글버튼 클릭이벤트
    //정지버튼 클릭하면 만일 y=0이면, 아이콘 변경
    //y가 0이 아니면 자동실행, 원래 아이콘으로 변경, y=0으로 대입
    y=0;
    $('.icon_stopPlay').click(function(){
        if(y==0){
            stopPlay();
            $(this).attr('src','img_1/intro_indi_play.png');
            y=1;
        }else{
            autoPlay();
            $(this).attr('src','img_1/intro_indi_pause.png');
            y=0;
        }
    });
});