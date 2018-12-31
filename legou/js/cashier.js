$(function(){

    $("#main ul li:lt(2)").on('click',function(){
        $(this).toggleClass('active').siblings().removeClass('active');
    });

    //获取当前网页宽度与高度
    let width = $(window).width();
    let height = $(window).height();
    $(".paybtn button").on('click',function(){
        if($("#main ul li:eq(0)").hasClass("active")){
            //创建内容
            $(`<div class="mc">
                    <div class="box">
                        <div class="top">
                            <span>支付结果</span>
                            <span class="fr x">✖</span>
                        </div>
                        <img src="img/zfsb.jpg" alt="" width="100%">
                        <button class="btn">确定</button>
                    </div>
                </div>
            `).appendTo("body");
            
        }else if($("#main ul li:eq(1)").hasClass("active")){
            //创建内容
            $(`<div class="mc">
                    <div class="box">
                        <div class="top">
                            <span>支付结果</span>
                            <span class="fr x">✖</span>
                        </div>
                        <img src="img/zfwc.jpg" alt="" width="100%">
                        <a href="memberCenter.html"><button class="btn">确定</button></a>
                    </div>
                </div>
            `).appendTo("body");
        }

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
        $(".mc .btn").on('click',function(){
            $(".mc").remove();       
        });
    });
  
});
