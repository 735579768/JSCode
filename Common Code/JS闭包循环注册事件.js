// JavaScript Document
//JS闭包循环注册事件
//注册tab事件------------------------------
function $sel(id,tabname){
﻿
﻿if(id!="" && tabname!=""){
var tem_obj=document.getElementById(id);
return tem_obj.getElementsByTagName(tabname);
}else if(id!=""){
return document.getElementById(id);
}else{
return document.getElementsByTagName(tabname);
}﻿
﻿
}
var objs=$sel("seltab","li");
for(j=0;j<$sel("seltab","li").length;j++){
//document.write (j);
objs[j].onmouseover=(function(j){
return function(){
divshow(j);
};
})(j);
}

function divshow(a){
for(i=1;i<=$sel("seltab","li").length;i++){
if (a==i){
$sel("con_one_"+i,"").style.display='block';
}else{
$sel("con_one_"+i,"").style.display='none';
}
}
}
//注册tab事件------------------------------
