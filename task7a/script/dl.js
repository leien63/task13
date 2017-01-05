// JavaScript Document
 window.onload=function (){
   
   var pfa=document.getElementById("pf1");
   var pfb=document.getElementById("pf2");
   var pfc=document.getElementById("pf3");
   var pfright=document.getElementById("pf4");
   var bg=document.getElementById("bg");
   var notpf=document.getElementById("notpf");
   //var arr=["","",""];
   pfa.onmouseover=function(){
	   pfright.style.backgroundPosition="0 0";
	   }
   pfa.onclick=function(){
	   bg.style.backgroundImage="url(img/ldh.jpg)";
	   notpf.style.display="inline-block";
	   }
   pfb.onmouseover=function(){
	   pfright.style.backgroundPosition="0 -176px";
	   }
   pfb.onclick=function(){
	   bg.style.backgroundImage="url(img/ytxwz.jpg)";
	   notpf.style.display="inline-block";
	   }
   pfc.onmouseover=function(){
	   pfright.style.backgroundPosition="0 -352px";
	   }
	pfc.onclick=function(){
		 bg.style.backgroundImage="url(img/dycc.jpg)";
		 notpf.style.display="inline-block";
		}
	notpf.onclick=function(){
		bg.style.background="#FFF";
		notpf.style.display="none";
		}
	
	
	}
$(document).ready(function() {
    $("#gdcp").on('mouseenter',show);
	$("#waidi").on("mouseleave",hid);
	
    $(".t1mid").on('mouseenter',upmid);
	$('.t1mid').on("mouseleave",downmid);
	
	$('#t1right').on('mouseenter',upright);
	$('#t1right').on("mouseleave",downright);
	
	$("#t1a").on('mouseenter',t1aright);
    $('#t1a').on("mouseleave",t1arighthid);
	
	$("#t1left").on("click",fox);
	$('#tj').on("click",tuijian);
	$("#dh").on('click',daohang);
	$("#sp").on('click',shipin);
	$("#gw").on('click',gouwu);	
	$("#shouqi").on("click",closepifu);
	$("#chang").on("click",chang);
	
});
    
	 function fox(){
	  //$("#t1left").css({ "background":"#FFF"});
	  $(this).css({"background":"#9a9da2"})
	  $("#tuijian").hide();
	  $("#t1fox").show();
	  $("#daohang").hide();
	  $("#shipin").hide();
	  $("#gouwu").hide(); 
		 
		 }
	
   
    function tuijian(){
	  $("#t1left").css({ "background":"#FFF"});
	  $(this).css({"background":"#9a9da2"})
	  $("#tuijian").show();
	  $("#t1fox").hide();
	  $("#daohang").hide();
	  $("#shipin").hide();
	  $("#gouwu").hide();
	 
	  }
	   
	    function daohang(){
	  //$("#t1left").css({ "background":"#FFF"});
	  $(this).css({"background":"#9a9da2"})
	  $("#tuijian").hide();
	  $("#t1fox").hide();
	  $("#daohang").show();
	  $("#shipin").hide();
	  $("#gouwu").hide();
	 
	  }
	  
	  function shipin(){
	  //$("#t1left").css({ "background":"#FFF"});
	  $(this).css({"background":"#9a9da2"})
	  $("#tuijian").hide();
	  $("#t1fox").hide();
	  $("#daohang").hide();
	  $("#shipin").show();
	  $("#gouwu").hide();
	 
	  }
	   
    function gouwu(){
	  //$("#t1left").css({ "background":"#FFF"});
	  $(this).css({"background":"#9a9da2"})
	  $("#tuijian").hide();
	  $("#t1fox").hide();
	  $("#daohang").hide();
	  $("#shipin").hide();
	  $("#gouwu").show();
	 
	  }
   
    function show(){
		$("#waidi").show();
		}
		
	function hid(){
		$("#waidi").hide();
		}
		
		
    function upmid(){
		$(this).css({ color: "#FFF", background: "#b3b6bb" });
		//$("#t1mid").find('span').css({ color: "#ff0011", background: "#b3b6bb" });
		//$(this).css({ color: "#ff0011", background: "#b3b6bb" });
		//$('span').style.background="#b3b6bb";
		}
	function downmid(){
		$(this).css({ color: "#000", background: "#FFF"});
		}
  
   function upright(){
	   $(this).css({
		   "background-position":"-121px -73px"
		   });
	   }
	   
   function downright(){
	   $(this).css({
			"background-position": "-121px -49px"   
		   });
	   }	   
	   
   function t1aright(){
	   $(".t1aright").show();
	   }
	   
  function t1arighthid(){
	   $(".t1aright").hide();
	   }
   
   function closepifu(){
	   $(".huanfu").hide(800);
	   $(".huanfu").hi
	   $(".bd").show();
	   
	   }
  
  function chang(){
	  $(".huanfu").show(800);
	   $(".bd").hide();
	  }
	   
	   
	   
	   
	   
	   