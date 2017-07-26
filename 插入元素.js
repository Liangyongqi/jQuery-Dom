/**
 * Created by dell liangyq on 2017/7/19.
 */
/**
 * append after在被选中元素的末尾插入元素
 * preappend before在被选中元素的开头插入元素
 */
$(document).ready(function () {
$("#btn1").click(function () {
    $("#pid1").append(" this is my webpage")
});
    $("#btn2").click(function () {
        $("#pid2").before(" this is");//换行添加
    });
});
function appendText() {
    /**
     * html,jQuery,DOM
     */
    var text1="<p>nihao</p>";
    var text2=$("<p></p>").text("dajiahao");
    var text3=document.createElement("p");
innerHTML("womenhao")
    $("body").append(text1,text2,text3);

}