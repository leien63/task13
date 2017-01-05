// JavaScript Document
var rd1=document.getElementById("round1");
var rd2=document.getElementById("round2");
var rd3=document.getElementById("round3");
var rd4=document.getElementById("round4");
var daohang=document.getElementById("dh");
var left4=document.getElementById("left4");
var right2=document.getElementById("right2");

  var tempcolor=localStorage.getItem('a');
  if (tempcolor){
	   changecolor(tempcolor)
	  }


rd1.onclick=function(){
	 changecolor("#0CC")
	 }
rd2.onclick=function(){
	 changecolor("#C36")
	}
rd3.onclick=function(){
	 changecolor("#390")
	}
rd4.onclick=function(){
	 changecolor("#CCC")
	}
	
function changecolor(c){
	daohang.style.background=c; 
	 left4.style.background=c; 
	 right2.style.color=c; 
	 window.localStorage.setItem('a',c);	
	}	
	
	
	
	