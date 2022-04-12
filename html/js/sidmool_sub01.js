$(function(){

    // 헤더
    var hdr = $('.hdrWrap');
    var toTop = $('.toTop');
    $(window).scroll(function(){
        var now = $(this).scrollTop();
        var article = $('.section>div.art')
        if(now >= 1){
            hdr.addClass('fix');
        }else{
            hdr.removeClass('fix');
        }
        // 투탑버튼
        if(now >=2000){
            toTop.addClass('pop');
            toTop.fadeIn(500);
        }else 
        if(now >=300 && now < 2000){
            toTop.fadeIn(500);
            toTop.removeClass('pop')
        }else{
            toTop.fadeOut(500);
        }
        toTop.click(function(){
            $('html,body').stop().animate({
                scrollTop : 0
            },500);
        });

        // 1600 1000 500 100

        // 노트북 기준
        if(now < 250){
            article.find('.article:nth(1)').css({
                opacity : 0,
                marginTop : '120px' 
            });
        }else if(now >= 250 && now <800){
            article.find('.article:nth(1)').css({
                opacity : 1,
                marginTop : '80px' 
            });
            article.find('.article:nth(2)').css({
                opacity : 0,
                marginTop : '120px' 
            });
        }else if(now >= 800 && now <1300){
            article.find('.article:nth(2)').css({
                opacity : 1,
                marginTop : '80px' 
            });
            article.find('.article:nth(3)').css({
                opacity : 0,
                marginTop : '120px'
            });
        }else if(now >=1300 && now < 1900){
            article.find('.article:nth(3)').css({
                opacity : 1,
                marginTop : '80px' 
            });
            article.find('.article:nth(4)').css({
                opacity : 0,
                marginTop : '120px'
            });
        }else if(now >=1900){
            article.find('.article:nth(4)').css({
                opacity : 1,
                marginTop : '80px' 
            });
        }
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


    // 헤더 버튼
    var btn = $('.cntWrap .btns>div')
    btn.click(function(){
        btn.removeClass('btn');
        $(this).addClass('btn');
    });

    btn.eq(0).click(function(){
        $('div.art.New').css({
            display : 'none'
        });
        $('div.art.Best').css({
            display : 'block',
        });
    });
    btn.eq(1).click(function(){
        $('div.art.Best').css({
            display : 'none'
        });
        $('div.art.New').css({
            display : 'block'
        });
    });
});