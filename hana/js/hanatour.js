//main_slide
$(function(){

    var slider = $('.mainSlider');
    var slider_slide = slider.find('.mainSlider_slide');
    var slide = slider_slide.find('a');
    var util = slider.find('.slide_util');
    var indicator = slider.find('.indicator');
    var slideCount = slide.length;
    var indicatorHtml = '';
    var currentIndex = 0;
    var duration = 500;
    var easing = 'easeInOutExpo';
    var interval = 5000;
    var timer;

        //슬라이드 가로로 배열
        //slide 마다 할일 필요 : 0%, 100%, 200% ...
        console.log(slide);
        slide.each(function(i){
            var leftwidth = i * 100 +'%';
            $(this).css({'left': leftwidth });
            //<a href="#">1</a>
            //var i = 2; i = i+2; i += 2;
            //indicatorHtml =  indicatorHtml + ??
            //indicatorHtml += ??
            indicatorHtml += '<a href="">' +(i+1)+ '</a>'//->indicator a태그를 4개 가져옴
            console.log(indicatorHtml);
        });//slide.each
        //*A에는 부모요소 B에는 넣고싶은 자식요소 -> .indicator에 a태그내용을 추가하고 싶으니까
        //indicator.html(indicatorHtml); 작성
        //A.text.(B); a요소의 b의 내용을 글씨 형태로 추가/변경
        //A.html.(B); a요소의 b의 내용을 html 형태로 추가/변경
        indicator.html(indicatorHtml);
         
        
        //슬라이드 이동 함수
        function slide_move(index){//(숫자)를 집어넣어 움직이게 함
            //index 0 left:0%, index 1 left:-100%, index 2 left:-200%
            slider_slide.animate({'left': index * -100 +'%'},duration,easing);
            currentIndex = index;//index는 슬라이드에 따라 숫자가 변하기 때문에 currentIndex와 같다고 숫자를 매기면, 오른쪽으로 넘어가면 index+ 되는걸 아니까 +하고 왼쪽으로 넘어가면 index- 되는걸 아니까 currentIndex의 현재숫자에서 -함!(index가 넘어간 만큼!)
            console.log(currentIndex);

            disabled_util();//처음인지, 마지막 검사. ++ slide_on 추가

            
        }

        function disabled_util(){
            // 처음 currentIndex 0, 이전 버튼이 안보이도록
            if(currentIndex == 0){
                $('.prev').addClass('disabled');
            }else{
                $('.prev').removeClass('disabled');
            }

            // 마지막 currentIndex 3, 다음 버튼이 안보이도록
            if(currentIndex == slideCount - 1){
                $('.next').addClass('disabled');
            }else{
                $('.next').removeClass('disabled');
            }

            /*
            //시작하자마자 disabled_util가 실행되니까 currentIndex에 해당하는 a에 slide_on이 추가됨
            $('.indicator a').removeClass('slide_on');
            //eq(숫자)
            $('.indicator a').eq(currentIndex).addClass('slide_on');
            //-> 모든요소에서 slide_on을 빼고, 내가 원하는 요소에만 slide_on추가
            */

            //2방법// 원하는 요소에만 slide_on추가하고 나머지요소에 slide_on빼기
            //형제, 자매 => siblings
            $('.indicator a').eq(currentIndex).addClass('slide_on').siblings().removeClass('slide_on');

        }
        

        //인디케이터로 이동
        $('.indicator a').click(function(e){//인디케이터 a를 클릭했을때 작동해라
            e.preventDefault();//링크이동방지
            var num = $(this).index();//현재 페이지의 번호를 변수로 지정
            console.log(num);
            slide_move(num);//인디케이터 클릭시 해당슬라이드로 움직임
        });
        //좌우버튼으로 이동하기
        //다음버튼 클릭 c+1->slide_move(?);
        //이전버튼 클릭 c-1->slide_move(?);

        /*
        $('.slide_util .prev').click(function(e){
            e.preventDefault();
            slide_move(currentIndex-1);
            console.log(currentIndex-1);
        });
        $('.slide_util .next').click(function(e){
            e.preventDefault();
            slide_move(currentIndex+1);
            console.log(currentIndex+1);
        });
        */
       util.find('a').click(function(e){
           e.preventDefault();
           if($(this).hasClass('prev')){//현재바라보고 있는 클래스가 prev를 가지고있다면
               slide_move(currentIndex-1);
           }else{
               slide_move(currentIndex+1);
           }
       });
       disabled_util();//시작하자마자 disabled_util가 실행됨

       

       //자동 슬라이드 함수
       function startTimer(){
           //일정시간 마다 할 일
           //setInterval(할일, 시간), //setInterval을 멈추려면 clearInterval(이름)
           //할일(함수) function(){실제로 할일}<-실제로 할일 slide_move에 계속해서 슬라이드가 넘어가게!
            timer = setInterval(function(){
               //0->1->2->3->0
               //nextIndex c 0 n 1, c1 n2,... c3 n 0
               //(0+1)%4 = 1,... (3+1)%4(슬라이드최대길이) = 0 (%=나머지)
               var nextIndex = (currentIndex + 1) % slideCount;
               slide_move(nextIndex);
           }, interval)
       }
       startTimer();

       function stopTimer(){
           clearInterval(timer);
       }
       

       slider.mouseenter(function(){
           stopTimer();
       })
       slider.mouseleave(function(){
           startTimer();
       })

       
});//e. main_slide
    
//main section1
window.onload = function(){
    document.getElementById("btn1").onclick = getImage;
    document.getElementById("btn2").onclick = getImage;
    document.getElementById("btn3").onclick = getImage;
    document.getElementById("btn4").onclick = getImage;

    function getImage(){
        document.getElementById('photo_img').src = this.href;
        return false;
    }
    var img1 = $('#btn1');
    var img2 = $('#btn2');
    var img3 = $('#btn3');
    var img4 = $('#btn4');
    img1.click(function(){
        $('.p1').html("<p> 시원한 계절, 가을에 연인과 함께 <br> 아름다운 풍경, 핑크뮬리로 떠나보세요!</p>")
        $('.p2').html("<p> 장소 : 대전 한밭수목원 <br> 이용시간 : 08:00 ~ 19:00</p>")
    });
    img2.click(function(){
        $('.p1').html("<p> 가을바람이 부는 날, 가족들과 함께 <br> 대관령양떼목장으로 떠나보세요!</p>")
        $('.p2').html("<p> 장소 : 대관령 양떼목장 <br> 이용시간 : 08:00 ~ 18:00</p>")
    });
    img3.click(function(){
        $('.p1').html("<p> 바스락거리는 낙엽소리, 친구들과 함께 <br> 홍천 은행나무숲으로 떠나보세요!</p>")
        $('.p2').html("<p> 장소 : 홍천 은행나무 숲 <br> 이용시간 : 10:00 ~ 17:00</p>")
    });
    img4.click(function(){
        $('.p1').html("<p> 별똥별이 떨어질거같이 아름다운 <br> 순천만습지로 떠나보세요!</p>")
        $('.p2').html("<p> 장소 : 순천 순천만습지 <br> 이용시간 : 08:00 ~ 17:00</p>")
    });

    //슬라이드

}
