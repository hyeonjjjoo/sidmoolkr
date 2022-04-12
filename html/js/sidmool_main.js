$(function(){
    // 헤더 , 투탑버튼
    var hdr = $('.hdrWrap');
    var toTop = $('.toTop');
    $(window).scroll(function(){
        var now = $(this).scrollTop();
        if(now >= 1){
            hdr.addClass('fix');
        }else{
            hdr.removeClass('fix');
        }
        // 투탑버튼
        if(now >=2800){
            toTop.addClass('pop');
            toTop.fadeIn(500);
        }else 
        if(now >=300 && now < 2800){
            toTop.fadeIn(500);
            toTop.removeClass('pop')
        }else{
            toTop.fadeOut(500);
        }
    });
    toTop.click(function(){
        $('html,body').stop().animate({
            scrollTop : 0
        },500);
    });


    // 헤더 탭슬라이드
    var tabLi = $('.tab li:nth(1)');
    var tab = $('.hdrWrap ul.tab');
    $('.menu').next().click(function(){
        tab.animate({
               right : 0
        },400);
    });
    $('div.hdrWrap .btn:nth(0)').click(function(){
        tab.animate({
            right : '-100%'
        },400);   
    });
    tabLi.click(function(){
        tabLi.toggleClass('on');
        tabLi.find('span').text('+');
        $('li.on').find('span').text('-');
    });
  
    
    
    
    // 메인
    var Mbtn = $('.main>.btns');
    var MGroup = $('.main>.mainGroup');
    var m = 0;
    var mLi = $('.main li');
    var stopBtn = $('.stop>i:nth(0)');
    var playBtn = $('.stop>i:nth(1)');
    var auto = setInterval(slideright,3000)
    Mbtn.find('.btn:last').click(slideright);
    Mbtn.find('.btn:first').click(slideleft);
    function slideright(){
        m++;
        m = m%2;
        MGroup.css('margin-left',m * -100 +'%');
        mLi.removeClass('on');
        mLi.eq(m).addClass('on');
    };
    function slideleft(){
        m--;
        m = (m+2)%2;
        MGroup.css('margin-left',m * -100 +'%');
        mLi.removeClass('on');
        mLi.eq(m).addClass('on');
    };
    playBtn.click(function(){
        stopBtn.css({display : 'block'})
        playBtn.css({display : 'none'})
        auto = setInterval(slideright,3000)
    });
    stopBtn.click(function(){
        stopBtn.css({display : 'none'})
        playBtn.css({display : 'block'})
        clearInterval(auto);
    });
    
    // 컨텐츠1
    var btn = $('.artRight .btn');
    var i = 0;
    var tli = $('.content.cnt01 ul.tab>li');
    var li = $('.content.cnt01 ul.paging>li');
    var artGroup = $('.content.cnt01 .artGroup');
    var len = $('.articles').length
    var wd = $(window).width();
    var num = 0;
    if(wd > 1024){
        num = 4;
    }else if(wd >= 420 && wd <=1024 ){
        num = 2;
    }else{
        num = 1;
    }
    
    tli.click(function(){
        var ind = $(this).index();
        $('.content.cnt01 .articles').css({width:'0'});
        $('.content.cnt01 .articles').find('.article').css({
            width:'0',
            opacity : '0'
        });
        $('.content.cnt01 .articles').eq(ind).css({
            width:'calc(100% / 4 )'
        });
        $('.content.cnt01 .articles').eq(ind).find('.article').css({
            width:'calc(100% / ' + num + ' - 10px)',
            opacity : '1'
        });

        tli.removeClass('hLight');
        $(this).addClass('hLight');

        li.removeClass('on');
        li.eq(ind).addClass('on');
        i=ind;
    });

    li.click(function(){
        var ind = $(this).index()

        li.removeClass('on');
        $(this).addClass('on');
        
        $('.content.cnt01 .articles').css({width:'0'});
        $('.content.cnt01 .articles').find('.article').css({
            width:'0',
            opacity : '0'
        });
        $('.content.cnt01 .articles').eq(ind).css({width:'calc(100% / 4 )'});
        $('.content.cnt01 .articles').eq(ind).find('.article').css({
            width:'calc(100% / ' + num + ' - 10px)',
            opacity : '1'
        });
        
        tli.removeClass('hLight');
        tli.eq(ind).addClass('hLight');
        i=ind;

    });
    btn.eq(0).click(function(){
        i--
        i = (len+i)%len;
        
        $('.content.cnt01 .articles').css({width:'0'});
        $('.content.cnt01 .articles').find('.article').css({
            width:'0',
            opacity : '0'
        });
        $('.content.cnt01 .articles').eq(i).css({width:'calc(100% / 4 )'});
        $('.content.cnt01 .articles').eq(i).find('.article').css({
            width:'calc(100% / ' + num + ' - 10px)',
            opacity : '1'
        });

        li.removeClass('on');
        li.eq(i).addClass('on');
        tli.removeClass('hLight');
        tli.eq(i).addClass('hLight');

    });
    btn.eq(1).click(function(){
        i++
        i = i%len
        
        $('.content.cnt01 .articles').css({width:'0'});
        $('.content.cnt01 .articles').find('.article').css({
            width:'0',
            opacity : '0'
        });
        $('.content.cnt01 .articles').eq(i).css({width:'calc(100% / 4 )'});
        $('.content.cnt01 .articles').eq(i).find('.article').css({
            width:'calc(100% / ' + num + ' - 10px)',
            opacity : '1'
        });

        li.removeClass('on');
        li.eq(i).addClass('on');

        tli.removeClass('hLight');
        tli.eq(i).addClass('hLight');
    });
    

    // 컨텐츠2
    var j = 0;
    var artGroup2 = $('.artRightGroup');
    var textGroup = $('.textGroup');
    var btn2 = $('.content.cnt02 .btn');
    var page = $('.content.cnt02 li');
    var wd = $(window).width();
    var num2 = 0;
    var num3 = 0;
    if(wd > 1024){
        num2 = 33;
        num3 = 0;
    }else if(wd >= 420 && wd <=1024 ){
        num2 = 33;
        num3 = 0;
    }else{
        num2 = 200;
        num3 = -100;
    }

    textGroup.find('.text:last').prependTo(textGroup);
    textGroup.css({marginLeft:'-100%'});
    artGroup2.find('.article:first').css('opacity','0');
    btn2.eq(0).click(function(){
        artGroup2.find('.article:first').animate({
            opacity: '1'
        },500);
        artGroup2.stop().animate({
            marginLeft : num2+'%',
        },500,function(){
            artGroup2.find('.article:last').css('opacity','0');
            artGroup2.find('.article:last').prependTo(artGroup2);
            artGroup2.css({marginLeft: num3+'%'});
        });
        textGroup.stop().animate({
            marginLeft : '0%',       
         },600,function(){
            textGroup.find('.text:last').prependTo(textGroup);
            textGroup.css({marginLeft:'-100%'});
         });
         j--
         if(j<=-1){
             j=2
         }
         page.removeClass('on')
         page.eq(j).addClass('on')
        
      
    });

    btn2.eq(1).click(function(){
        artGroup2.find('.article:eq(1)').animate({
            opacity: '0'
        },500);

        artGroup2.stop().animate({
            marginLeft: -num2+'%',
            
        },500,function(){
            artGroup2.find('.article:first').appendTo(artGroup2);
            artGroup2.find('.article:last').css('opacity','1');
            artGroup2.css({marginLeft: num3+'%'});
        });
        textGroup.stop().animate({
            marginLeft : '-200%',       
         },600,function(){
            textGroup.find('.text:first').appendTo(textGroup);
            textGroup.css({marginLeft:'-100%'});
         });
         j++
         if(j>=3){
             j=0
         }
         page.removeClass('on')
         page.eq(j).addClass('on')
      
    });
     
    // 컨텐츠3
    var k = 0;
    var btn3 = $('.content.cnt03 .btn');
    var li3 = $('.content.cnt03 li');
    var artGroup3 = $('.content.cnt03 .artGroup');
    btn3.eq(0).click(function(){
        k--
        if(k<=0){
            k=0
        }
        artGroup3.css('margin-left', -100 * k +'%')
        li3.removeClass('show');
        li3.eq(k).addClass('show');
    });
    btn3.eq(1).click(function(){
        k++
        if(k>=3){
            k=3
        }
        artGroup3.css('margin-left', -100 * k +'%')
        li3.removeClass('show');
        li3.eq(k).addClass('show');
    });
    li3.click(function(){
        li3.removeClass('show');
        $(this).addClass('show');
     
        var ind = $(this).index();
        if(ind>=4){
            removeClass('show');
        }
        artGroup3.css('margin-left', -100*ind+'%')
        k=ind;
    });
    
});