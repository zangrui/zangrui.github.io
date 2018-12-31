$(function(){
    //banner轮播
    $("#bannerBox").slider({
        boxh: 430,//盒子的高度
        w: 1000,//盒子的宽度
        h: 400,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 3,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 24,//控制按钮宽度
        controlsH: 24,//控制按钮高度
        radius: 12,//控制按钮圆角度数
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
        isShowNum: true //是否显示数字
    }); 

    // 热卖畅销书列表手风琴
    $("#banner .booksList>ul>li").mouseenter(function () {
        // 所有li高度变为40px
        $("#banner .booksList>ul>li").stop().animate({
            "height":40
        },100);
        // 当前li高度变为123px
        $(this).stop().animate({
            "height":123
        },100);
    });

    
    //新书热销榜手风琴
    $("#newBook .ebooksRight>ul>li").mouseenter(function () {
        // 把所有的li下面的标题都显示
        $("#newBook .ebooksRight>ul>li .newBookTile").removeClass("none");
        // 把所有的li下面的详情都隐藏
        $("#newBook .ebooksRight>ul>li .newBookDetail").removeClass("block");
        // 当前选中标题隐藏
        $(".newBookTile",this).addClass("none");
        // 当前选中详情显示
        $(".newBookDetail",this).addClass("block");       
    });


    //独家提供轮播 
    $("#exclusive .pptbox").slider({
        boxh: 515,//盒子的高度
        w: 1200,//盒子的宽度
        h: 500,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 2,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 16,//控制按钮宽度
        controlsH: 16,//控制按钮高度
        radius: 8,//控制按钮圆角度数
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
        isShowNum: true //是否显示数字
    }); 
    // 独家提供tab切换
    $("#exclusive .sectionTitleBox>ul>li").mouseenter(function () { 
        $("#exclusive .sectionTitleBox>ul>li").removeClass("active");
        $(this).addClass("active");
        $("#exclusive .content> .pptbox").hide().eq($(this).index()).show();
    });

    // 猜你喜欢换一换 
    //定义变量
    var num = 0; 
    $("#guessYouLike .sectionTitleBox h3 img").click(function(){
        num++;
        if(num>2){
            num=0;
        }
        $("#guessYouLike .showBook").stop().animate({"top" : -num*500},1000);
    });


    //固定在顶部的搜索栏
    $(`<div class="topSearchInput"></div>`).appendTo("body");
    $("#header .searchShopCart .searchInput").clone().appendTo(".topSearchInput");
    $('<span class="logo">legou</span>').appendTo(".topSearchInput .searchInput");
    $(".searchInput").eq("1").removeClass("fr").css({
        "margin":"7px auto","width":"550px"}).find("input").css({"width":"498px"});
    $(window).on('scroll', function () {
        // 获取当前窗口到顶部的距离
        var distanceTop = $(this).scrollTop();
        // 如果当前窗口到顶部的距离大于600
        if (distanceTop > 600) {
            // 那么顶部的搜索栏 就 掉（慢慢的）下来
            $(".topSearchInput").slideDown();
        } else {
            // 那么顶部的搜索栏 就 收上去（慢慢的）下来
            $(".topSearchInput").slideUp();
        }
        //领券中心滑动
        $(".discountcoupon").animate({
			"top": 250 + distanceTop
		}, 30);
    });

    // 右侧领券中心
    $(`<div class="discountcoupon">
            <div class="top">
                <img src="img/two_30.jpg" alt="">
            </div>
            <div class="center">
                <img src="img/two_35.jpg" alt="">
            </div>
            <div class="bottom">
                <span>26</span>
                <img src="img/two_40.jpg" alt="">
            </div>
            <img src="img/two_34.jpg" alt="">
        </div>`).appendTo('body');
    $(".discountcoupon .center").hover(function(){
        $(".discountcoupon > img").stop().animate({
			"right": 40
		}, 500);
    },function(){
        $(".discountcoupon > img").stop().animate({
			"right": -60
		}, 500);
    });
});