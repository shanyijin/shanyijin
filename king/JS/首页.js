var con_1=document.getElementById("con-1"),img=con_1.getElementsByTagName("img")[0],con_3=document.getElementById("con-3");console.log(con_3);var img2=con_3.getElementsByTagName("img")[0];img.onmouseover=function(){this.className="animate__heartBeat"},img.onmouseout=function(){this.className=""},img2.onmouseover=function(){console.log(1),this.className="animate__hinge"},img2.onmouseout=function(){this.className=""};