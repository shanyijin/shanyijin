$(".dl").click(e=>{
    $(".popup").attr("style","display:block")
})
$(".cart").click(e=>{
    $(".popup").attr("style","display:block")
})
$(".clo").click(e=>{
    $(".popup").attr("style","display:none")
    $(".sign_in").attr("style","display:none")

})

$(".zc").click(e=>{
    $(".sign_in").attr("style","display:block")
})

$(".sign_in .yong").blur(e=>{
    $.getJSON("http://192.168.1.139/%e9%98%b4%e9%98%b3%e5%b8%88/php/index.php?rcj=?",'hide=13',(data)=>{
        for(let i=0;i<data.length;i++){
            if($(".sign_in .yong").val()==data[i]){
                console.log(data[i])
                console.log($(".sign_in .yong").val())
                $(".sign_in .yong").next().html("已被使用");
                $(".sign_in .yong").next().css("color","red");
                break;
            }else{
                $(".sign_in .yong").next().html("用户可用");
                $(".sign_in .yong").next().css("color","green");
            }
        }
    })
});
$(".f_yong").submit(()=>{
    if($(".sign_in .yong").next().css("color")=="rgb(255, 0, 0)"){
        return false;
    }
})







