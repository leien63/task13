// JavaScript Document
// JavaScript Document
var up1=document.getElementById("up");
var down1=document.getElementById("down");
var oimg=document.getElementById("img1");
var img1=__uri('img/zp1.jpg');
var img2=__uri('img/zp1.png');
var img3=__uri('img/zp2.png');
var img4=__uri('img/zp3.png');
var arrimg=[img1,img2,img3,img4];
var num=0;
function major(){
	oimg.src=arrimg[num];
	}
 major();
 
 up1.onclick=function(){
	 num--;
	 if(num==-1){
		 num=arrimg.length-1;
		 }
	   major();
	 }

 down1.onclick=function(){
	 num++;
	 if(num==arrimg.length){
		 num=0;
		 }
		major();
	 }
 