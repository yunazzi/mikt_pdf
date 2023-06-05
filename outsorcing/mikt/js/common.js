//section slider
$(function(){
    var list = $(".article_slider");

    $("#artile_leftArrow").click(function(e){
        e.preventDefault();
        $(".article_slider li:last").prependTo(list);
        list.css("marginLeft", "-325px");
        list.animate({"marginLeft":"0px"}, 500);
    });
    $("#artile_rightArrow").click(function(e){
        e.preventDefault();
        $(".article_slider li:first").appendTo(list);
        list.css("marginLeft", "0px");
        list.animate({"marginLeft":"-325px"}, 500);
    });

    
    setInterval(function(){
        $('#artile_rightArrow').trigger('click');
    },5000);
    
    $(function(){
        //banner_slider
        $('.banner_Boxs1').mouseenter(function(){
            $('.banner_textBox1').css('opacity','1');
        });
        $('.banner_Boxs1').mouseleave(function(){
            $('.banner_textBox1').css('opacity','0');
        });
    
    
        $('.banner_Boxs2').mouseenter(function(){
            $('.banner_textBox2').css('opacity','1');
        });
        $('.banner_Boxs2').mouseleave(function(){
            $('.banner_textBox2').css('opacity','0');
        });
    
        
        $('.banner_Boxs3').mouseenter(function(){
            $('.banner_textBox3').css('opacity','1');
        });
        $('.banner_Boxs3').mouseleave(function(){
            $('.banner_textBox3').css('opacity','0');
        });
    
        $('.banner_Boxs4').mouseenter(function(){
            $('.banner_textBox4').css('opacity','1');
        });
        $('.banner_Boxs4').mouseleave(function(){
            $('.banner_textBox4').css('opacity','0');
        });
        //gnb slide Up & Down
        $('#Submenu_gnb').slideUp(0);
        $('#Mainmenu_gnb').mouseenter(function(){
            $('#Submenu_gnb').slideDown();
        });
        $('#Submenu_gnb').mouseleave(function(){
            $('#Submenu_gnb').slideUp();
        });
    });
});

    