for(var team=document.getElementById("team"),lt=team.getElementsByClassName("lt")[0],rt=team.getElementsByClassName("rt")[0],imgs=lt.getElementsByTagName("img"),ps=rt.getElementsByTagName("p"),imgs2=rt.getElementsByTagName("img"),dls=rt.getElementsByTagName("dl"),i=0;i<dls.length;i++)dls[i].onclick=function(){for(var e=0;e<imgs.length;e++)imgs[e].className="yc",ps[e].className="yc",imgs2[e].className="yc";var s=parseInt(this.getAttribute("dy"));imgs[s].className="cx",ps[s].className="cx",imgs2[s].className="cx"};