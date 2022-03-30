$(function(){
    var btn = $('.btns>div')
    btn.click(function(){
        btn.removeClass('btn');
        $(this).addClass('btn');
    });
});