//轮播
$("#bannerBox").slider({
    boxh: 474,//轮播的高度
    w: 720,//图片的宽度
    h: 474,//图片的高度
    isShow: true,//是否显示控制器
    isShowBtn: true,//是否显示左右按钮
    controltop: 5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 12,//控制按钮宽度
    controlsH: 12,//控制按钮高度
    radius: 6,//控制按钮圆角度数
    controlsColor: "#fff",//普通控制按钮的颜色
    controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
    isShowNum: true //是否显示数字
});