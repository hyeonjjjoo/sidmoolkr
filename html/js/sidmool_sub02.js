$(function(){
    // 헤더
    var hdr = $('.hdrWrap');
    $(window).scroll(function(){
        var now = $(this).scrollTop();
        if(now >= 1){
            hdr.addClass('fix');
        }else{
            hdr.removeClass('fix');
        }
    });
    

    
});