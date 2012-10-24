
/*debugger;*/
/*--------------------------------------滚动代码开始------------------------------------*/
var divId;
var eventbool=true;			//false表示src这个函数不能调用
var timeid;
var mdtop=0;
var zhtop=0;
var tt=600;					//tt表示运动的总时间
var a = 2*zhtop/(tt*tt); 	/*a表示加速度*/
var t=0;					//在循环中一次循环代表时间过去一秒
function src(weizhi){
	t++;
	mdtop=Math.round(mdtop);
   //document.getElementById(divId).innerHTML="mdtop:"+mdtop+"<br>zhtop:"+zhtop;
   document.getElementById(divId).style.position='absolute';
   document.getElementById(divId).style.zIndex=999;
	timeid=setTimeout("src('"+weizhi+"')",10);
if(mdtop!=zhtop){
			if(mdtop<zhtop){
			
						if(t>300){mdtop=mdtop+0.01;}else{
														if(mdtop+a*t*t/2>zhtop){mdtop=zhtop;}else{mdtop=mdtop+a*t*t/2;}
														}
			document.getElementById(divId).style.top=mdtop+"px";
			if(weizhi=="right"){
					document.getElementById(divId).style.right="0px";
			}else{
					document.getElementById(divId).style.left=document.documentElement.scrollLeft;//靠左边浮动
				}
;
			//document.getElementById(divId).style.left=(document.documentElement.scrollLeft+(document.documentElement.clientWidth-document.getElementById(divId).offsetWidth))+"px";//靠右边浮动。

			}else if(mdtop>zhtop){
							if(t>300){mdtop=mdtop-0.01;}else{ 
															if(mdtop-a*t*t/2<zhtop) {mdtop=zhtop} else{ mdtop=mdtop-a*t*t/2;}
															}
						document.getElementById(divId).style.top=mdtop+"px";
							if(weizhi=="right"){
						document.getElementById(divId).style.right="0px";
							}else{
								document.getElementById(divId).style.left=document.documentElement.scrollLeft;//靠左边浮动;
								}

							//document.getElementById(divId).style.left=(document.documentElement.scrollLeft+(document.documentElement.clientWidth-document.getElementById(divId).offsetWidth))+"px";//靠右边浮动

								}
}else{
		t=0;
		clearTimeout(timeid);
		eventbool=true;		//后这个函数可以调用
	}

}

function srctime(id,weizhi){
	divId=id;
	zhtop=(document.documentElement.scrollTop+(document.documentElement.clientHeight-document.getElementById(divId).offsetHeight)/2);
     zhtop=Math.round(zhtop);
	 a=zhtop%2;
	 if(a!=0) {zhtop=zhtop+1;}
	 b=Math.abs(zhtop-mdtop);
	 a = 2*b/(tt*tt);
	 if(eventbool){
	 setTimeout("yanchi('"+weizhi+"')",100);
	 eventbool=false;
	 }
}
function yanchi(weizhi){
src(weizhi);
}
/*--------------------------------------滚动代码结束------------------------------------*/




function gundong(){
	srctime('hua',"right");
	}
window.onresize=gundong;
window.onload=gundong;
window.onscroll=gundong;
