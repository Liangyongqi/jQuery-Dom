/**
 * Created by dell liangyq on 2017/7/19.
 */
$(document).ready(function () {
    // $("#btn1").click(function () {
    //     alert($("#text").text());
    // });

    // $("#btn1").click(function () {
    //     alert($("#text").html());//可以获取内部的子标签
    // });

    $("#btn1").click(function () {
        alert($("#it").val());//可以获取内部的子标签
    });
    $("#btn2").click(function () {
        alert($("#aid").attr("href"));
    });
    $("#btn3").click(function () {
        alert($("#text").html("<a href='http://www.baidu.com'>百度</a>"));
    });
    $("#btn4").click(function () {
        // $("#aid2").attr("href","http://www.jikexueyuan.com");
        $("#aid2").attr({
            "href":"http://www.jikexueyuan.com",
            "title":"hello"

        });
    });

    $("#btn5").click(function () {
        $("#p5").text(function (i, od) {
            return "old："+od+" new:这是新的内容"+i;//回调，i是一个下标，一般为0，od是原先的内容
        })
    });
});