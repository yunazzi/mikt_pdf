$(function(){
    //동영상 사이즈 조절
    $('.section05_video').attr({"width":"", "height":""}).css({"max-width": "70%"});

    $('#Submenu_gnb').slideUp(0);
    $('#Mainmenu_gnb').mouseenter(function(){
        $('#Submenu_gnb').slideDown();
    });
    $('#Submenu_gnb').mouseleave(function(){
        $('#Submenu_gnb').slideUp();
    });
});