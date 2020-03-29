

$(function(){  

    $('.banner-first').owlCarousel({
        items: 7,
        // loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout:    1000,
    });
    $('.banner-second').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: true,    
    });
    // tab
    $(".o-tab-nav li").click(function(){
        var i = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(this).parents(".o-tab-nav").siblings(".table-tab-options").children(".table-div-wrap").hide().eq(i).show();
    });
    // 返回顶部
    $(".fixed-rt-wrap .go-top").click(function() {
        $('body,html').animate({
          scrollTop: 0
        },
        500);
        return false;
      });
});