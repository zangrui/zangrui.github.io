$(function () {
    $("#main .loginform .top span").click(function () {
        $("#main .loginform .top span").removeClass("active");
        $(this).addClass("active");
        $("#main .loginform .box .sm").hide().eq($(this).index()).show();
    });

    $("#main .loginform .box .sm .lfetimg").hover(function () {
        $(this).stop().animate({
            "left": -70
        }, 30);
        $("#main .loginform .box .sm .rightimg").show();
    }, function () {
        $(this).stop().animate({
            "left": -0
        }, 30);
        $("#main .loginform .box .sm .rightimg").hide();
    });
});