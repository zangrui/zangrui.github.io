$(function () {
    /**
     * 全选功能实现：
     *  1）给全选按钮绑定事件 点击全选 全选要选中(两个都要选中) （checked 为 true）
     *  2) 点击全选 所有的商品列表的单选都需要选中
     */
    $(".allSelect").on("change", function () {
        // 声明一个变量 保存全选框的状态
        var selectState = $(this).prop("checked");
        // 两个全选框都应该和这个状态关联（选中的时候 都一起选中 没有选中 都一起不被选中）
        $(".allSelect").prop("checked", selectState);
        // 所有的单选框都需要被选中 （都和全选的状态关联）
        $(".singleSelect").prop("checked", selectState);
        // 触发总计
        total();
    });

    /**
     * 只有有一个单选框不被选中 那么全选应该取消
     *  1）给所有的单选框都绑定事件 （点击 change）
     *  2）获取所有的单选框（类数组结构）
     *  3）循环遍历所有的单选框 
     *  4）如果有一个不被选中 那么就取消全选
     */
    $(".singleSelect").on("change", function () {
        // 定一个标识
        var flag = true;
        $(".singleSelect").each(function (index, input) {
            // 如果有一个没有被选中 那么就把 flag 变为 false
            if (!$(input).prop("checked")) {
                flag = false;
                // 跳出循环
                return;
            }
        });

        // 循环结束 得到flag的状态 只要有一个不被选中 flag就是false（不是全选） 否则就是true（全选）
        // 重新设置全选框的状态
        $(".allSelect").prop("checked", flag);
        // 取消选中 也触发
        total();
    });

    /**
     * 增加功能的实现
     * 1) 给增加按钮 + 号 绑定点击事件
     * 2) 获取后面的输入框的值 
     * 3) 自增
     * 4）把自增后的值 重新赋值给后面的输入框
     */
    $(".add").on("click", function () {
        // 获取后面输入框的值
        var num = $(this).prev().val();
        // 自增
        num++;
        // 把自增后的值 重新复制给后面的输入框
        $(this).prev().val(num);

        // 调用小计函数 需要两个参数 价格和数量  
        // 数据可以直接获取  价格 需要通过当前点击的对象 this 向上查找到当前行 tr 再向下查找 .singlePrice
        subTotal(this, num);

        // 调用总计
        total();
    });

    /**
     * 减少功能的实现
     * 1）给减少按钮绑定点击事件
     * 2）获取前面输入框的值
     * 3）自减
     * 4）边界判断（num的值最小是1 如果num小于1 那么重置为1）
     * 5）把自减后的值 重新赋值给前面的输入框
     */
    $(".reduce").on("click", function () {
        // 获取前面输入框的值
        var num = $(this).next().val();
        // 自减
        num--;
        num = num < 1 ? 1 : num;
        // 把自减后的值 重新赋值给前面的输入框
        $(this).next().val(num);
        // 调用小计函数
        subTotal(this, num);
        // 调用总计
        total();
    });

    /**
     * 输入框失去焦点 触发小计
     */
    $(".num").on("blur", function () {
        // 调用小计函数
        subTotal(this, $(this).val())
        // 调用总计
        total();
    });

    /**
     * 小计函数的封装
     *    1） 计算小计 需要商品的数量和单价
     */
    function subTotal(obj, num) {
        // 获取商品单价
        var singlePrice = $(obj).closest("tr").find(".singlePrice").text();
        // 计算小计的价格
        var subTotal = (singlePrice * num).toFixed(2);
        // 把小计的价格 放入对应的dom位置（小计的dom盒子）
        $(obj).closest("tr").find(".subTotal").text(subTotal);
    }

    /**
     * 总计：
     * 1） 计算选中的商品总数量 allNum
     * 2)  计算选中的商品总价格 allPrice
     */
    function total() {
        // 声明两个边路 用于保存选中的商品的总数量 和 总价格
        var allNum = 0,
            allPrice = 0;
        // 选中所有的单选框 遍历 如果是被选中的状态 那么就要累加他的数量 也要累加他的小计价格
        $(".singleSelect").each(function (index, input) {
            // 如果是选中的状态
            if ($(input).prop("checked")) {
                // 累加数量
                allNum += parseFloat($(this).closest("tr").find(".num").val());
                // 累加小计的价格
                allPrice += parseFloat($(this).closest("tr").find(".subTotal").text());
            }
        });
        // 把总数量 和 总价格 放入对应的dom容器
        $(".allNum").text(allNum);
        $(".allPrice").text(allPrice.toFixed(2)) // 价格需要小数后保留2位

    }


    //删除
    $(".del").on("click",function(){
        $(this).closest("tr").remove();
        total();
    });
    //删除选中的
    $(".account .accountLeft span").on("click",function(){
        $(".singleSelect").each(function (index, input) {
            // 如果是选中的状态
            if ($(input).prop("checked")) $(input).closest("tr").remove();
        });
    });
});