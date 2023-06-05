$(function(){
    //햄버거바 
    $('.nav_menu .hamburbars').on('click',function(){
        $(this).toggleClass('on');
        $('.nav_menu').toggleClass('on');
        $('.nav_menu').toggleClass('emphasized');
    });
});