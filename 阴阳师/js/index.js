/* 此乃头部顶条 */
// 滚动监听
$(document).scroll(() => {
    if ($(document).scrollTop() > 70) {
        $(".top_nav").css({
            "position": "fixed",
            "top": "0",
            "left": "0"

        })
    } else {
        $(".top_nav").css({
            "position": "static"
        })
    }
})
// 基础动画
$(".top_nav>ul>li").mouseover((e) => {
    target = e.target
    $(target).removeClass("a_aft");
    $(".top_nav >.nav_warp").removeClass("hide")
    // 显示对应数据
    let k = $(target).parent().index();
    $(".top_nav .nav_warp .nav_item").attr("style", "display: none");
    $($(".top_nav .nav_warp  .nav_item")[k]).attr("style", "");
})
$(".top_nav>ul>li").mouseout((e) => {
    target = e.target
    $(target).addClass("a_aft");
    $(".top_nav >.nav_warp").addClass("hide")
})

$(".top_nav >.nav_warp").mouseover((e) => {
    $(".top_nav >.nav_warp").removeClass("hide")
})
$(".top_nav >.nav_warp").mouseout((e) => {
    $(".top_nav >.nav_warp").addClass("hide")
})

/* 此乃banner定时器 */
let count = 0;
let timer = null;
imgs_banner = ["../img/yys1.jpg", "../img/yys2.jpg", "../img/yys3.jpg"]
timer = setInterval(() => {
    count++
    if (count == imgs_banner.length) {
        count = 0;
    }
    $(".top_banner").prepend($(`<img class="" src="${imgs_banner[count]}">`))
    $(".top_banner img").animate({
        opacity: "0",
    }, 500, () => {
        $(".top_banner img:eq(0)").animate({
            opacity: "1",
        }, 500, () => {
            $(".top_banner img:eq(2)").remove()
        })
    })
}, 10000);

/* 此乃banner二维码滚动条 */
$er_wei = $(".banner-wrap .bot_er img:eq(1)");
erw()

function erw() {
    $er_wei.animate({
        top: "93px"
    }, 2000, () => {
        $er_wei.animate({
            top: "0px"
        }, 2000, () => {
            erw()
        })
    })
}

/* 此乃bot_banner */
let count1 = 0;
timer2 = null;
$(".bot_rt .rt_banner >div span").click(e => {
    target = e.target
    if ($(target).html() == "下一批") {
        bot_ban(1);
    } else if ($(target).html() == "上一批") {
        bot_ban(-1);
    }
})
function bot_ban(a) {
    count1 += a;
    if (count1 == 4) {
        count1 = 0;
    } else if (count1 == -1) {
        count1 = 3;
    }
    $(".bot_rt .rt_banner >ul").stop().animate({
        "left": count1 * -100 + "%",
    }, 500)
}
timer2 = setInterval(function () {
    bot_ban(1);
}, 7500);
$(".bot_rt .rt_banner").mouseover(() => {
    clearInterval(timer2);
})
$(".bot_rt .rt_banner").mouseout(() => {
    timer2 = setInterval(function () {
        bot_ban(1);
    }, 7500);
})

/* 此乃section_con */
// 大table
$(".section_con .world_tab li").click((e) => {
    target = e.target;
    $(target).siblings().removeClass("on");
    $(target).addClass("on");
    $in = $(target).index();
    $(".word_box .container").attr("style", "display:none");
    $($(".word_box .container")[$in]).attr("style", "display:block");

})

// 式神
$(".section_con .ss_tabs >a").click(e => {
    target = e.target;
    // console.log($(target).index())
    if($(target).index()!=0){
        $(".ss_prev").attr("style","display:none")
        $(".ss_next").attr("style","display:none")
    }else{
        $(".ss_prev").attr("style","display:none")
        $(".ss_next").attr("style","display:block")
    }
    $(target).siblings().removeClass("cur");
    $(target).addClass("cur");
    $in = $(target).index()
    // 式神分类
    $($(".section_con .ss_all section")[$in]).siblings().attr("style", "none")
    $($(".section_con .ss_all section")[$in]).attr("style", "display:block")

})
$(".section_con .shi_s_control .ss_next").click(e=>{
    console.log($(".section_con .shi_s_control .ss_next"))
    if($(".section_con .ss_all .show_ul").next()[0]!=undefined){
        $(".section_con .shi_s_control .ss_next").prev().attr("style","display:block")
        $(".section_con .ss_all .show_ul").removeClass("show_ul");
        $(".section_con .ss_all .change").next().addClass("show_ul");
        $(".section_con .ss_all .change").removeClass("change");
        $(".section_con .ss_all .show_ul").addClass("change");
        if($(".section_con .ss_all .show_ul").next()[0]==undefined){
            $(".section_con .shi_s_control .ss_next").attr("style","display:none")
        }
    };
})
$(".section_con .shi_s_control .ss_prev").click(e=>{
    if($(".section_con .ss_all .show_ul").prev()[0]!=undefined){
        $(".section_con .shi_s_control .ss_prev").next().attr("style","display:block")
        $(".section_con .ss_all .show_ul").removeClass("show_ul");
        $(".section_con .ss_all .change").prev().addClass("show_ul");
        $(".section_con .ss_all .change").removeClass("change");
        $(".section_con .ss_all .show_ul").addClass("change");
        if($(".section_con .ss_all .show_ul").prev()[0]==undefined){
            $(".section_con .shi_s_control .ss_prev").attr("style","display:none")
        }
    };
})

// 主角录
$(".section_con .yys_all").click((e) => {
    target = e.target;
    if (target.nodeName == "SPAN") {
        $(target).parent().siblings().removeClass("on");
        $(target).parent().addClass("on");
        $in = $(target).parent().index()
        $(".section_con .yys_all .qm").attr("style", "display:none")
        $($(".section_con .yys_all .qm")[$in]).attr("style", "display:block")
    }
})


/* 此乃游戏攻略 */
// strategy-top
$(".strategy-top").stop().mouseover(e => {
    target = e.target;
    if (target.nodeName == "IMG") {
        $(target).next().animate({
            top: "13px"
        }, 100)
        $(target).next().next().animate({
            top: "35px"
        }, 100)
    }
})
$(".strategy-top").stop().mouseout(e => {
    target = e.target;
    if (target.nodeName == "IMG") {
        $(target).next().animate({
            top: "0px"
        }, 100)
        $(target).next().next().animate({
            top: "22px"
        }, 100)
    }
})
// strategy-center+strategy-bot
$(".strategy-center").mouseover(e => {
    target = e.target;
    if (target.nodeName == "A") {
        $in = $(target).parent().index()
        $(target).parent().siblings().addClass("aft");
        $(target).parent().siblings().removeClass("on");
        $(target).parent().addClass("on");
        $(target).parent().removeClass("aft")

        $(".clr_con").attr("style", "display: none");
        $($(".clr_con")[$in]).attr("style", "display: block");
    }
})

/* 泛娱乐 */
// 拟轮播
let count2 = 0;
$(".fan .fun_btn_right").click(e => {
    target = e.target
    fan(1);
})
$(".fan .fun_btn_left").click(e => {
    target = e.target
    fan(-1);
})
function fan(a) {
    count2 += a;
    $(".fan .fun_btn_right").attr("style", "display:block")
    $(".fan .fun_btn_left").attr("style", "display:block")

    if (count2 == 5) {
        $(".fan .fun_btn_right").attr("style", "display:none")
    } else if (count2 == 0) {
        $(".fan .fun_btn_left").attr("style", "display:none")
    }
    $(".fan .fun_box ul").stop().animate({
        "left": count2 * -230,
    }, 500)
}

/* 京都商业街-拖动 */
$(".business .t_k").mousedown(e => {
    target = e.target;
    //按下鼠标的时候，记录拖块儿相对横条儿移动的距离
    let left_val = e.clientX - $(".c_t").offset().left;
    // 拖块儿跟横条左侧的间距
    let spacing = $(".t_k").offset().left - $(".c_t").offset().left;
    $(document).mousemove(e => {
        target = e.target;
        //拖块儿移动的距离
        let mov = e.clientX - $(".c_t").offset().left - left_val + spacing;
        $(".business ul").animate({
            "right": `${mov}` * 7020 / 920 + "px",
        }, 0)
        $(".business .t_k").animate({
            "left": `${mov}` + "px",
        }, 0)
        if (mov > 920) {
            $(".business .t_k").animate({
                "left": "920px",
            }, 0)
            $(".business ul").animate({
                "right": 920 * 7020 / 920 + "px",
            }, 0)
        } else if (mov < 0) {
            $(".business .t_k").animate({
                "left": "0px",
            }, 0)
            $(".business ul").animate({
                "right": "0px",
            }, 0)
        }
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty(); //防止选择拖动
    })
    // 解除绑定
    $(document).mouseup(e => {
        $(document).unbind();
    })
})

/* 二维码 */
// let sl=e.clientX;
$(".part_ewm").mousemove(e => {
    $(".part_ewm .role_wrap").attr("style", "background-position: 406px 0px;")

    if (e.clientX < 690) {
        $(".role a").attr("style", "background-position: 0px 0px;")
    } else if (e.clientX < 755) {
        $(".role a").attr("style", "background-position: -203px 0px;")
    } else if (e.clientX < 803) {
        $(".role a").attr("style", "background-position: -406px 0px;")
    } else if (e.clientX < 865) {
        $(".role a").attr("style", "background-position: -609px 0px;")
    } else {
        $(".role a").attr("style", "background-position: -821px 0px;")
    }
})



/* 数据渲染 */
for(let z=0;z<=11;z++){
    $.getJSON("http://192.168.1.139/%e9%98%b4%e9%98%b3%e5%b8%88/php/index.php?rcj=?", `hide=${z}`, (data) => {
        if(z==1){
            // nav下顶条渲染
            k = data.length / 5;
            for (let j = 0; j < k; j++) {
                div = $(`<div class="nav_item"></div>`);
                // 每生成一个div就添加五个a
                let del = data.splice(0, 5);
                for (let i = 0; i < del.length; i++) {
                    $a = $(`<a href="javascript:void(0);" target="_blank"><span>${del[i].span}</span><img src='${del[i].img_url}' alt=""><p>${del[i].p}</p></a>`)
                    $(div).append($a);
                }
                $(".nav_warp .nav_warp_con").append(div)
            }
        }else if(z==0){
            // 新闻随机渲染
            // 随机数
            let arr=[];
            // 渲染内容
            let ne=[];
            let count=data.length;
            while(arr.length<count){
                let ro=parseInt(Math.random()*(count+1-1)+1);
                if(arr.indexOf(ro)==-1){
                    arr.push(ro);
                }
            }
            for(let i=0;i<data.length;i++){
                ne.push((data[arr[i]-1]));
            }
            // queue.remove()
            ne.forEach(val => {
                $li = $(`<li><h2>${val.h2}</h2><p>${val.p}</p><span></span></li>`);
                $(".banner-wrap .bot_rt ul").append($li)
            });
        }else if(z==2){
            // 声优
            k = data.length / 30;
            for (let j = 0; j < k; j++) {
                // 生成分页条
                li = $(`<li class="">${j+1}</li>`);
                // 每生成一个div就添加30个span
                div = $(`<div class="sy" style="display: none"></div>`)
                let del = data.splice(0, 30);
                for (let i = 0; i < del.length; i++) {
                    $span = $(`<span>${del[i].name}</span>`)
                    $(div).append($span);
                }
                $(".section_con .sy_all .tab_bin").before(div);
                $(".section_con .sy_all .tab_sy").append(li);
            }
            // 声优分页条
            $(".section_con .tab_sy li:eq(0)").addClass("on");
            $(".section_con .sy_all .sy:eq(0)").attr("style", "display:block");
            $(".section_con .sy_all .sy:eq(0)").addClass("page");
            $(".section_con .tab_sy li").click((e) => {
                target = e.target;
                $(target).siblings().removeClass("on");
                $(target).addClass("on");
                $(".section_con .sy_all .sy").attr("style", "display:none");
                $($(".section_con .sy_all .sy")[$(target).index()]).attr("style", "display:block");
                $(".section_con .sy_all .sy").removeClass("page");
                $($(".section_con .sy_all .sy")[$(target).index()]).addClass("page");
            })
            // 分页条优化
            // 上一页
            $(".section_con .tab_bin li:eq(1)").click((e) => {
                target = e.target;
                $page = $(".section_con .sy_all .page");
                $on = $(".section_con .tab_sy .on");
                if ($($page).index() > 0) {
                    $(".section_con .tab_sy li").removeClass("on");
                    $($on).prev().addClass("on");
                    $(".section_con .sy_all .sy").attr("style", "display:none");
                    $($(".section_con .sy_all .sy")[$($page).index()]).prev().attr("style", "display:block");
                    $(".section_con .sy_all .sy").removeClass("page");
                    $($(".section_con .sy_all .sy")[$($page).index()]).prev().addClass("page");
                }
            })
            // 下一页
            $(".section_con .tab_end li:eq(0)").click((e) => {
                target = e.target;
                $page = $(".section_con .sy_all .page");
                $on = $(".section_con .tab_sy .on");
                // k-2是因为有小数，小数算一页
                if ($($page).index() <= (k - 2)) {
                    $(".section_con .tab_sy li").removeClass("on");
                    $($on).next().addClass("on");
                    $(".section_con .sy_all .sy").attr("style", "display:none");
                    $($(".section_con .sy_all .sy")[$($page).index()]).next().attr("style", "display:block");
                    $(".section_con .sy_all .sy").removeClass("page");
                    $($(".section_con .sy_all .sy")[$($page).index()]).next().addClass("page");
                }
            })
            // 首页
            $(".section_con .tab_bin li:eq(0)").click((e) => {
                target = e.target;
                $page = $(".section_con .sy_all .page");
                $on = $(".section_con .tab_sy .on");
                $(".section_con .tab_sy li").removeClass("on");
                $(".section_con .sy_all .sy").attr("style", "display:none");
                $(".section_con .sy_all .sy").removeClass("page");
        
                $(".section_con .tab_sy li:eq(0)").addClass("on");
                $(".section_con .sy_all .sy:eq(0)").attr("style", "display:block");
                $(".section_con .sy_all .sy:eq(0)").addClass("page");
            })
            // 尾页
            $(".section_con .tab_end li:eq(1)").click((e) => {
                target = e.target;
                $page = $(".section_con .sy_all .page");
                $on = $(".section_con .tab_sy .on");
                $(".section_con .tab_sy li").removeClass("on");
                $(".section_con .sy_all .sy").attr("style", "display:none");
                $(".section_con .sy_all .sy").removeClass("page");
                $(".section_con .tab_sy li:last-child").addClass("on");
                $(".section_con .tab_bin").prev().attr("style", "display:block");
                $(".section_con .tab_bin").prev().addClass("page");
            })
        }else if(z==3){
            // 游戏攻略
            // strategy-top 
            data.forEach(val => {
                $li = $(`<li><a href="javascript:void(0);" target="_blank"><img src=${val.img_url} alt=""><span class="strategy_tit"><em>${val.em1}</em></span><span class="strategy_bot_tit"><em>${val.em2}</em></span></a></li>`);
                $(".strategy .strategy-top ul").append($li);
            });
        }else if(z==4){
            // 活动
            data.forEach(val => {
                $img = $(`<img class="huo_dong" src=${val.img_url} alt="">`);
                $(".tong_ren .ban_tit_con").after($img);
            });
        }else if(z==5){
            // tong_tab
            data.forEach(val => {
                $img=$(` <div class="rm_img"><img src=${val.img_url}></div>`);
                $zuo=$(` <div class="rm_desc"><p class="rm_tit">${val.p1}</p><p>${val.p2}</p></div><p class="rm_love">${val.p3}</p>`);
                $a=$(`<a href="javascript:void(0);" target="_blank"></a>`)
                $a.append($img);
                $a.append($zuo);
                $li=$(`<li></li>`);
                $li.append($a)
                $(".tong_ren .tong_tab ul").append($li)
            });
        }else if(z==6){
            // strategy-bot（攻略）
            k = data.length / 6;
            for (let j = 0; j < k; j++) {
                ul = $(`<ul class="clr_con"></ul> `);
                // 每生成一个ul就添加五个li
                let del = data.splice(0, 6);
                for (let i = 0; i < del.length; i++) {
                    li=$(`<li class="q_t"><div class="s_con"><p>${del[i].p}</p><span>${del[i].span}</span></div></li>`)
                    $(ul).append(li);
                }
                $(".strategy .strategy-bot").append(ul);
            }    
            $(".strategy .strategy-bot ul:eq(0)").attr("style","display:block")
        }else if(z==7){
            // 视频渲染
            data.forEach(val => {
                // $li=$(`<li><a href="javascript:;" data-href=${val.a}><img src=${val.img_url}><div class="st_name"><i></i>${val.p}</div></a></li>`)
                $li=$(`<li><a href="javascript:;" data-href=${val.a} title=${val.p}><img src=${val.img_url}><div class="st_name"><i></i>${val.p}</div></a></li>`)
                $(".shi_ting .st_box ul").append($li)
            })
            /* 视频播放 */
            $(".shi_ting .st_box ul a").click(e => {
                target = e.target;
                $(".fade").attr("style", "display:block");
                $url = $($(target).parent()).attr("data-href");
                let $div = $(`<div class="video_poo" style="display: block;"><a href="javascript:;" class="close" title="close"></a></div>`)
                let $con = $(`<div class="video_con"><div><video controls="controls" controlslist="nodownload" src=${$url} type="video/mp4"  width="800" height="450" disablepictureinpicture="true" autoplay="autoplay" style="background-color: black;"></video></div></div>`)
                $div.append($con);
                $(".fade").after($div);
                $(".video_poo .close").click(e => {
                    $(".fade").attr("style", "display:none");
                    $($div).remove();
                })
            })
        }else if(z==8){
            // 泛娱乐
            data.forEach(val => {
                $li=$(`<li><a href="javascript:;" ><img  src=${val.img_url}></a></li>`)
                $(".fan .fun_con ul").append($li)
            });

            $(".fan .fun_box ul li").mouseover(e => {
                target = e.target;
                $(target).parent().stop().animate({
                    "margin-top": "-20px",
                }, 200)
            })
            $(".fan .fun_box ul li").mouseout(e => {
                target = e.target;
                $(target).parent().stop().animate({
                    "margin-top": "0px",
                }, 200)
            })
        }else if(z==9){
            // 商业街
            data.forEach(val => {
                $li=$(`<li><a href="javascript:void(0);"><div class="jd_con"><img src=${val.img_url} alt=""></div></div class="line"><div ></div><p>${val.p}</p></a></li>`)
                $(".business .jin_box ul").append($li)
            });
            $(".business .jin_box ul li").mouseover(e => {
                target = e.target;
                $(target).parent().stop().animate({
                    "margin-top": "-20px",
                }, 200)
            })
            $(".business .jin_box ul li").mouseout(e => {
                target = e.target;
                $(target).parent().stop().animate({
                    "margin-top": "0px",
                }, 200)
            })
        }else if(z==10){
            // 大触
            data.forEach(val => {
                $li=$(`<li><a href="javascript:void(0);"><div class="rz_head"><img src=${val.img_url}></div><div class="rz_head_bg"></div><div class="ru_zhu_desc">${val.p}</div></a></li>`)
                $(".da_chu .con ul").append($li)
            });
        }else if(z==11){
            // 式神渲染
            // 生成其他式神
            var arr=["SSR","联动","SSR","SR","R","N","呱太"];
            for(let i=0;i<arr.length;i++){
                $sec2=$(`<section></section>`);
                $ul2=$(`<ul style="display:block"></ul>`);
                data.forEach(val=>{
                    if(arr[i]==val.attr){
                        li=$(`<li><img src=${val.img_url}><p>${val.p}</p></li>`)
                        $ul2.append(li)
                    }
                    $sec2.append($ul2);
                })
                $(".section_con .shi_s_control").before($sec2)
            }
            // 渲染全部式神
            k = data.length / 24;
            let data2=data;
            $sec=$(`<section></section>`)
            for (let j = 0; j < k; j++) {
                ul = $(`<ul ></ul> `);
                // 每生成一个ul就添加30个li
                let del = data.splice(0, 24);
                for (let i = 0; i < del.length; i++) {
                    li=$(` <li><img src=${del[i].img_url}><p>${del[i].p}</p></li>`)
                    $(ul).append(li);
                }
                $sec.append(ul);
            }  
            $(".section_con .ss_tabs").after($sec)
            $(".section_con section:eq(0) ").attr("style","display:block")
            $(".section_con section:eq(0) >ul:eq(0)").addClass("show_ul change")
        }   

    })
}



