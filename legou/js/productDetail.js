$(function(){
    //放大镜
     //需求： 宽度：400  高度：340
     $(function() {

        var magnifierConfig = {
            magnifier : "#magnifier1",//最外层的大容器
            width : 350,//承载容器宽
            height : 360,//承载容器高
            moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
            zoom :2//缩放比例
        };

        var _magnifier = magnifier(magnifierConfig);
        /*magnifier的内置函数调用*/
        /*
            //设置magnifier函数的index属性
            _magnifier.setIndex(1);

            //重新载入主图,根据magnifier函数的index属性
            _magnifier.eqImg();
        */
    });



    // 种类选择
    $('#productDetail .productbox .rightBox .type span').on('click',function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    });




    //购物车数量加减
    //增加
    $('#add').on('click' , function(){
        //获取商品原来的数量
        let num = $('#shopNum').val();
        //自增1
        num++;
        //把自增后的值赋值给shopNum
        $('#shopNum').val(num)
        //判断
        if(num > 1){
            $('#reduce').css('cursor' ,"default");
            $('#reduce').prop('disabled',false);
        }
    });
    //减小
    $('#reduce').on('click', function(){
        //获取商品原来的数量
        let num = $('#shopNum').val();
        //自减1
        num--;
        //判断
        if(num <= 1){
            num = 1;
            $(this).css('cursor' ,"not-allowed");
            $(this).prop('disabled',true);
        }
        //把自减后的值赋值给shopNum
        $('#shopNum').val(num);
    });


    //商品评价tab切换
    $("#content .sectionTitleBox>ul>li").click(function () { 
        $("#content .sectionTitleBox>ul>li").removeClass("active");
        $(this).addClass("active");
        $("#content .right .tab").hide().eq($(this).index()).show();
    });
});


    

