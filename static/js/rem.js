var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
(function(){
    var htmlSize = 100*(width/828)+"px";
    // document.documentElement.css("font-size",htmlSize)
    document.documentElement.style['font-size'] = htmlSize;
})();