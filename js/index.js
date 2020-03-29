
var nav = document.getElementById("nav");
var lis = nav.getElementsByClassName("nav-item");
var blockContent = document.getElementsByClassName("player-items");
window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < blockContent.length; i++) {
        if (scrollTop + 150 >= blockContent[i].offsetTop) {
            for (var j = 0; j < lis.length; j++) {
                lis[j].className = 'nav-item'
            }
            lis[i].className = 'nav-item active'
        }
    }
}
for (var k = 0; k < lis.length; k++) {
    lis[k].index = k + 1;
}
nav.addEventListener('click', function (e) {
    console.log(e.target,e.target.tagName,e.target.parentNode.tagName);
    if(e.target.tagName === 'IMG'&&e.target.parentNode.tagName==='DIV'){
        var nowLi=e.target.parentNode;
        var nowCon=document.getElementsByClassName("player-items"+ nowLi.index)[0];
        document.documentElement.scrollTop =  nowCon.offsetTop -60;
    }
});
$(function(){
    // 返回顶部
    $(".o-go-top").click(function() {
        $('body,html').animate({
          scrollTop: 0
        },
        500);
        return false;
      });
})