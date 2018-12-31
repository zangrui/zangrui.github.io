$(function() {
     //初始化插件
     
     $("#myform").validate({
        //制定的规则
        
        rules : {
            username : {
                required : true,
                minlength: 6,
            },
            pwd : {
                required : true, 
                rangelength : [6,12],
            },
            pwd1 : {
                required : true, 
                equalTo : "#pwd",
            },
            tel : {
                required : true, 
                number:true,
                rangelength : [11,11],
            },
            yzm : {
                required : true,
                rangelength : [4,4],
            },
            sjyzm : {
                required : true, 
                number:true,
            }

        },
        //每个规则对应的提示信息
        messages : {
            username : {
                required : "请输入用户名",
                minlength: "用户名至少由6个字母组成"
            },
            pwd : {
                required : "请输入密码",
                rangelength : "请输入6-12位的密码"
            },
            pwd1 : {
                required : "请再次输入密码",
                equalTo : "两次密码不一致"
            },
            tel : {
                required : "请输入手机号码",
                number : "必须是数字",
                rangelength : "请输入11位的手机号"
            },
            yzm : {
                required : "请输入验证码",
                rangelength : "请输入4位的验证码"
            },
            sjyzm : {
                required : "请输入手机验证码",
                number : "必须是数字"
            }
        }
    });
});