$(function(){
	// 控制右上角个人中心显示隐藏
    $("*[data-toggle='readboy-dropdown']").on("mouseover",function(){
            $(this).next().css("display","block");
    })
    $("*[data-toggle='readboy-dropdown']").on("mouseout",function(){
            $(this).next().css("display","none");
    })
    $("*[data-toggle='readboy-dropdown']").next().mouseover(function(){
        $(this).css("display","block");
    })
    $("*[data-toggle='readboy-dropdown']").next().mouseout(function(){
        $(this).css("display","none");
    })





    $(".readboy-menu-item").on("click",function(e){
        e.stopPropagation();
        if($(this).find(".readboy-menu-ul").length>0){
            if($(this).children(".readboy-menu-ul").css("display")=="none"){
                $(this).children("a").find("i").attr({"class":"glyphicon glyphicon-folder-open"});
                $(this).children("a").find("span").css({"transform":"rotate(180deg)"});
                $(this).children(".readboy-menu-ul").slideDown();
            }else{
                $(this).children("a").find("i").attr({"class":"glyphicon glyphicon-folder-close"});
                $(this).children("a").find("span").css({"transform":"rotate(0deg)"});
                $(this).children(".readboy-menu-ul").slideUp();
            }
        }
        $(this).parents(".readboy-menu").find(".readboy-menu-item").removeClass("readboy-menu-item-active");
        $(this).addClass("readboy-menu-item-active");
    });
})