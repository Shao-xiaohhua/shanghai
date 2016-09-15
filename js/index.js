$(function(){
//    分类
    var wid=$('.ify_onebox .one .omor li').length+$('.ify_onebox .one ul li').width+10;
    $('.ify_onebox .one ul').width(wid);

});
$(function(){
//    选项
    var wid=$('.ify_onebox .mor mei ');
    var wie=$('.ify_onebox .mor li ');
    $('.omor').on('click','li',function(){
       $(this).remove();
    });

    $(wie).on('click',function(){
        $(this).toggleClass('bian');
    });
  $('.morr').on('click',function(){
      $(this).toggleClass('ab');
      wie.addClass('mei');
      wie.removeClass('chu');
      $('.duo').removeClass('ab');
  });
    $('.duo').on('click',function(){
        $('.morr').removeClass('ab');
        $(this).toggleClass('ab');
        if($(this).hasClass){
            wie.removeClass('mei');
            wie.addClass('chu');
        }


    });
    $('.duo.ab').on('click',function(){
        //$(this).removeClass('ab');
        //wie.addClass('mei');
        //wie.removeClass('chu');
        alert(1)
    })
    $('.clear').on('click',function(){
        wie.removeClass('bian');
        $('.omor').empty();
    });
 $('.jw li').on('click',function(){
     var tex=$(this).text();
     $('.jw li').removeClass('bianhua');
     $(this).addClass('bianhua');
     $('<li><span>'+tex+' &#xe62e</span></li>').appendTo('.omor');
 })
});
$(function(){
// 商品
    $('.guanjianzi li').on('click',function(){
        $('.guanjianzi li').removeClass('bianhua');
        $(this).addClass('bianhua');
    })
    var a= $('.zuo');
    var b= $('.you');
    num=1;
    var jia=function(){
        num++;
        if(num>=7){
            num=7;
        }
        $('.for').find('span').text(num);
    }
    var jian=function(){
        num--;
        if(num<=1){
            num=1;
        }
        $('.for').find('span').text(num);
    }
    b.on('click',function(){
        jia();

    });
    a.on('click',function(){
        jian();
    });
    $('.shangyi').on('mouseover',function(){
        $('.shanger').removeClass('yi');
        $(this).addClass('yi');
    })
    $('.shanger').on('mouseover',function(){
        $('.shangyi').removeClass('yi');
        $(this).addClass('yi');
    });
    $('.qg').on('mousedown',function(){
        $(this).addClass('an');
    });
    $('.qg').on('mouseup',function(){
        $(this).removeClass('an');
    });
    $('.fybox ul').on('click','.bba',function(){
        $('.fybox ul li').removeClass('bianhuaa');
        $(this).addClass('bianhuaa');
    });

});
//底部
