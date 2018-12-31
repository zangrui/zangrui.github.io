$(function(){
    //banner轮播
    $("#bannerBox").slider({
        boxh: 448,//盒子的高度
        w: 1000,//盒子的宽度
        h: 418,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 20,//控制按钮高度
        radius: 10,//控制按钮圆角度数
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
        isShowNum: true //是否显示数字
    }); 

    //图书tab切换
    var $lis = $("#ebooks .ebooksLeft .ebooksTitle>ul>li");
    $lis.mouseenter(function () { 
        $lis.removeClass("active");
        $(this).addClass("active");
        $("#ebooks .ebooksLeft .ebooksContent .ebooksRightList>ul").hide().eq($(this).index()).show()
    });
    //图书轮播
    $(".pptSlider").slider({
        boxh: 216,//轮播的高度
        w: 330,//图片的宽度
        h: 216,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 14,//控制按钮宽度
        controlsH: 2,//控制按钮高度
        radius: 0,//控制按钮圆角度数
        controlsColor: "#fff",//普通控制按钮的颜色
        controlsCurrentColor: "#7f7f7f",//当前控制按钮的颜色
        isShowNum: true //是否显示数字
    });
    
    //新书热销榜手风琴
    $("#ebooks .ebooksRight>ul>li").mouseenter(function () {
        // 把所有的li下面的标题都显示
        $("#ebooks .ebooksRight>ul>li .newBookTile").removeClass("none");
        // 把所有的li下面的详情都隐藏
        $("#ebooks .ebooksRight>ul>li .newBookDetail").removeClass("block");
        // 当前选中标题隐藏
        $(".newBookTile",this).addClass("none")
        // 当前选中详情显示
        $(".newBookDetail",this).addClass("block");       
    })

    //服装轮播
    $(".clothesSlider").slider({
        boxh: 338,//轮播的高度
        w: 424,//图片的宽度
        h: 338,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 14,//控制按钮宽度
        controlsH: 2,//控制按钮高度
        radius: 0,//控制按钮圆角度数
        controlsColor: "#fff",//普通控制按钮的颜色
        controlsCurrentColor: "#7f7f7f",//当前控制按钮的颜色
        isShowNum: true //是否显示数字
    });
    //服装tab切换
    var $lis1 = $("#clothes .sectionTitleBox>ul>li");
    $lis1.mouseenter(function () { 
        $lis1.removeClass("active");
        $(this).addClass("active");
        $("#clothes .rightList>ul").hide().eq($(this).index()).show();
    });
     //运动户外tab切换
     var $lis2 = $("#sports .sectionTitleBox>ul>li");
     $lis2.mouseenter(function () { 
         $lis2.removeClass("active");
         $(this).addClass("active");
         $("#sports .rightList>ul").hide().eq($(this).index()).show();
    });
    //童装tab切换
    var $lis3 = $("#childrenClothes .sectionTitleBox>ul>li");
    $lis3.mouseenter(function () { 
         $lis3.removeClass("active");
         $(this).addClass("active");
         $("#childrenClothes .rightList>ul").hide().eq($(this).index()).show()
    });

    //推广商品交互
    $("#promotion .sectionTitleBox span").mouseenter(function(){
        //清除所有激活类
        $("#promotion .sectionTitleBox span").removeClass("active");
        //激活当前
        $(this).addClass("active");
        //内容切换
        //获取索引
        var index = $(this).index();
        //切换
        $("#promotion .promotionList .promotionListwrapper").stop().animate({"left" : -index*1200},1000);
    });

    //回到顶部
    scrollTop.appendToBody({
    width: "30px", // 盒子宽度
    height: "52px", // 盒子高度
    backgroundColor: "#ccc", // 背景颜色
    position: "fixed", // 定位
    top: "650px", // 距离顶部位置
    marginRight: "-640px",  // 距离中心位置偏移
    right: "50%", // 定位距离右侧
    display: "none", // 默认隐藏
    imgUrl: "./img/gototop_05.jpg" // 图片地址
    });
    scrollTop.bindScroll();


    //左侧楼层跳转
    $('.floor > ul > li').hover(function () {
        // 定义颜色数组
		var bgColor = ["red", "#93d46f", "#f65727", "#bb9dee", "#ff7394", "#c2ec51", "#ff6600"];
		// 获取索引
		var index = $(this).index();
		// 移入效果
		// 背景色改变 背景图改变
		$(this).css({
			"background-color": bgColor[index],
			"background-position-x": -40
		});

		// 让li的宽度 慢慢增加 增加到 80px
		$(this).animate({
            "width": 80
		}, 150);

	}, function () {
		// 鼠标移出效果
		// 让li的宽度 慢慢的变为 40px
		$(this).animate({
            "width": 40
		}, 150, function () {
			// 背景颜色清空
			// 背景图回到原来的位置
			$(this).css({
				"background-color": "",
				"background-position-x": 0
			});
		});
	}).click(function () {
		// 点击左侧楼层li 
		// 获取当前点击的li的索引
		var index = $(this).index();
		// 获取当前点击的版块到顶部的距离
		var distanceTop = $('.floorWrapper').eq(index).offset().top;

		// 让整个页面 滚动到这个位置 （滚动条向下滚动相同的距离）
		$("html, body").animate({
			"scrollTop": distanceTop - 60
        }, 500);
    });
    $(window).on('scroll', function () {
        // 获取当前窗口到顶部的距离
        var distanceTop = $(this).scrollTop();
        // 如果当前窗口到顶部的距离大于300
        if (distanceTop > 300) {
            $(".floor").fadeIn();
        } else {
            $(".floor").fadeOut();
        }
        //滑动
        $(".floor").animate({
			"top": 250 + distanceTop
        }, 30);
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