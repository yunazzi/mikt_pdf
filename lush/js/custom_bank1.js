$(function(){
    main_slider1();

    function main_slider3(){
        //지도 top:0; left:240px;
        $('#slider3 li:nth-child(1)').animate({'top':'-150px', 'left':'-100px', 'width':'1px', 'height':'auto'},0);
        $('#slider3 li:nth-child(1)').animate({'top':'0px', 'left':'240px', 'width':'685px', 'height':'auto'},2000);


        $('#slider3 li:nth-child(2)').animate({top:'-500px'},0);
        $('#slider3 li:nth-child(2)').animate({top:'100px'},2500);

        $('#slider3 li:nth-child(3)').animate({top:'-500px'},0);
        $('#slider3 li:nth-child(3)').animate({top:'120px'},2500);

        $('#slider3 li:nth-child(4)').animate({top:'-500px'},0);
        $('#slider3 li:nth-child(4)').animate({top:'200px'},1700);

        $('#slider3 li:nth-child(5)').animate({top:'-500px'},0);
        $('#slider3 li:nth-child(5)').animate({top:'230px'},1900);

        $('#slider3 li:nth-child(6)').animate({top:'-500px'},0);
        $('#slider3 li:nth-child(6)').animate({top:'120px'},2200);

        $('#slider3 li:nth-child(7)').animate({top:'-500px'},0);
        $('#slider3 li:nth-child(7)').animate({top:'250px'},2600);

        $('#slider3 li:nth-child(8)').animate({top:'-500px'},0);
        $('#slider3 li:nth-child(8)').animate({top:'120px'},1800);  

        $('#slider3 li:nth-child(9)').animate({top:'-500px'},0);
        $('#slider3 li:nth-child(9)').animate({top:'225px'},2000); 

        $('#slider3 li:nth-child(10)').animate({top:'-500px'},0);
        $('#slider3 li:nth-child(10)').animate({top:'150px'},2500);

        //큰글씨
        $('#slider3 li:nth-child(11)').animate({left:'-200px'},0);
        $('#slider3 li:nth-child(11)').animate({left:'250px'},800);
        $('#slider3 li:nth-child(11)').animate({left:'20px'},1600);

        //작은글씨
        $('#slider3 li:nth-child(12)').fadeOut(2000);
        $('#slider3 li:nth-child(12)').fadeIn(1500);

    }
    function main_slider2(){
        //책 top:0; right:40px; 우측에서 들어옴
        $('#slider2 li:nth-child(1)').animate({'right':'-600px'},0);
        $('#slider2 li:nth-child(1)').animate({'right':'40px'},2000);
        
        //동전 top:100px; right:20px; 좌상단에서 들어옴
        $('#slider2 li:nth-child(2)').animate({'top':'-500px','right':'400px'},0);
        $('#slider2 li:nth-child(2)').animate({'top':'100px','right':'20px'},1000);

        // 동전 top:160px; right:150px; 좌상단에서 들어옴
        $('#slider2 li:nth-child(3)').animate({'top':'-200px','right':'300px'},0);
        $('#slider2 li:nth-child(3)').animate({'top':'160px','right':'150px'},1000);

        //큰글씨 left:20px;
        $('#slider2 li:nth-child(4)').animate({'left':'-200px'},0);
        $('#slider2 li:nth-child(4)').animate({'left':'60px'},1200);
        $('#slider2 li:nth-child(4)').animate({'left':'20px'},1500);

        //작은글씨 fadeInOut
        $('#slider2 li:nth-child(5)').fadeOut(2000);
        $('#slider2 li:nth-child(5)').fadeIn(1500);
    }
    function main_slider1(){
        //구름
        $('#slider1 li:nth-child(1)').animate({'bottom':'600px', 'right':'800px', 'width':'1px', 'height':'auto'},0).
        animate({'bottom':'600px', 'right':'800px', 'width':'685px', 'height':'auto'},2000).
        animate({'bottom':'0', 'right':'0','width':'685px', 'height':'auto'},6000);

        //건물 bottom: 30px;right: 0;
        $('#slider1 li:nth-child(2)').animate({'bottom':'1000px', 'right':'0'},0);
        $('#slider1 li:nth-child(2)').animate({'bottom':'30px', 'right':'0'},2000);

        //나무 bottom: -200px;right: 450px;
        $('#slider1 li:nth-child(3)').animate({'bottom':'-200px'},0);
        $('#slider1 li:nth-child(3)').animate({'bottom':'30px'},2000);

        //동전 bottom: 50px;right: 100px; 좌상단에서 제자리
        $('#slider1 li:nth-child(4)').animate({'bottom':'-200px', 'right':'300px'},0);
        $('#slider1 li:nth-child(4)').animate({'bottom':'50px', 'right':'100px'},2000);

        //나뭇잎1 top: 50px;right: 20px;
        $('#slider1 li:nth-child(5)').animate({'top':'-200px', 'right':'50px'},0);
        $('#slider1 li:nth-child(5)').animate({'top':'50px', 'right':'20px'},2000);

        //나뭇잎2 top: 30px;right: 150px;
        $('#slider1 li:nth-child(6)').animate({'top':'-30px', 'right':'50px'},0);
        $('#slider1 li:nth-child(6)').animate({'top':'30px', 'right':'150px'},2000);

        //큰글씨 left:20px;
        $('#slider1 li:nth-child(7)').animate({'left':'-200px'},0);
        $('#slider1 li:nth-child(7)').animate({'left':'60px'},1200);
        $('#slider1 li:nth-child(7)').animate({'left':'20px'},1500);

        //작은글씨 fadeInOut
        $('#slider1 li:nth-child(8)').fadeOut(2000);
        $('#slider1 li:nth-child(8)').fadeIn(1500);
    }

    var s1 =0;
    var s2 =0;
    var s3 =0;
    slider_move1();
    function slider_move1(){
        s1=1;
        s2=0;
        s3=0;
        //둥근버튼, 각페이지 left 위치값
        $('.roundBt1').addClass('on');
        $('.roundBt2').removeClass('on');
        $('.roundBt3').removeClass('on');

        $('#slider_wrap1').animate({'left':'0px'},1000);
        $('#slider_wrap2').animate({'left':'960px'},1000);
        $('#slider_wrap3').animate({'left':'1920px'},1000);
    }
    function slider_move2(){
        s1=0;
        s2=1;
        s3=0;
        //둥근버튼, 각페이지 left 위치값
        $('.roundBt2').addClass('on');
        $('.roundBt1').removeClass('on');
        $('.roundBt3').removeClass('on');

        $('#slider_wrap1').animate({'left':'-960px'},1000);
        $('#slider_wrap2').animate({'left':'0px'},1000);
        $('#slider_wrap3').animate({'left':'960px'},1000);
    }
    function slider_move3(){
        s1=0;
        s2=0;
        s3=1;
        //둥근버튼, 각페이지 left 위치값
        $('.roundBt3').addClass('on');
        $('.roundBt1').removeClass('on');
        $('.roundBt2').removeClass('on');

        $('#slider_wrap1').animate({'left':'-1920px'},1000);
        $('#slider_wrap2').animate({'left':'-960px'},1000);
        $('#slider_wrap3').animate({'left':'0px'},1000);
    }

    $('.roundBt1').click(function(){
        main_slider1();
        slider_move1();
    });
    $('.roundBt2').click(function(){
        main_slider2();
        slider_move2();
    });
    $('.roundBt3').click(function(){
        main_slider3();
        slider_move3();
    });

    //좌우버튼, 자동실행
    $('#button_left').click(function(){
        if(s1 == 1){
            main_slider3();
            slider_move3();
        }else if(s2==1){
            main_slider1();
            slider_move1();
        }else if(s3==1){
            main_slider2();
            slider_move2();
        }
    });
    $('#button_right').click(function(){
        if(s1 == 1){
            main_slider2();
            slider_move2();
        }else if(s2==1){
            main_slider3();
            slider_move3();
        }else if(s3==1){
            main_slider1();
            slider_move1();
        }
    });

    function autoslider(){
        $('#button_right').trigger('click');
    }
    setInterval(autoslider, 6000);
    
    








});