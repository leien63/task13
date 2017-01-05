// JavaScript Document
window.onload=function(){
  var btnpic1=document.getElementById("tu1");
  var btnpic2=document.getElementById("tu2");
  var btnpic3=document.getElementById("tu3");
  var shpic1=document.getElementById("pic1");
  var shpic2=document.getElementById("pic2");
  var shpic3=document.getElementById("pic3");
  
    var parthtml=document.getElementById("parthtml");
	var partcss=document.getElementById("partcss");
	var partjs=document.getElementById("partjs");
	var partweb=document.getElementById("partweb");
	    var showhtml=document.getElementById("showhtml");
		var showcss=document.getElementById("showcss");
		var showjs=document.getElementById("showjs");
		var showeb=document.getElementById("showeb");
		
		  var pic=document.getElementById("pic");
	
	 function wjk(){ pic.style.display="none"; showhtml.style.display="none";showcss.style.display="none"; showjs.style.display="none"; showeb.style.display="none";  }
	 
     function sh(){ shpic1.style.display="none"; shpic2.style.display="none"; shpic3.style.display="none";}
	 
	 btnpic1.onclick=function(){ wjk();sh();pic.style.display="block"; shpic1.style.display="inline-block";  }
	  btnpic2.onclick=function(){ wjk();sh();pic.style.display="block"; shpic2.style.display="inline-block";  }
	  btnpic3.onclick=function(){ wjk();sh();pic.style.display="block"; shpic3.style.display="inline-block";  }
	   
	   parthtml.onclick=function(){ wjk(); showhtml.style.display="inline-block"; }
	   partcss.onclick=function(){ wjk(); showcss.style.display="inline-block"; }
	   partjs.onclick=function(){ wjk(); showjs.style.display="inline-block"; }
	   partweb.onclick=function(){ wjk(); showeb.style.display="inline-block"; }
	
	
	
	
	}  //window.onload
