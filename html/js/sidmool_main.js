$(function(){
    // 컨텐츠1
    var btn = $('.artRight .btn');
    var i = 0;
    var j = 0;
    var k = 0;
    var tli = $('.content.cnt01 ul.tab>li');
    var li = $('.content.cnt01 ul.paging>li');
    var li3 = $('.content.cnt03 li');
    var artGroup = $('.artRight>.artGroup');
    var artGroup2 = $('.artRightGroup');
    var artGroup3 = $('.content.cnt03 .artGroup');
    var btn2 = $('.content.cnt02 .btn');
    var txt = $('.artLeft');
    var page = $('.content.cnt02 li');
    btn.eq(0).click(function(){
        i--
        if(i<=0){
            i=0
        }
        artGroup.css('margin-left',-100*i+'%')
        li.removeClass('on');
        li.eq(i).addClass('on');
        tli.removeClass('hLight');
        tli.eq(i).addClass('hLight');
    });
    btn.eq(1).click(function(){
        i++
        if(i>=3){
            i=3
        }
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
    btn2.eq(0).click(function(){
        j--
        btn2.eq(1).css('opacity','1')
        if(j<=0){
            j=0
            $(this).css('opacity','0')
        }
        artGroup2.css('margin-left', 100 * j +'%')
        txt.find('h3').text('01');
        txt.find('h5').text('시카로 스킨 비에프');
        txt.find('p:first').text('&num;광채 에센스');
        txt.find('p:last').text('&num;B.F크림');
        page.removeClass('on');
        page.eq(j).addClass('on');
    
       
    });
    btn2.eq(1).click(function(){
        j++
        btn2.eq(0).css('opacity','1')
        if(j>=1){
            j=1
            $(this).css('opacity','0')
        }
        artGroup2.css('margin-left', -100 * j +'%')
        txt.find('h3').text('02');
        txt.find('h5').text('시카로 스킨 비에프2');
        txt.find('p:first').text('&num;에센스2');
        txt.find('p:last').text('&num;크림2');
        page.removeClass('on');
        page.eq(j).addClass('on');

    });

    page.click(function(){
        var inddd = $(this).index();
        page.removeClass('on');
        $(this).addClass('on');
        artGroup2.css('margin-left', inddd * -100 +'%')
        
    });
    page.eq(0).click(function(){
        txt.find('h3').text('01');
        txt.find('h5').text('시카로 스킨 비에프');
        txt.find('p:first').text('&num;광채 에센스');
        txt.find('p:last').text('&num;B.F크림');
    });
    page.eq(1).click(function(){
        txt.find('h3').text('02');
        txt.find('h5').text('시카로 스킨 비에프2');
        txt.find('p:first').text('&num;에센스2');
        txt.find('p:last').text('&num;크림2');  
    });

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