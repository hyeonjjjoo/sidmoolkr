$(function(){
    // 컨텐츠1
    var btn = $('.artRight .btn');
    var i = 0;
    var j = 0;
    var k = 0;
    var tli = $('.content.cnt01 ul.tab>li');
    var li = $('.content.cnt01 ul.paging>li');
    var li3 = $('.content.cnt03 li');
    var artGroup = $('.content.cnt01 .artGroup');
    var textGroup = $('.textGroup');
    var artGroup2 = $('.artRightGroup');
    var artGroup3 = $('.content.cnt03 .artGroup');
    var btn2 = $('.content.cnt02 .btn');
    var txt = $('.artLeft');
    var page = $('.content.cnt02 li');
    var len = $('.articles').length
    btn.eq(0).click(function(){
        i--
        i = (len+i)%len;
        artGroup.css('margin-left',-100*i+'%')
        li.removeClass('on');
        li.eq(i).addClass('on');
        tli.removeClass('hLight');
        tli.eq(i).addClass('hLight');
    });
    btn.eq(1).click(function(){
        i++
        i = i%len
        artGroup.css('margin-left',-100*i+'%')
        li.removeClass('on');
        li.eq(i).addClass('on');

        tli.removeClass('hLight');
        tli.eq(i).addClass('hLight');
    });
    li.click(function(){
        var ind = $(this).index()

        li.removeClass('on');
        $(this).addClass('on');
        
        artGroup.css('margin-left',-100*ind+'%');
        
        tli.removeClass('hLight');
        tli.eq(ind).addClass('hLight');
        i=ind;
    });
    tli.click(function(){
        var indd = $(this).index()

        tli.removeClass('hLight');
        $(this).addClass('hLight');

        artGroup.css('margin-left',-100*indd+'%');

        li.removeClass('on');
        li.eq(indd).addClass('on');
        i=indd;
        
    });
    // 컨텐츠2

    textGroup.find('.text:last').prependTo(textGroup);
    textGroup.css({marginLeft:'-100%'});
    artGroup2.find('.article:first').css('opacity','0');
    btn2.eq(0).click(function(){
        artGroup2.find('.article:first').animate({
            opacity: '1'
        },500);
        artGroup2.animate({
            marginLeft : '33%',
        },500,function(){
            artGroup2.find('.article:last').css('opacity','0');
            artGroup2.find('.article:last').prependTo(artGroup2);
            artGroup2.css({marginLeft:'0%'});
        });
        textGroup.animate({
            marginLeft : '100%',       
         });

      
    });
    btn2.eq(1).click(function(){
        artGroup2.find('.article:eq(1)').animate({
            opacity: '0'
        },500);

        artGroup2.stop().animate({
            marginLeft:'-33%',
            
        },500,function(){
            artGroup2.find('.article:first').appendTo(artGroup2);
            artGroup2.find('.article:last').css('opacity','1');
            artGroup2.css({marginLeft:'0%'});
        });
        textGroup.stop().animate({
            marginLeft : '-200%',       
         },600,function(){
            textGroup.find('.text:first').appendTo(textGroup);
            textGroup.css({marginLeft:'-100%'});
         });
      
        // j++
        // btn2.eq(0).css('opacity','1')
        // if(j>=1){
        //     j=1
        //     $(this).css('opacity','0')
        // }
        // artGroup2.css('margin-left', -100 * j +'%')
        // page.removeClass('on');
        // page.eq(j).addClass('on');

    });

    // page.click(function(){
    //     var inddd = $(this).index();
    //     page.removeClass('on');
    //     $(this).addClass('on');
    //     artGroup2.css('margin-left', inddd * -100 +'%')
        
    // });

    // 컨텐츠3

    $('.content.cnt03 .btn').eq(0).click(function(){
        k--
        if(k<=0){
            k=0
        }
        $('.content.cnt03 .artGroup').css('margin-left', -100 * k +'%')
        li3.removeClass('show');
        li3.eq(k).addClass('show');
    });
    $('.content.cnt03 .btn').eq(1).click(function(){
        k++
        if(k>=3){
            k=3
        }
        $('.content.cnt03 .artGroup').css('margin-left', -100 * k +'%')
        li3.removeClass('show');
        li3.eq(k).addClass('show');
    });
    li3.click(function(){
        li3.removeClass('show');
        $(this).addClass('show');
        var ind = $(this).index();
        artGroup3.css('margin-left', -100*ind+'%')
        k=ind;
    });
    


});