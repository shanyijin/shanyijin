$(".number span").click(e=>{
    target=e.target;
    if($(target).html()=="+"){
        a=parseInt($(target).prev().val())+1
        $(target).prev().val(`${a}`)
        price=parseInt($(".pri").html()) 
        var z=a*price
        $(".sum_price").html(`${z}`)
        $("#total_money").html(`${z}`)
    }else{
        if(parseInt($(target).next().val())>1){
            a=parseInt($(target).next().val())-1
            $(target).next().val(`${a}`)
            price=parseInt($(".pri").html()) 
            var z=a*price
            $(".sum_price").html(`${z}`)
            $("#total_money").html(`${z}`)
        }   
    }
})

$(".i_Btn_big").click(e=>{
    $(".zfb").toggle()
})