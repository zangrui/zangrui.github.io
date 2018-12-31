$(function(){
    $("#main .paymentMethod ul li").on('click',function(){
        $(this).toggleClass('active').siblings().removeClass('active');
    });
    $(".submit a").on('click',function(){
            //获取当前网页宽度与高度
            let width = $(window).width();
            let height = $(window).height();
            //创建内容
            
            $(`<div class="mc">
                    <div class="box">
                        <div class="top">
                            <span>确认付款</span>
                            <span class="fr x">✖</span>
                        </div>
                        <img src="img/tjdd.jpg" alt="" width="100%">
                        <button class="btn1">取消</button>
                        <a href="cashier.html"><button class="btn">确定</button></a>
                    </div>
                </div>
            `).appendTo("body");

        $(".mc").css({
            "width":width,
            "height":height,
            "background":'rgba(0,0,0,.5)',
            "position":'fixed',
            "top":0,
            "left":0
        });
        
        $(".mc .x").on('click',function(){
            $(".mc").remove();       
        });
        $(".mc .btn1").click(function(){
            $(".mc").remove();
        });
        $(".mc .btn").on('click',function(){
            $(".mc").remove();
        });
       
    });


});