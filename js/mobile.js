window.onload = function(){
     getRem(750,100)
};
window.onresize = function(){
    getRem(750,100)
};
function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    if(oWidth>=750){
        oWidth = pwidth;
    }
    if(oWidth<=320){
        oWidth = 320;
    }
    html.style.fontSize = oWidth/pwidth*prem + "px";
};


$(function(){
    $('.banner-first').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 3000,
    });
    $('.banner-second').owlCarousel({
        items: 3,
        // loop: true,
        margin: 10,
        autoplayTimeout: 3000,
    });

    // 返回顶部
    $(".go-back-wrap .go-back").click(function() {
        $('body,html').animate({
          scrollTop: 0
        },
        500);
        return false;
      });
});



