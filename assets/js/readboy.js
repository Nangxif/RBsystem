$(function(){
    // 顶部菜单栏
	$(".readboy-nav-list-item.readboy-nav-list-self li a").on("mouseover",function(){
        $(this).next().css({"display":"block"});
    })
    $(".readboy-nav-list-item.readboy-nav-list-self li a").on("mouseout",function(){
        $(this).next().css({"display":"none"});
    })
    $(".readboy-nav-list-item.readboy-nav-list-self li ul").on("mouseover",function(){
        $(this).css({"display":"block"});
    })
    $(".readboy-nav-list-item.readboy-nav-list-self li ul").on("mouseout",function(){
        $(this).css({"display":"none"});
    })


    $("button[data-dropdown='dropdown']").on("click",function(){
        if($(".readboy-nav-list").css("display")=="none"){
            $(".readboy-nav-list").removeClass("rhidden");
            $(".readboy-nav-list").addClass("show");
        }else{
            $(".readboy-nav-list").removeClass("show");
            $(".readboy-nav-list").addClass("rhidden");
        }
    })




    // 侧边栏
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





    // 回到顶部
    var e = $("#rocket-to-top"),
    t = $(document).scrollTop(),
    n,
    r,
    i = !0;
    $(window).scroll(function() {
        var t = $(document).scrollTop();
        t == 0 ? e.css("background-position") == "0px 0px" ? e.fadeOut("slow") : i && (i = !1, $(".level-2").css("opacity", 1), e.delay(100).animate({
            marginTop: "-1000px"
        },
        "normal",
        function() {
            e.css({
                "margin-top": "-125px",
                display: "none"
            }),
            i = !0
        })) : e.fadeIn("slow")
    }),
    e.hover(function() {
        $(".level-2").stop(!0).animate({
            opacity: 1
        })
    },
    function() {
        $(".level-2").stop(!0).animate({
            opacity: 0
        })
    }),
    $(".level-3").click(function() {
        function t() {
            var t = e.css("background-position");
            if (e.css("display") == "none" || i == 0) {
                clearInterval(n),
                e.css("background-position", "0px 0px");
                return
            }
            switch (t){
            case "0px 0px":
                e.css("background-position", "-298px 0px");
                break;
            case "-298px 0px":
                e.css("background-position", "-447px 0px");
                break;
            case "-447px 0px":
                e.css("background-position", "-596px 0px");
                break;
            case "-596px 0px":
                e.css("background-position", "-745px 0px");
                break;
            case "-745px 0px":
                e.css("background-position", "-298px 0px");
            }
        }
        if (!i) return;
        n = setInterval(t, 50),
        $("html,body").animate({scrollTop: 0},"slow");
    });



    // 标签页
    $(".readboy-tabs").on("click",".readboy-tab-item>li",function(){
        $(this).parent().find("li").removeClass("active");
        $(this).addClass("active");
        $(this).parents(".readboy-tab").find(".readboy-tab-content-item").removeClass("active");
        $(this).parents(".readboy-tab").find(".readboy-tab-content-item[id='"+$(this).find("a").data("href").slice(1)+"']").addClass("active");
    })
})