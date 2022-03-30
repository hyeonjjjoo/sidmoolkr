$(function(){
    var i = 0;
    var bGr =  $('.bnrGroup');
    var li = $('.paging>li')
    li.click(function(){
        ind = $(this).index();
        li.removeClass('on');
        $(this).addClass('on');
        bGr.css('margin-left', -100 * ind +'%')
    });
   $('.bnr01 .btn').click(function(){
       i++
       bGr.css('margin-left', -100 * i +'%')
       console.log(li.eq(i))
       li.removeClass('on');
       li.eq(i).addClass('on');

   });
   $('.bnr02 .btn').click(function(){
       i--
       bGr.css('margin-left', -100 * i +'%')
       li.removeClass('on');
       li.eq(i).addClass('on');
   
   });
   
});