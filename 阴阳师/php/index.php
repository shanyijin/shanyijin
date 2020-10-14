<?php
    $hide=$_REQUEST["hide"];
    // echo $_GET["rcj"]."(".JSON_encode($arr).")";
    $conn=mysqli_connect("127.0.0.1","root","","yys",3306);
    mysqli_query($conn,"SET NAMES utf8");
    if($hide==0){
        // 新闻资讯渲染
        $sql="SELECT * FROM news";
        $result=mysqli_query($conn,$sql);
        $arr=[];
        while (($row=mysqli_fetch_assoc($result))!=null) {
            array_push($arr,$row);
        }
        echo $_GET["rcj"]."(".JSON_encode($arr).")";
    }elseif ($hide==1) {
        // nav_warp渲染
        $sql="SELECT * FROM nav_warp";
        $result=mysqli_query($conn,$sql);
        $arr=[];
        while (($row=mysqli_fetch_assoc($result))!=null) {
            array_push($arr,$row);
        }
        echo $_GET["rcj"]."(".JSON_encode($arr).")";
    }elseif($hide==2){
        // 声优渲染
        $sql="SELECT * FROM voice";
        $result=mysqli_query($conn,$sql);
        $arr=[];
        while (($row=mysqli_fetch_assoc($result))!=null) {
            array_push($arr,$row);
        }
        echo $_GET["rcj"]."(".JSON_encode($arr).")";
    }elseif ($hide==3) {
        // 游戏攻略
        // strategy-top
        $sql="SELECT * FROM strategy_top";
        $result=mysqli_query($conn,$sql);
        $arr=[];
        while (($row=mysqli_fetch_assoc($result))!=null) {
            array_push($arr,$row);
        }
        echo $_GET["rcj"]."(".JSON_encode($arr).")";
    }elseif ($hide==4) {
        // 活动
        $sql="SELECT * FROM huo_dong";
        $result=mysqli_query($conn,$sql);
        $arr=[];
        while (($row=mysqli_fetch_assoc($result))!=null) {
            array_push($arr,$row);
        }
        echo $_GET["rcj"]."(".JSON_encode($arr).")";
    }elseif ($hide==5) {
        // 活动
        $sql="SELECT * FROM tong_tab order by id desc limit 3";
        $result=mysqli_query($conn,$sql);
        $arr=[];
        while (($row=mysqli_fetch_assoc($result))!=null) {
            array_push($arr,$row);
        }
        echo $_GET["rcj"]."(".JSON_encode($arr).")";
    }elseif ($hide==6) {
        // 攻略
        $sql="SELECT * FROM strategy_bot ";
        $result=mysqli_query($conn,$sql);
        $arr=[];
        while (($row=mysqli_fetch_assoc($result))!=null) {
            array_push($arr,$row);
        }
        echo $_GET["rcj"]."(".JSON_encode($arr).")";
    }elseif ($hide==7) {
        // 攻略
        $sql="SELECT * FROM shi ";
        $result=mysqli_query($conn,$sql);
        $arr=[];
        while (($row=mysqli_fetch_assoc($result))!=null) {
            array_push($arr,$row);
        }
        echo $_GET["rcj"]."(".JSON_encode($arr).")";
    }elseif ($hide==8) {
        // 攻略
        $sql="SELECT * FROM fan_yl ";
        $result=mysqli_query($conn,$sql);
        $arr=[];
        while (($row=mysqli_fetch_assoc($result))!=null) {
            array_push($arr,$row);
        }
        echo $_GET["rcj"]."(".JSON_encode($arr).")";
    }elseif ($hide==9) {
        // 攻略
        $sql="SELECT * FROM js_ssj ";
        $result=mysqli_query($conn,$sql);
        $arr=[];
        while (($row=mysqli_fetch_assoc($result))!=null) {
            array_push($arr,$row);
        }
        echo $_GET["rcj"]."(".JSON_encode($arr).")";
    }elseif ($hide==10) {
        // 攻略
        $sql="SELECT * FROM da_chu";
        $result=mysqli_query($conn,$sql);
        $arr=[];
        while (($row=mysqli_fetch_assoc($result))!=null) {
            array_push($arr,$row);
        }
        echo $_GET["rcj"]."(".JSON_encode($arr).")";
    }elseif ($hide==11) {
        // 式神
        $sql="SELECT * FROM campione";
        $result=mysqli_query($conn,$sql);
        $arr=[];
        while (($row=mysqli_fetch_assoc($result))!=null) {
            array_push($arr,$row);
        }
        echo $_GET["rcj"]."(".JSON_encode($arr).")";
    }elseif($hide==12){
        $conn=mysqli_connect("127.0.0.1","root","","h52004",3306);
        mysqli_query($conn,"SET NAMES utf8");
        // 登录
        $name=$_POST["name"];
        $pwd=$_POST["pwd"];
        $sql="SELECT name,pwd FROM user";
        $result=mysqli_query($conn,$sql);
        while(($row=mysqli_fetch_row($result))!=null){
            if($name==$row[0]&&$pwd==$row[1]){
                echo $_GET["rcj"]."(".("<script>location='http://192.168.1.139/%e9%98%b4%e9%98%b3%e5%b8%88/yy%e5%88%86%e6%94%af/html/back.html?talk=登录成功';sessionStorage.name='$name'</script>").")";
                return false;
            }
        }
        echo $_GET["rcj"]."(".("<script>location='http://192.168.1.139/%e9%98%b4%e9%98%b3%e5%b8%88/yy%e5%88%86%e6%94%af/html/返回页面.html?talk=登录失败';sessionStorage.name='$name'</script>").")";
        // echo("<script>location='../html/返回页面.html?talk=登录失败'</script>");
    }elseif($hide==13){
        $conn=mysqli_connect("127.0.0.1","root","","h52004",3306);
        mysqli_query($conn,"SET NAMES utf8");
        // 注册验证
        $sql="SELECT name FROM user";
        $result=mysqli_query($conn,$sql);
        $arr=[];
        while (($row=mysqli_fetch_row($result))!=null) {
            array_push($arr,$row[0]);
        }
        echo $_GET["rcj"]."(".JSON_encode($arr).")";
    }elseif($hide==14){
        $conn=mysqli_connect("127.0.0.1","root","","h52004",3306);
        mysqli_query($conn,"SET NAMES utf8");
        // 注册提交
        $name=$_POST["name"];
        $pwd=$_POST["pwd"];
        $phone=$_POST["phone"];
        $sql="INSERT INTO user VALUES(0,'$name','$pwd','$phone',0)";
        $result=mysqli_query($conn,$sql);
        echo $_GET["rcj"]."(".("<script>location='http://192.168.1.139/%e9%98%b4%e9%98%b3%e5%b8%88/yy%e5%88%86%e6%94%af/html/返回页面.html?talk=注册成功';sessionStorage.name='$name'</script>").")";
    }
  
    
?>